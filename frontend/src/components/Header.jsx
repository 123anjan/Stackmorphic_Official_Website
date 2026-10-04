import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site, nav } from "../siteConfig.js";
import { useAuth } from "../lib/auth.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const link = ({ isActive }) =>
    "whitespace-nowrap py-2 text-sm " +
    (isActive ? "text-brand" : "text-muted hover:text-ink");
  const account = user ? "Dashboard" : "Log in";
  const accountTo = user ? "/dashboard" : "/login";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3 font-display text-lg font-bold">
          <img
            src={site.logo}
            alt={`${site.brand} logo`}
            className="h-8 w-8 rounded-full border border-line bg-surface object-cover"
          />
          <span>{site.brand}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
          {nav.map(([l, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={link}>
              {l}
            </NavLink>
          ))}
          <NavLink to={accountTo} className={link}>
            {account}
          </NavLink>
          <ThemeToggle compact />
          <Link to="/contact" className="btn btn-primary whitespace-nowrap">
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          className="btn btn-secondary xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg xl:hidden">
          <nav
            aria-label="Mobile"
            className="container-page flex flex-col gap-1 py-4"
          >
            <div className="mb-2 flex justify-end">
              <ThemeToggle compact />
            </div>
            {nav.map(([l, to]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={link}
                onClick={() => setOpen(false)}
              >
                {l}
              </NavLink>
            ))}
            <NavLink
              to={accountTo}
              className={link}
              onClick={() => setOpen(false)}
            >
              {account}
            </NavLink>
            <Link
              to="/contact"
              className="btn btn-primary mt-3"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
