import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth.jsx";
import { errText } from "../lib/api.js";
import { usePage } from "../lib/usePage.js";

export default function Account({ mode }) {
  const isLogin = mode === "login";
  usePage(isLogin ? "Log in" : "Create account", "");
  const { user, login, register } = useAuth();
  const loc = useLocation();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to={loc.state?.from || "/dashboard"} replace />;

  async function submit(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    setBusy(true);
    setError("");
    try {
      if (isLogin) await login(f.email, f.password);
      else await register(f.name, f.email, f.password);
    } catch (err) {
      setError(errText(err));
    }
    setBusy(false);
  }

  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-bold">
          {isLogin ? "Client login" : "Create your client account"}
        </h1>
        <p className="mt-3 text-muted">
          {isLogin
            ? "Log in to follow your project requests."
            : "Send project requests and follow their progress."}
        </p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="mb-1 block text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="field"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="mb-1 block text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="field"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={isLogin ? undefined : 8}
              autoComplete={isLogin ? "current-password" : "new-password"}
              className="field"
            />
            {!isLogin && (
              <p className="mt-1 text-xs text-muted">
                At least 8 characters, not a common password.
              </p>
            )}
          </div>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <button className="btn btn-primary w-full" disabled={busy}>
            {busy ? "Please wait..." : isLogin ? "Log in" : "Create account"}
          </button>
        </form>
        <p className="mt-6 text-sm text-muted">
          {isLogin ? "New here? " : "Already have an account? "}
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="text-brand underline"
          >
            {isLogin ? "Create an account" : "Log in"}
          </Link>
        </p>
      </div>
    </section>
  );
}
