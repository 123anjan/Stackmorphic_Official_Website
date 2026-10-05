import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects, testimonials } from "../data/projects.js";
import { usePage } from "../lib/usePage.js";

const projectHighlights = [
  { label: "Projects", value: `${projects.length} project concepts` },
  { label: "Focus", value: "Business UX" },
  { label: "Process", value: "Discover → design → build" },
];

export default function Projects() {
  usePage(
    "Projects",
    "Case studies of websites and web applications built by Anjan Basak.",
  );

  const [tech, setTech] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(1);
  const [testimonialsPaused, setTestimonialsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const techFilters = [
    "All",
    "React",
    "Django",
    "Python",
    "HTML5",
    "Tailwind CSS",
    "MongoDB",
    "Oracle SQL",
    "REST APIs",
  ];
  const shown =
    tech === "All" ? projects : projects.filter((p) => p.tech.includes(tech));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const smallScreen = window.matchMedia("(min-width: 640px)");
    const largeScreen = window.matchMedia("(min-width: 1024px)");
    const updateVisibleTestimonials = () => {
      setVisibleTestimonials(largeScreen.matches ? 3 : smallScreen.matches ? 2 : 1);
    };
    updateVisibleTestimonials();
    smallScreen.addEventListener("change", updateVisibleTestimonials);
    largeScreen.addEventListener("change", updateVisibleTestimonials);
    return () => {
      smallScreen.removeEventListener("change", updateVisibleTestimonials);
      largeScreen.removeEventListener("change", updateVisibleTestimonials);
    };
  }, []);

  useEffect(() => {
    setTestimonialIndex((index) =>
      Math.min(index, Math.max(0, testimonials.length - visibleTestimonials)),
    );
  }, [visibleTestimonials]);

  useEffect(() => {
    if (testimonials.length < 2 || testimonialsPaused || reducedMotion) return;
    const interval = window.setInterval(() => {
      setTestimonialIndex((index) => {
        const lastStartIndex = Math.max(
          0,
          testimonials.length - visibleTestimonials,
        );
        return index >= lastStartIndex ? 0 : index + 1;
      });
    }, 5000);
    return () => window.clearInterval(interval);
  }, [reducedMotion, testimonialsPaused, visibleTestimonials]);

  return (
    <section className="container-page overflow-x-hidden py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <span className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Selected work
          </span>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Portfolio built around clarity, usability, and delivery.
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg text-muted">
            I create polished digital experiences for small businesses and product-minded teams, with a focus on clean design, solid structure, and practical business outcomes.
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl border border-line bg-surface p-5">
          {projectHighlights.map((item) => (
            <div key={item.label} className="flex items-baseline justify-between gap-3 border-b border-line pb-3 last:border-b-0 last:pb-0">
              <span className="text-sm text-muted">{item.label}</span>
              <span className="font-display text-lg font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="mt-10 max-w-[60ch] rounded-2xl border border-line bg-surface p-6">
          <p className="font-medium">Case studies are being added.</p>
          <p className="mt-2 text-muted">
            In the meantime, describe what you need and I will explain how I would approach it.
          </p>
          <Link to="/contact" className="btn btn-secondary mt-4">
            Tell me about your project
          </Link>
        </div>
      ) : (
        <>
          <div
            role="group"
            aria-label="Filter by technology"
            className="mt-10 flex flex-wrap gap-2"
          >
            {techFilters.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={tech === t}
                onClick={() => {
                  setTech(t);
                  setVisibleCount(3);
                }}
                className={
                  "btn btn-secondary !py-1.5 " +
                  (tech === t ? "!border-brand !text-brand" : "")
                }
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {shown.slice(0, visibleCount).map((p) => (
              <article
                key={p.slug}
                className="rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand sm:p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold sm:text-xl">{p.name}</h2>
                      <span className="tag">{p.type}</span>
                      {p.sample && <span className="tag">Sample</span>}
                    </div>
                  </div>
                </div>

                <dl className="mt-4 grid gap-x-6 gap-y-4 border-t border-line pt-4 sm:grid-cols-2">
                  {[
                    ["Problem", p.problem],
                    ["Approach", p.approach],
                    ["Solution", p.solution],
                    ["Result", p.result],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>

                {p.features?.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Key features
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {p.features.map((feature) => (
                        <li key={feature} className="tag">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {(p.live || p.github) && (
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-3">
                    {p.live && (
                      <a
                        className="btn btn-primary !px-4 !py-2"
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View live site <span className="ml-2" aria-hidden="true">↗</span>
                      </a>
                    )}
                    {p.github && (
                      <a
                        className="btn btn-secondary !px-4 !py-2"
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View source <span className="ml-2" aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
          {shown.length > visibleCount && (
            <div className="mt-8 text-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setVisibleCount((count) => count + 3)}
              >
                See more projects
              </button>
            </div>
          )}
        </>
      )}

      {testimonials.length > 0 && (
        <section className="mt-16" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="text-2xl font-bold sm:text-3xl">
            What clients say
          </h2>
          <div
            className="mt-8 overflow-hidden"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
              style={{
                width: `${(testimonials.length / visibleTestimonials) * 100}%`,
                transform: `translateX(-${testimonialIndex * (100 / testimonials.length)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.id}
                  className="flex shrink-0 flex-col rounded-xl border border-line bg-surface p-6"
                  style={{ width: `${100 / testimonials.length}%` }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${testimonials.length}`}
                  aria-hidden={
                    index < testimonialIndex ||
                    index >= testimonialIndex + visibleTestimonials
                  }
                >
                  {testimonial.highlight && (
                    <p className="text-sm font-semibold text-brand">
                      {testimonial.highlight}
                    </p>
                  )}
                  <blockquote className="mt-4 flex-1 text-muted">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt=""
                        loading="lazy"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-sm font-bold"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                    )}
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted">
                        {testimonial.role}
                        {testimonial.company && ` · ${testimonial.company}`}
                      </p>
                    </div>
                    {testimonial.rating != null && (
                      <span
                        role="img"
                        className="ml-auto whitespace-nowrap text-sm"
                        aria-label={`Rated ${testimonial.rating} out of 5 stars`}
                      >
                        <span aria-hidden="true" className="text-amber-500">
                          {"★".repeat(Math.round(testimonial.rating))}
                        </span>
                        <span aria-hidden="true" className="text-muted">
                          {"☆".repeat(5 - Math.round(testimonial.rating))}
                        </span>
                        <span className="ml-1 text-muted">
                          {testimonial.rating}/5
                        </span>
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
          {testimonials.length > 1 && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="btn btn-secondary !py-2"
                aria-label="Previous testimonial"
                onClick={() =>
                  setTestimonialIndex((index) => {
                    const lastStartIndex = Math.max(
                      0,
                      testimonials.length - visibleTestimonials,
                    );
                    return index <= 0 ? lastStartIndex : index - 1;
                  })
                }
              >
                Previous
              </button>
              {!reducedMotion && (
                <button
                  type="button"
                  className="btn btn-secondary !py-2"
                  aria-label={
                    testimonialsPaused
                      ? "Resume testimonials"
                      : "Pause testimonials"
                  }
                  onClick={() => setTestimonialsPaused((paused) => !paused)}
                >
                  {testimonialsPaused ? "Play" : "Pause"}
                </button>
              )}
              <button
                type="button"
                className="btn btn-secondary !py-2"
                aria-label="Next testimonial"
                onClick={() =>
                  setTestimonialIndex((index) => {
                    const lastStartIndex = Math.max(
                      0,
                      testimonials.length - visibleTestimonials,
                    );
                    return index >= lastStartIndex ? 0 : index + 1;
                  })
                }
              >
                Next
              </button>
            </div>
          )}
        </section>
      )}

      <div className="mt-16 rounded-3xl border border-line bg-surface p-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Need a website that feels as polished as your business?</h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-muted">
          Let’s turn your goals into a clear digital presence that looks professional and makes it easy for people to take the next step.
        </p>
        <Link to="/contact" className="btn btn-primary mt-6">
          Request a quote
        </Link>
      </div>
    </section>
  );
}
