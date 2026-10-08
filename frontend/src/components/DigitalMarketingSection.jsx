import { Link } from "react-router-dom";

export default function DigitalMarketingSection() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="container-page">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
          Grow your online reach
        </p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          Digital marketing support
        </h2>
        <p className="mt-3 max-w-[62ch] text-sm font-medium text-muted">
          These are optional services outside our website plans and are quoted
          separately.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="border border-line bg-bg p-5">
            <h3 className="font-bold">SEO and Google indexing</h3>
            <p className="mt-2 text-sm text-muted">
              Basic SEO can include page titles, descriptions, search-friendly
              content structure and a sitemap. Google Search Console can submit
              the sitemap and request indexing. Google decides whether and when
              to index pages, and search rankings are not guaranteed.
            </p>
          </article>
          <article className="border border-line bg-bg p-5">
            <h3 className="font-bold">Google Ads</h3>
            <p className="mt-2 text-sm text-muted">
              Paid search ads can target selected keywords and locations. As an
              indicative India estimate, many keywords may average around ₹5–₹50
              per click; competitive keywords can cost more. Ad spend is
              separate and starts with a ₹600 recharge.
            </p>
          </article>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/pricing" className="btn btn-secondary">
            See pricing
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Ask about digital marketing
          </Link>
        </div>
      </div>
    </section>
  );
}
