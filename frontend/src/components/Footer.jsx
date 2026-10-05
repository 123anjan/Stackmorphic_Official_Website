import { Link } from "react-router-dom";
import { site, nav } from "../siteConfig.js";

const col = "text-sm text-muted hover:text-ink";
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface sm:mt-24">
      <div className="container-page grid grid-cols-2 gap-x-5 gap-y-6 py-7 sm:gap-x-8 sm:gap-y-9 sm:py-12 md:gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
            src={import.meta.env.BASE_URL + "logo.png"}
            alt="Brand logo"
            width="32"
            height="32"
            className="h-8 w-8"
          />
            <p className="font-display text-lg font-bold">{site.brand}</p>
          </div>
          <p className="mt-2 max-w-[38ch] text-sm leading-6 text-muted sm:mt-3">
            Websites and web applications, designed and built end to end by{" "}
            {site.developer}.
          </p>
          <Link to="/contact" className="btn btn-primary mt-3 sm:mt-4">
            Request a quote
          </Link>
        </div>
        <nav aria-label="Footer pages" className="border-t border-line pt-4 md:border-0 md:pt-0">
          <h2 className="font-display text-sm font-bold">Pages</h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 md:mt-3 md:grid-cols-1 md:gap-y-2">
            {nav.map(([l, to]) => (
              <li key={to}>
                <Link to={to} className={`${col} inline-block py-0.5`}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer services" className="border-t border-line pt-4 md:border-0 md:pt-0">
          <h2 className="font-display text-sm font-bold">Services</h2>
          <ul className="mt-2 space-y-1 md:mt-3 md:space-y-2">
            <li>
              <Link to="/services" className={`${col} inline-block py-0.5`}>
                Business websites
              </Link>
            </li>
            <li>
              <Link to="/services" className={`${col} inline-block py-0.5`}>
                Website design
              </Link>
            </li>
            <li>
              <Link to="/pricing" className={`${col} inline-block py-0.5`}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/faq" className={`${col} inline-block py-0.5`}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <div className="col-span-2 border-t border-line pt-4 md:col-span-2 md:border-0 md:pt-0 lg:col-span-1">
          <h2 className="font-display text-sm font-bold">Contact</h2>
          <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] gap-4 md:mt-3">
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a className={`${col} inline-block break-all py-0.5`} href={"mailto:" + site.email}>
                  {site.email}
                </a>
              </li>
              {site.whatsapp && (
              <li>
                <a
                  className={`${col} inline-block py-0.5`}
                  href={"https://wa.me/" + site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              )}
              {site.bookingUrl && (
              <li>
                <a
                  className={`${col} inline-block py-0.5`}
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                </a>
              </li>
              )}
            </ul>
            {(site.social.github || site.social.linkedin) && (
              <div className="text-right">
                <h3 className="font-display text-sm font-bold">Social links</h3>
                <ul className="mt-2 space-y-1 md:space-y-2">
                  {site.social.github && (
                    <li>
                      <a
                        className={`${col} inline-block py-0.5`}
                        href={site.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                  )}
                  {site.social.linkedin && (
                    <li>
                      <a
                        className={`${col} inline-block py-0.5`}
                        href={site.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-1 py-4 text-xs leading-5 text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:py-5">
          <p>
            &copy; {new Date().getFullYear()} {site.brand}. All rights reserved.
          </p>
          <p>Built with React, Tailwind CSS and Django.</p>
          <a
            href="#main"
            className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-full border border-brand bg-brand px-4 py-2 font-medium text-on-brand shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:self-auto"
          >
            <span aria-hidden="true" className="text-base leading-none">↑</span>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
