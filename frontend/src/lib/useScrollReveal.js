import { useLayoutEffect } from "react";

// Which blocks fade in. Add data-reveal="off" to any element you want to skip.
const TARGETS = [
  "main section > *:not(.container-page):not(.grid)",
  "main section > .container-page > *:not(.grid)",
  "main section > .grid > *",
  "main section > .container-page > .grid > *",
  "main article > *:not(.grid)",
  "main article > .grid > *",
]
  .map((s) => s + ':not(.rise):not([data-reveal="off"])')
  .join(",");

export function useScrollReveal() {
  useLayoutEffect(() => {
    // Header shadow and scroll progress (style values only, no layout work)
    const root = document.documentElement;
    const onScroll = () => {
      root.toggleAttribute("data-scrolled", window.scrollY > 8);
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--scroll",
        max > 0 ? Math.min(window.scrollY / max, 1).toFixed(3) : "0",
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    const cleanupScroll = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const main = document.getElementById("main");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!main || reduce || !("IntersectionObserver" in window))
      return cleanupScroll;

    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.style.transitionDelay = Math.min(i++ * 60, 240) + "ms";
          el.classList.add("reveal-in");
          const done = (ev) => {
            if (ev.target !== el) return;
            el.style.transitionDelay = ""; // so hover effects are not delayed later
            el.removeEventListener("transitionend", done);
          };
          el.addEventListener("transitionend", done);
          io.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    const scan = () => {
      main.querySelectorAll(TARGETS).forEach((el) => {
        if (el.dataset.rv) return;
        el.dataset.rv = "1";
        el.classList.add("reveal");
        io.observe(el);
      });
    };
    scan();
    const mo = new MutationObserver(scan); // catches pages and lists that load later
    mo.observe(main, { childList: true, subtree: true });

    return () => {
      cleanupScroll();
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}
