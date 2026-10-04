import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/projects.js";
import { usePage } from "../lib/usePage.js";
import { formatDate, readingTime } from "../lib/blog.js";

function Meta({ p }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
      <span className="tag">{p.category}</span>
      <time dateTime={p.date}>{formatDate(p.date)}</time>
      <span>{readingTime(p.body)}</span>
      {p.sample && <span className="tag">Sample</span>}
    </p>
  );
}

export default function Blog() {
  usePage(
    "Blog",
    "Articles on planning, building and launching websites for small businesses.",
  );
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );
  const cats = ["All", ...new Set(sorted.map((p) => p.category))];
  const shown = sorted.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (p.title + " " + p.summary + " " + p.tags.join(" "))
        .toLowerCase()
        .includes(q.trim().toLowerCase()),
  );
  const showFeatured = !q && cat === "All" && shown.length > 0;
  const featured = showFeatured ? shown[0] : null;
  const rest = showFeatured ? shown.slice(1) : shown;

  return (
    <section className="container-page py-16">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 max-w-[60ch] text-muted">
        Practical articles on planning, building and launching websites.
      </p>

      {posts.length === 0 ? (
        <p className="mt-8 max-w-[60ch] border border-line p-6 text-muted">
          No articles yet.
        </p>
      ) : (
        <>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div
              role="group"
              aria-label="Filter by category"
              className="flex flex-wrap gap-2"
            >
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={cat === c}
                  onClick={() => setCat(c)}
                  className={
                    "btn btn-secondary !py-1.5 " +
                    (cat === c ? "!border-brand !text-brand" : "")
                  }
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="md:w-72">
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <input
                id="blog-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles"
                className="field"
              />
            </div>
          </div>

          {featured && (
            <article className="mt-10 border border-line bg-surface p-6 sm:p-8">
              <p className="text-sm font-medium text-brand">Latest article</p>
              <h2 className="mt-2 max-w-[28ch] text-3xl font-bold">
                <Link
                  to={"/blog/" + featured.slug}
                  className="hover:text-brand"
                >
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-[60ch] text-muted">{featured.summary}</p>
              <div className="mt-4">
                <Meta p={featured} />
              </div>
              <Link
                to={"/blog/" + featured.slug}
                className="btn btn-primary mt-6"
              >
                Read article
              </Link>
            </article>
          )}

          {shown.length === 0 ? (
            <p className="mt-10 text-muted" role="status">
              No articles match your search.
            </p>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <article
                  key={p.slug}
                  className="flex flex-col border border-line p-5 transition-colors hover:border-brand"
                >
                  <Meta p={p} />
                  <h2 className="mt-3 text-xl font-bold">
                    <Link to={"/blog/" + p.slug} className="hover:text-brand">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
                  <Link
                    to={"/blog/" + p.slug}
                    className="mt-4 text-sm text-brand underline"
                  >
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
