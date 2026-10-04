import logging
from django.core.mail import EmailMessage
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.response import Response
from .serializers import EnquirySerializer

logger = logging.getLogger(__name__)

@api_view(["POST"])
def create_enquiry(request):
    if request.data.get("website"):  # honeypot filled: pretend success
        return Response(status=status.HTTP_201_CREATED)
    s = EnquirySerializer(data=request.data)
    s.is_valid(raise_exception=True)
    e = s.save()  # stored first, so no enquiry is lost if email fails
    try:
        clean_name = e.name.replace("\r", " ").replace("\n", " ")
        EmailMessage(
            subject=f"New enquiry from {clean_name}",
            body=(f"Name: {e.name}\nEmail: {e.email}\n"
                  f"Project type: {e.project_type}\nBudget: {e.budget}\n\n{e.message}"),
            to=[settings.ENQUIRY_TO_EMAIL],
            reply_to=[e.email],
        ).send(fail_silently=False)
    except Exception:
        logger.exception("Could not send enquiry email")
    return Response(status=status.HTTP_201_CREATED)


from rest_framework.throttling import AnonRateThrottle
from .chat_context import SYSTEM, FALLBACK


class ChatThrottle(AnonRateThrottle):
    scope = "chat"


def _clean_messages(raw):
    if not isinstance(raw, list):
        return []
    out = []
    for m in raw[-10:]:
        if isinstance(m, dict) and m.get("role") in ("user", "assistant") and isinstance(m.get("content"), str):
            text = m["content"].strip()[:1000]
            if text:
                out.append({"role": m["role"], "content": text})
    while out and out[0]["role"] != "user":  # API needs the first message from the user
        out.pop(0)
    return out


@api_view(["POST"])
@throttle_classes([ChatThrottle])
def chat(request):
    messages = _clean_messages(request.data.get("messages"))
    if not messages or messages[-1]["role"] != "user":
        return Response({"detail": "Send a message."}, status=status.HTTP_400_BAD_REQUEST)
    if not settings.ANTHROPIC_API_KEY:
        return Response({"reply": FALLBACK})
    try:
        import anthropic
        client = anthropic.Anthropic(api_key=settings.ANTHROPIC_API_KEY)
        r = client.messages.create(model=settings.CHAT_MODEL, max_tokens=400, system=SYSTEM, messages=messages)
        reply = "".join(b.text for b in r.content if b.type == "text").strip()
    except Exception:
        return Response({"detail": "The assistant is unavailable."}, status=status.HTTP_503_SERVICE_UNAVAILABLE)
    return Response({"reply": reply or FALLBACK})
