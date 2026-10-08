import { lazy, Suspense, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import DigitalMarketingSection from "./components/DigitalMarketingSection.jsx";
import Home from "./pages/Home.jsx";
import ChatWidget from "./components/ChatWidget.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import { useScrollReveal } from "./lib/useScrollReveal.js";

const pages = {
  services: lazy(() => import("./pages/Services.jsx")),
  projects: lazy(() => import("./pages/Projects.jsx")),
  pricing: lazy(() => import("./pages/Pricing.jsx")),
  about: lazy(() => import("./pages/About.jsx")),
  process: lazy(() => import("./pages/Process.jsx")),
  faq: lazy(() => import("./pages/Faq.jsx")),
  blog: lazy(() => import("./pages/Blog.jsx")),
  contact: lazy(() => import("./pages/Contact.jsx")),
};
const NotFound = lazy(() => import("./pages/Placeholder.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));
const Account = lazy(() => import("./pages/Account.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const marketingPages = new Set([
  "/",
  "/services",
  "/projects",
  "/pricing",
  "/process",
]);

function PageSkeleton() {
  return (
    <div className="container-page py-24" role="status" aria-label="Loading">
      <div className="skeleton h-10 w-2/3 max-w-xl" />
      <div className="skeleton mt-6 h-4 w-1/2 max-w-md" />
      <div className="skeleton mt-3 h-4 w-2/5 max-w-sm" />
    </div>
  );
}

export default function App() {
  useScrollReveal();
  const { pathname } = useLocation();
  const main = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    main.current?.focus({ preventScroll: true });
  }, [pathname]);
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bg focus:p-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" ref={main} tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageSkeleton />}>
          <div key={pathname} className="page-in">
            <Routes>
              <Route path="/" element={<Home />} />
              {Object.entries(pages).map(([k, C]) => (
                <Route key={k} path={"/" + k} element={<C />} />
              ))}
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/login" element={<Account mode="login" />} />
              <Route path="/signup" element={<Account mode="register" />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<NotFound name="Page not found" />} />
            </Routes>
            {marketingPages.has(pathname.replace(/\/+$/, "") || "/") && (
              <DigitalMarketingSection />
            )}
          </div>
        </Suspense>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
