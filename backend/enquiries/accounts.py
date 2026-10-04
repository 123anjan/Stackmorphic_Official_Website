from django.conf import settings
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from rest_framework import generics, permissions
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from .models import ProjectRequest
from .serializers import RegisterSerializer, ProjectRequestSerializer


class AuthThrottle(AnonRateThrottle):
    scope = "auth"


def _payload(user):
    return {"name": user.first_name, "email": user.email}


@api_view(["POST"])
@throttle_classes([AuthThrottle])
@permission_classes([permissions.AllowAny])
def register(request):
    s = RegisterSerializer(data=request.data)
    s.is_valid(raise_exception=True)
    user = s.save()
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key, "user": _payload(user)}, status=201)


@api_view(["POST"])
@throttle_classes([AuthThrottle])
@permission_classes([permissions.AllowAny])
def login(request):
    email = str(request.data.get("email", "")).strip().lower()
    user = authenticate(request, username=email, password=request.data.get("password", ""))
    if not user:
        return Response({"detail": "Incorrect email or password."}, status=400)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key, "user": _payload(user)})


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def logout(request):
    Token.objects.filter(user=request.user).delete()
    return Response(status=204)


@api_view(["GET"])
@permission_classes([permissions.IsAuthenticated])
def me(request):
    return Response(_payload(request.user))


class RequestList(generics.ListCreateAPIView):
    serializer_class = ProjectRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):  # a client only ever sees their own requests
        return ProjectRequest.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        r = serializer.save(user=self.request.user)
        try:
            send_mail(f"New project request: {r.title}",
                      f"{self.request.user.email}\n{r.project_type} | {r.budget}\n\n{r.description}",
                      None, [settings.ENQUIRY_TO_EMAIL])
        except Exception:
            pass