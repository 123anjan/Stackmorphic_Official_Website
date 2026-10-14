import { useSyncExternalStore } from "react";

const listeners = new Set();
let transitionTimeout;

function getTheme() {
  return document.documentElement.dataset.theme || "light";
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function toggleTheme(event) {
  const root = document.documentElement;
  const nextTheme = getTheme() === "dark" ? "light" : "dark";
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = bounds.left + bounds.width / 2;
  const y = bounds.top + bounds.height / 2;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  root.style.setProperty("--theme-reveal-x", `${x}px`);
  root.style.setProperty("--theme-reveal-y", `${y}px`);
  root.style.setProperty("--theme-reveal-radius", `${radius}px`);

  function applyTheme() {
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {}
    listeners.forEach((listener) => listener());
  }

  if (
    document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document.startViewTransition(applyTheme);
    return;
  }

  root.classList.add("theme-transition");
  window.clearTimeout(transitionTimeout);
  transitionTimeout = window.setTimeout(
    () => root.classList.remove("theme-transition"),
    1500,
  );
  applyTheme();
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  return [theme, toggleTheme];
}
