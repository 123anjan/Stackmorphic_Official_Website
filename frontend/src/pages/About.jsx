import { Link } from "react-router-dom";
import { site } from "../siteConfig.js";
import { about, toolGroups } from "../data/about.js";
import { rules } from "../data/process.js";
import { usePage } from "../lib/usePage.js";

const initials = site.developer
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function About() {
  usePage(
    "About",
    `${site.developer} is a freelance full-stack web developer who designs, builds and launches business websites and web applications.`,
  );

  const facts = about.facts.filter(([, v]) => v);
  const missing = [
    !about.photo && "a photo",
    about.story.length === 0 && "your story",
    about.credentials.length === 0 && "education or credentials (optional)",
  ].filter(Boolean);

  return (
    <>
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          {import.meta.env.DEV && missing.length > 0 && (
            <p
              role="note"
              className="mb-8 border border-accent bg-surface p-4 text-sm"
            >
              Preview note: add {missing.join(", ")} in{" "}
              <code>src/data/about.js</code>. Empty sections stay hidden on the
              live site.
            </p>
          )}
          <h1 className="text-4xl font-bold sm:text-5xl">
            About {site.developer}
          </h1>
          <p className="mt-2 text-lg text-muted">{site.title}</p>
          <p className="mt-8 max-w-[34ch] text-2xl font-medium leading-snug sm:text-3xl">
            {about.lead}
          </p>
          <div className="mt-6 max-w-[62ch] space-y-4 text-muted">
            {about.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary">
              Request a quote
            </Link>
            {site.bookingUrl && (
              <a
                className="btn btn-secondary"
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            )}
            {site.cvUrl && (
              <a className="btn btn-secondary" href={site.cvUrl} download>
                Download CV
              </a>
            )}
          </div>
        </div>

        <aside aria-label="Profile">
          {about.photo ? (
            <img
              src={about.photo}
              alt={`Portrait of ${site.developer}`}
              width="480"
              height="600"
              className="aspect-[4/5] w-full border border-line object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex aspect-[4/5] w-full items-center justify-center border border-line bg-surface font-display text-7xl font-bold text-brand"
            >
              {initials}
            </div>
          )}
          {facts.length > 0 && (
            <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
                  <dt className="text-muted">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {(site.social.github || site.social.linkedin) && (
            <p className="mt-6 flex flex-wrap gap-3 text-sm">
              {site.social.github && (
                <a
                  className="btn btn-secondary"
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {site.social.linkedin && (
                <a
                  className="btn btn-secondary"
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
            </p>
          )}
        </aside>
      </section>

      {about.story.length > 0 && (
        <section className="bg-surface py-16">
          <div className="container-page grid gap-8 md:grid-cols-[13rem_1fr]">
            <h2 className="text-2xl font-bold">My story</h2>
            <div className="max-w-[62ch] space-y-4">
              {about.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">
          How I work with clients
        </h2>
        <dl className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {rules.map(([t, d]) => (
            <div key={t} className="border-t border-line pt-4">
              <dt className="font-bold">{t}</dt>
              <dd className="mt-1 max-w-[50ch] text-muted">{d}</dd>
            </div>
          ))}
        </dl>
        <Link
          to="/process"
          className="mt-8 inline-block text-sm text-brand underline"
        >
          See the full process
        </Link>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold sm:text-3xl">
            The tools I use, and what they mean for you
          </h2>
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((g) => (
              <div key={g.title} className="bg-bg p-6">
                <h3 className="font-bold">{g.title}</h3>
                <p className="mt-3 flex flex-wrap gap-1.5">
                  {g.tools.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </p>
                <p className="mt-4 text-sm text-muted">{g.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {about.credentials.length > 0 && (
        <section className="container-page py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Education and credentials
          </h2>
          <ul className="mt-6 max-w-3xl divide-y divide-line border-y border-line">
            {about.credentials.map((c) => (
              <li key={c.title} className="py-4">
                <p className="font-medium">{c.title}</p>
                {c.detail && <p className="text-sm text-muted">{c.detail}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="container-page py-20 text-center">
        <h2 className="mx-auto max-w-[24ch] text-3xl font-bold sm:text-4xl">
          Let's talk about your website.
        </h2>
        <p className="mx-auto mt-4 max-w-[50ch] text-muted">
          Tell me about your business and what you need. I will reply with
          questions or a quote.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn btn-primary">
            Request a quote
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            See my work
          </Link>
        </div>
      </section>
    </>
  );
}
