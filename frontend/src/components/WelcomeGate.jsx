import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth.jsx";

const accountPaths = new Set(["/login", "/signup"]);

export default function WelcomeGate() {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);
  const signupRef = useRef(null);
  const isAccountPage = accountPaths.has(pathname.replace(/\/+$/, ""));

  useEffect(() => {
    if (user) setOpen(false);
  }, [user]);

  useEffect(() => {
    if (open && !loading && !user && !isAccountPage) {
      signupRef.current?.focus();
    }
  }, [isAccountPage, loading, open, user]);

  if (loading || user || isAccountPage || !open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/60 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        className="pop relative w-full max-w-lg border border-line bg-bg p-6 shadow-xl sm:p-8"
      >
        <button
          type="button"
          aria-label="Continue browsing without an account"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-3 rounded px-2 py-1 text-2xl leading-none text-muted hover:text-ink"
        >
          &times;
        </button>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Welcome to Stackmorphic
        </p>
        <h2 id="welcome-title" className="mt-3 text-2xl font-bold sm:text-3xl">
          Create an account to explore more
        </h2>
        <p className="mt-4 text-muted">
          Sign up or log in to view Services, Projects, Process, and Pricing.
          You can continue browsing the rest of the site without an account.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Link
            ref={signupRef}
            to="/signup"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="btn btn-secondary"
            onClick={() => setOpen(false)}
          >
            Log in
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-5 w-full py-2 text-sm text-muted underline hover:text-ink"
        >
          Continue browsing
        </button>
      </section>
    </div>
  );
}
