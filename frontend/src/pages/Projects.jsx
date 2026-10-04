import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
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

  return (
    <section className="container-page py-16 sm:py-20">
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
