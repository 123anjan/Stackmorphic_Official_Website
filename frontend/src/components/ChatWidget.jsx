import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "";
const START = [
  {
    role: "assistant",
    content:
      "Hi, I am an AI assistant. Ask me about the services, the tools used or how a project runs. For a quote, use the contact form.",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState(START);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const input = useRef(null),
    btn = useRef(null),
    end = useRef(null);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);
  useEffect(() => {
    end.current?.scrollIntoView({ block: "end" });
  }, [msgs, busy]);
  const close = () => {
    setOpen(false);
    btn.current?.focus();
  };

  async function send(e) {
    e.preventDefault();
    const q = text.trim();
    if (!q || busy) return;
    const next = [...msgs, { role: "user", content: q }];
    setMsgs(next);
    setText("");
    setError("");
    setBusy(true);
    try {
      const r = await fetch(API + "/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await r.json().catch(() => ({}));
      if (r.ok && data.reply)
        setMsgs([...next, { role: "assistant", content: data.reply }]);
      else
        setError(
          r.status === 429
            ? "Too many messages. Please try again later or use the contact form."
            : "The assistant is unavailable. Please use the contact form.",
        );
    } catch {
      setError("Could not reach the assistant. Please use the contact form.");
    }
    setBusy(false);
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      onKeyDown={(e) => e.key === "Escape" && open && close()}
    >
      {open && (
        <section
          role="dialog"
          aria-label="AI assistant"
          className="pop mb-3 flex h-[28rem] max-h-[75vh] w-[min(22rem,calc(100vw-2rem))] flex-col border border-line bg-bg shadow-lg"
        >
          <header className="flex items-center justify-between border-b border-line px-4 py-3">
            <h2 className="font-display text-base font-bold">Ask a question</h2>
            <button
              type="button"
              onClick={close}
              className="text-sm text-muted hover:text-ink"
            >
              Close
            </button>
          </header>
          <div
            role="log"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm"
          >
            {msgs.map((m, i) => (
              <p
                key={i}
                className={
                  m.role === "user"
                    ? "ml-8 bg-brand px-3 py-2 text-white"
                    : "mr-8 bg-surface px-3 py-2"
                }
              >
                {m.content}
              </p>
            ))}
            {busy && (
              <p className="mr-8 bg-surface px-3 py-2 text-muted">
                Thinking...
              </p>
            )}
            {error && (
              <p role="alert" className="text-red-600">
                {error}{" "}
                <Link to="/contact" onClick={close} className="underline">
                  Contact page
                </Link>
              </p>
            )}
            <div ref={end} />
          </div>
          <form onSubmit={send} className="border-t border-line p-3">
            <label htmlFor="chat-input" className="sr-only">
              Your question
            </label>
            <div className="flex gap-2">
              <input
                id="chat-input"
                ref={input}
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={500}
                autoComplete="off"
                className="field"
                placeholder="Type your question"
              />
              <button
                className="btn btn-primary"
                disabled={busy || !text.trim()}
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-xs text-muted">
              AI answers can be wrong. Quotes and prices come from the
              developer.
            </p>
          </form>
        </section>
      )}
      <button
        ref={btn}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="chat-fab btn btn-primary ml-auto flex shadow-lg"
      >
        {open ? "Hide chat" : "Ask a question"}
      </button>
    </div>
  );
}
