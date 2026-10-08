import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PRICES_CONFIRMED,
  bundles,
  bundleNote,
  renewalNote,
  included,
  domainTip,
  startSteps,
  packages,
  everyProject,
  addons,
  care,
  factors,
  payment,
  excluded,
  priceFaq,
} from "../data/pricing.js";
import { usePage } from "../lib/usePage.js";

const showSuggested = PRICES_CONFIRMED || import.meta.env.DEV;
const val = (v) => (showSuggested ? v : "On request");

const inr = (n) => {
  const d = Math.round(n * 100) / 100;
  const f = Number.isInteger(d) ? 0 : 2;
  return (
    "₹" +
    new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: f,
      maximumFractionDigits: f,
    }).format(d)
  );
};
const inrYear = (n) =>
  "₹" +
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n),
  );

const Check = () => (
  <span aria-hidden="true" className="mt-0.5 font-bold text-brand">
    &#10003;
  </span>
);

export default function Pricing() {
  usePage(
    "Pricing",
    "Website, domain and hosting plans with clear prices, plus custom projects, extras and how payment works.",
  );
  const [ext, setExt] = useState("com");

  const total = (b) => b.setup + b.hosting[ext];
  const rows = [
    ["Plan length", (b) => b.term],
    ["Website and setup", (b) => inr(b.setup)],
    ["Domain and hosting (." + ext + ")", (b) => inr(b.hosting[ext])],
    ["Total", (b) => inr(total(b))],
    ["Cost per year", (b) =>  inrYear(total(b) / b.years)],
    ["Free year of the domain", (b) => (b.freeDomainYear ? "Yes" : "No")],
    ["Free maintenance", (b) => b.maintenanceMonths + " months"],
  ];

  return (
    <>
      <section className="container-page py-16">
        {!PRICES_CONFIRMED && import.meta.env.DEV && (
          <p
            role="note"
            className="mb-8 border border-accent bg-surface p-4 text-sm"
          >
            Preview note: the custom project, extras and care plan prices are
            suggestions. On the live site they appear as "On request" until you
            set <code>PRICES_CONFIRMED = true</code> in{" "}
            <code>src/data/pricing.js</code>. The domain and hosting plans
            always show.
          </p>
        )}
        <h1 className="text-4xl font-bold sm:text-5xl">Pricing</h1>
        <p className="mt-4 max-w-[62ch] text-lg text-muted">
          Clear prices for your website, domain and hosting together. The longer
          the plan, the less you pay per year.
        </p>

        <h2 className="mt-12 text-2xl font-bold sm:text-3xl">
          Website, domain and hosting plans
        </h2>
        <div
          role="group"
          aria-label="Domain type"
          className="mt-6 inline-flex border border-line-strong"
        >
          {["com", "in"].map((x) => (
            <button
              key={x}
              type="button"
              aria-pressed={ext === x}
              onClick={() => setExt(x)}
              className={
                "px-6 py-2 text-sm font-medium " +
                (ext === x
                  ? "bg-brand text-on-brand"
                  : "text-ink hover:text-brand")
              }
            >
              .{x}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {bundles.map((b) => (
            <article
              key={b.id}
              className={
                "flex flex-col border p-6 " +
                (b.label ? "border-brand bg-surface" : "border-line")
              }
            >
              {b.label && (
                <p className="mb-3 text-sm font-medium text-brand">{b.label}</p>
              )}
              <h3 className="text-2xl font-bold">{b.term}</h3>
              <p className="mt-2 min-h-[3rem] text-sm text-muted">
                {b.bestFor}
              </p>
              <p className="mt-5 text-3xl font-bold">{inr(total(b))}</p>
              <p className="text-sm text-muted">
                Total for the full term &middot; about{" "}
                {inrYear(total(b) / b.years)} per year
              </p>
              <dl className="mt-6 space-y-2 border-y border-line py-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Website and setup</dt>
                  <dd>{inr(b.setup)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">
                    {b.hostingLabel} (.{ext})
                  </dt>
                  <dd>{inr(b.hosting[ext])}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-line pt-2">
                  <dt className="font-medium text-brand">
                    Google Ads budget (optional)
                  </dt>
                  <dd className="whitespace-nowrap font-medium text-brand">
                    From ₹600 extra
                  </dd>
                </div>
              </dl>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {b.freeDomainYear && (
                  <li className="flex gap-3">
                    <Check />
                    <span>1 year of the domain free</span>
                  </li>
                )}
                <li className="flex gap-3">
                  <Check />
                  <span>
                    {b.maintenanceMonths} months of free website maintenance
                  </span>
                </li>
              </ul>
              <Link
                to="/contact"
                className={
                  "btn mt-8 " + (b.label ? "btn-primary" : "btn-secondary")
                }
              >
                Request this plan
              </Link>
            </article>
          ))}
        </div>
        <p
          className="mt-4 border-l-4 border-brand bg-surface px-4 py-3 text-sm font-medium text-ink"
        >
          {bundleNote}
          {renewalNote && (
            <span className="ml-1 font-normal text-muted">{renewalNote}</span>
          )}
        </p>

        <div className="mt-6 border-l-4 border-brand bg-surface p-4 text-sm">
          <h3 className="font-bold">Google Ads budget (extra)</h3>
          <p className="mt-1 text-muted">
            Ad spend is separate from our service fees. Recharge starts at
            ₹600. As an indicative estimate in India, average search cost per
            click is often around ₹5–₹50 for many keywords; highly competitive
            keywords can cost more. Actual CPC depends on the keywords,
            industry, location and competition, and will be estimated before
            the campaign starts.
          </p>
        </div>

        <h3 className="mt-14 text-xl font-bold">Compare the plans</h3>
        <div className="mt-4 overflow-x-auto border border-line">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">
              Comparison of the website, domain and hosting plans for a .{ext}{" "}
              domain
            </caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="p-3">
                  <span className="sr-only">Feature</span>
                </th>
                {bundles.map((b) => (
                  <th key={b.id} scope="col" className="p-3 font-bold">
                    {b.term}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map(([label, fn]) => (
                <tr key={label}>
                  <th scope="row" className="p-3 font-medium text-muted">
                    {label}
                  </th>
                  {bundles.map((b) => (
                    <td key={b.id} className="whitespace-nowrap p-3">
                      {fn(b)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-14 text-xl font-bold">What every plan includes</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {included.map((g) => (
            <div key={g.title} className="border border-line p-6">
              <h4 className="font-bold">{g.title}</h4>
              <ul className="mt-4 space-y-3 text-sm">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-4 border-brand bg-surface p-4 text-sm">
          <p className="font-medium">Choosing between .com and .in</p>
          <p className="mt-1 text-muted">{domainTip}</p>
        </div>

        <h3 className="mt-14 text-xl font-bold">How to start</h3>
        <ol className="mt-4 grid gap-px bg-line sm:grid-cols-3">
          {startSteps.map(([t, d], i) => (
            <li key={t} className="bg-bg p-5">
              <span className="font-mono text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 font-bold">{t}</p>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold sm:text-3xl">Custom projects</h2>
          <p className="mt-3 max-w-[62ch] text-muted">
            For bigger sites and web applications. The final price is agreed in
            writing after a short conversation about your project.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {packages.map((p) => (
              <article
                key={p.id}
                className="flex flex-col border border-line bg-bg p-6"
              >
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.for}</p>
                <p className="mt-5 text-3xl font-bold">
                  {p.id === "app" ? p.price : val(p.price)}
                </p>
                <p className="mt-1 text-sm text-muted">
                  Typical time: {p.id === "app" ? p.time : val(p.time)}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-3">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-secondary mt-8">
                  {p.id === "app" ? "Discuss your project" : "Request a quote"}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-line bg-bg p-6">
            <h3 className="text-xl font-bold">Included in every project</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {everyProject.map((i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Optional extras</h2>
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <caption className="sr-only">
              Optional extras and their starting prices
            </caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="p-3 font-bold">
                  Extra
                </th>
                <th scope="col" className="p-3 font-bold">
                  What it covers
                </th>
                <th scope="col" className="p-3 font-bold">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {addons.map(([n, d, p]) => (
                <tr key={n}>
                  <th scope="row" className="p-3 font-medium">
                    {n}
                  </th>
                  <td className="p-3 text-muted">{d}</td>
                  <td className="whitespace-nowrap p-3">{val(p)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Care plans after your free maintenance
          </h2>
          <p className="mt-3 max-w-[62ch] text-muted">
            Every plan includes 2 months of free maintenance. After that,
            optional monthly plans keep your site updated, secure and working.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {care.map((c) => (
              <article key={c.name} className="border border-line bg-bg p-6">
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mt-2 text-2xl font-bold">{val(c.price)}</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {c.includes.map((i) => (
                    <li key={i} className="flex gap-3">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              What affects the price
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {factors.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Not included in the price
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-muted">
              {excluded.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold sm:text-3xl">How payment works</h2>
          <ol className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {payment.map(([t, d], i) => (
              <li key={t} className="bg-bg p-5">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Pricing questions</h2>
        <div className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
          {priceFaq.map(([q, a]) => (
            <details key={q} className="py-4">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 text-center">
        <div className="container-page">
          <h2 className="mx-auto max-w-[24ch] text-3xl font-bold sm:text-4xl">
            Not sure which option fits?
          </h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-muted">
            Describe your business and what you need. I will recommend a plan
            and confirm the price in writing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn btn-primary">
              Request a quote
            </Link>
            <Link to="/process" className="btn btn-secondary">
              See how projects run
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
