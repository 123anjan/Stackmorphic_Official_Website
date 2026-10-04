import { useState, useEffect } from "react";
import { site } from "../siteConfig.js";
import { usePage } from "../lib/usePage.js";
const API = import.meta.env.VITE_API_URL || "";
const types = [
  "Business website",
  "Web application",
  "Redesign",
  "Not sure yet",
];

export default function Contact() {
  usePage(
    "Contact",
    "Request a quote or book a call about your website project.",
  );
  const [state, setState] = useState({ status: "idle", errors: {} });
  useEffect(() => {
    if (state.status !== "sent") return;
    const t = setTimeout(() => setState({ status: "idle", errors: {} }), 5000);
    return () => clearTimeout(t);
  }, [state.status]);
  async function submit(e) {
    e.preventDefault();
    const form = e.target;
    setState({ status: "sending", errors: {} });
    const body = Object.fromEntries(new FormData(form));
    try {
      const r = await fetch(API + "/api/enquiries/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (r.ok) {
        form.reset();
        setState({ status: "sent", errors: {} });
      } else
        setState({ status: "error", errors: await r.json().catch(() => ({})) });
    } catch {
      setState({ status: "error", errors: {} });
    }
  }
  const err = (k) =>
    state.errors[k] && (
      <p role="alert" className="mt-1 text-sm text-red-600">
        {[].concat(state.errors[k]).join(" ")}
      </p>
    );
  return (
    <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h1 className="text-4xl font-bold">Tell me about your project</h1>
        <p className="mt-4 max-w-[50ch] text-muted">
          Send the details and I will reply with questions or a quote.
        </p>
        {site.bookingUrl && (
          <a
            className="btn btn-secondary mt-6 mr-3"
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        )}
        {site.whatsapp && (
          <a
            className="btn btn-secondary mt-6"
            href={"https://wa.me/" + site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        )}
      </div>
      <form onSubmit={submit} className="space-y-4" noValidate>
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div>
          <label htmlFor="name" className="mb-1 block text-sm">
            Name
          </label>
          <input id="name" name="name" required className="field" />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field"
          />
          {err("email")}
        </div>
        <div>
          <label htmlFor="project_type" className="mb-1 block text-sm">
            Project type
          </label>
          <select id="project_type" name="project_type" className="field">
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1 block text-sm">
            Budget (optional)
          </label>
          <input id="budget" name="budget" className="field" />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="field"
          />
          {err("message")}
        </div>
        <button
          className="btn btn-primary"
          disabled={state.status === "sending"}
        >
          {state.status === "sending" ? "Sending..." : "Send enquiry"}
        </button>
        <p key={state.status} aria-live="polite" className="fade-in text-sm">
          {state.status === "sent" && "Enquiry sent. I will reply by email."}
          {state.status === "error" &&
            "Could not send. Check the fields above and try again."}
        </p>
      </form>
    </section>
  );
}
