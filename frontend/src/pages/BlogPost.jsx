import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/projects.js";
import { site } from "../siteConfig.js";
import { usePage } from "../lib/usePage.js";
import { formatDate, readingTime, slugify } from "../lib/blog.js";

function Block({ b }) {
  switch (b.type) {
    case "h2":
      return (
        <h2 id={slugify(b.text)} className="mt-10 text-2xl font-bold">
          {b.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {b.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="mt-4 overflow-x-auto border border-line bg-surface p-4 font-mono text-sm">
          <code>{b.text}</code>
        </pre>
      );
    case "quote":
      return (
        <blockquote className="mt-6 border-l-4 border-brand pl-4 italic text-muted">
          {b.text}
        </blockquote>
      );
    default:
      return <p className="mt-4 leading-relaxed">{b.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const i = sorted.findIndex((p) => p.slug === slug);
  const post = sorted[i];
  const newer = i > 0 ? sorted[i - 1] : null;
  const older = i >= 0 && i < sorted.length - 1 ? sorted[i + 1] : null;
  const related = post
    ? sorted
        .filter((p) => p.slug !== slug && p.category === post.category)
        .slice(0, 2)
    : [];
  usePage(post ? post.title : "Article not found", post ? post.summary : "");

  useEffect(() => {
    if (!post) return;
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      description: post.summary,
      author: { "@type": "Person", name: site.developer },
    });
    document.head.appendChild(s);
    return () => s.remove();
  }, [post]);

  if (!post) {
    return (
      <section className="container-page py-24">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <Link to="/blog" className="btn btn-secondary mt-6">
          Back to the blog
        </Link>
      </section>
    );
  }

  const headings = post.body.filter((b) => b.type === "h2");
  const url = typeof window !== "undefined" ? window.location.href : "";
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <article className="container-page py-16">
      <Link to="/blog" className="text-sm text-brand underline">
        &larr; All articles
      </Link>
      <header className="mt-6 max-w-3xl">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="tag">{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{readingTime(post.body)}</span>
          {post.sample && <span className="tag">Sample</span>}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.summary}</p>
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_16rem]">
        <div className="max-w-3xl">
          {post.body.map((b, k) => (
            <Block key={k} b={b} />
          ))}

          <p className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6 text-sm">
            <span className="text-muted">Share:</span>
            <button
              type="button"
              onClick={copy}
              className="btn btn-secondary !py-1.5"
            >
              {copied ? "Link copied" : "Copy link"}
            </button>
            <a
              className="btn btn-secondary !py-1.5"
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.linkedin.com/sharing/share-offsite/?url=" +
                encodeURIComponent(url)
              }
            >
              LinkedIn
            </a>
          </div>

          <aside
            className="mt-10 border border-line bg-surface p-6"
            aria-label="About the author"
          >
            <p className="font-display text-lg font-bold">{site.developer}</p>
            <p className="text-sm text-muted">{site.title}</p>
            <p className="mt-3 text-sm">
              I design, build and launch websites and web applications end to
              end.
            </p>
            <Link
              to="/about"
              className="mt-3 inline-block text-sm text-brand underline"
            >
              More about me
            </Link>
          </aside>

          <section className="mt-10 border border-line p-6 text-center">
            <h2 className="text-xl font-bold">
              Need a website for your business?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Send a short description and I will reply with questions or a
              quote.
            </p>
            <Link to="/contact" className="btn btn-primary mt-4">
              Request a quote
            </Link>
          </section>

          <nav
            aria-label="More articles"
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {newer && (
              <Link
                to={"/blog/" + newer.slug}
                className="border border-line p-4 hover:border-brand"
              >
                <span className="text-xs text-muted">Newer</span>
                <br />
                {newer.title}
              </Link>
            )}
            {older && (
              <Link
                to={"/blog/" + older.slug}
                className="border border-line p-4 hover:border-brand sm:col-start-2"
              >
                <span className="text-xs text-muted">Older</span>
                <br />
                {older.title}
              </Link>
            )}
          </nav>

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold">Related articles</h2>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={"/blog/" + r.slug}
                      className="text-brand underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {headings.length >= 2 && (
          <nav aria-label="Table of contents" className="hidden lg:block">
            <div className="sticky top-24 border-l border-line pl-4 text-sm">
              <p className="font-bold">On this page</p>
              <ul className="mt-3 space-y-2">
                {headings.map((h) => (
                  <li key={h.text}>
                    <a
                      href={"#" + slugify(h.text)}
                      className="text-muted hover:text-ink"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </article>
  );
}
