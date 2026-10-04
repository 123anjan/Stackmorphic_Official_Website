import { useEffect, useState } from "react";
import { api, errText } from "../lib/api.js";
import { useAuth } from "../lib/auth.jsx";
import { usePage } from "../lib/usePage.js";

const types = [
  "Business website",
  "Web application",
  "Redesign",
  "Not sure yet",
];
const LABEL = {
  submitted: "Submitted",
  reviewing: "Reviewing",
  quoted: "Quoted",
  in_progress: "In progress",
  completed: "Completed",
  cancelled: "Cancelled",
};
const fmt = (d) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function Dashboard() {
  usePage("Dashboard", "");
  const { user, logout } = useAuth();
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  const load = () =>
    api("/requests/")
      .then(setItems)
      .catch((e) => (e.status === 401 ? logout() : setError(errText(e))));
  useEffect(() => {
    load();
  }, []);

  async function create(e) {
    e.preventDefault();
    const form = e.target;
    setBusy(true);
    setError("");
    try {
      await api("/requests/", {
        method: "POST",
        body: Object.fromEntries(new FormData(form)),
      });
      form.reset();
      setOpen(false);
      await load();
    } catch (err) {
      setError(errText(err));
    }
    setBusy(false);
  }

  return (
    <section className="container-page py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          <p className="mt-1 text-muted">{user.email}</p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {open ? "Cancel" : "New project request"}
          </button>
          <button type="button" className="btn btn-secondary" onClick={logout}>
            Log out
          </button>
        </div>
      </div>

      {open && (
        <form
          onSubmit={create}
          className="mt-8 max-w-2xl space-y-4 border border-line p-6"
        >
          <div>
            <label htmlFor="title" className="mb-1 block text-sm">
              Project title
            </label>
            <input
              id="title"
              name="title"
              required
              maxLength={140}
              className="field"
            />
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
            <label htmlFor="description" className="mb-1 block text-sm">
              What do you need?
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              required
              className="field"
            />
          </div>
          <button className="btn btn-primary" disabled={busy}>
            {busy ? "Sending..." : "Send request"}
          </button>
        </form>
      )}

      {error && (
        <p role="alert" className="mt-6 text-sm text-red-600">
          {error}
        </p>
      )}

      <h2 className="mt-12 text-2xl font-bold">Your project requests</h2>
      {items === null ? (
        <p className="mt-4 text-muted" role="status">
          Loading...
        </p>
      ) : items.length === 0 ? (
        <p className="mt-4 max-w-[60ch] border border-line p-6 text-muted">
          You have no requests yet. Use "New project request" to send your first
          one.
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {items.map((r) => (
            <li key={r.id} className="border border-line p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{r.title}</h3>
                <span className="tag">{LABEL[r.status] || r.status}</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                Sent {fmt(r.created_at)}
                {r.project_type && " · " + r.project_type}
                {r.budget && " · Budget: " + r.budget}
              </p>
              <p className="mt-3 whitespace-pre-line">{r.description}</p>
              {r.update_note && (
                <div className="mt-4 border-l-4 border-brand bg-surface p-3 text-sm">
                  <p className="font-medium">Update from the developer</p>
                  <p className="mt-1 whitespace-pre-line">{r.update_note}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
