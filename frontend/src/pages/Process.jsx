import { Link } from "react-router-dom";
import { phases, checks, rules } from "../data/process.js";
import { usePage } from "../lib/usePage.js";

export default function Process() {
  usePage(
    "Process",
    "How a website project runs, from the first conversation to launch and support.",
  );
  return (
    <>
      <section className="container-page py-16">
        <h1 className="text-4xl font-bold sm:text-5xl">How a project runs</h1>
        <p className="mt-4 max-w-[62ch] text-lg text-muted">
          Every project follows the same stages, and each one ends with your
          approval. You always know what is happening, what I need from you, and
          what comes next.
        </p>

        <ol
          aria-label="Project phases at a glance"
          className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {phases.map((p, i) => (
            <li key={p.id} className="bg-bg">
              <a href={"#" + p.id} className="block p-4 hover:bg-surface">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-medium">{p.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page" aria-label="Project phases in detail">
        <ol className="divide-y divide-line border-y border-line">
          {phases.map((p, i) => (
            <li
              key={p.id}
              id={p.id}
              className="grid gap-6 py-10 md:grid-cols-[13rem_1fr]"
            >
              <div>
                <p className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 text-2xl font-bold">{p.title}</h2>
                {p.duration && (
                  <p className="mt-2 text-sm text-muted">
                    Typical time: {p.duration}
                  </p>
                )}
              </div>
              <div>
                <p className="max-w-[60ch] text-lg">{p.summary}</p>
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <h3 className="text-sm font-bold">What I do</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {p.do.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">What you get</h3>
                    <p className="mt-2 text-sm text-muted">{p.get}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">What I need from you</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {p.need.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {p.approval && (
                  <p className="mt-6 border-l-4 border-brand bg-surface p-3 text-sm">
                    <span className="font-medium">Checkpoint:</span>{" "}
                    {p.approval}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">
          What I check before launch
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {checks.map((c) => (
            <li key={c} className="flex gap-3 border border-line p-4 text-sm">
              <span aria-hidden="true" className="font-bold text-brand">
                &#10003;
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold sm:text-3xl">
            How we work together
          </h2>
          <dl className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {rules.map(([t, d]) => (
              <div key={t} className="border-t border-line pt-4">
                <dt className="font-bold">{t}</dt>
                <dd className="mt-1 max-w-[50ch] text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="mx-auto max-w-[24ch] text-3xl font-bold sm:text-4xl">
          Ready to start with a conversation?
        </h2>
        <p className="mx-auto mt-4 max-w-[50ch] text-muted">
          Send a short description of your project and I will reply with
          questions or a quote.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn btn-primary">
            Request a quote
          </Link>
          <Link to="/faq" className="btn btn-secondary">
            Read the FAQ
          </Link>
        </div>
      </section>
    </>
  );
}
