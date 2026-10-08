import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site, stack } from '../siteConfig.js'
import { projects } from '../data/projects.js'
import { services, steps, reasons } from '../data/content.js'
import { usePage } from '../lib/usePage.js'

const heroRoles = [
  'full stack developer',
  'frontend developer',
  'web developer',
  'web designer',
  'dev solutions',
]

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visibleCharacters, setVisibleCharacters] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = heroRoles[roleIndex]
    const finishedTyping = visibleCharacters === role.length
    const finishedDeleting = visibleCharacters === 0
    const delay = !deleting && finishedTyping ? 1400 : deleting ? 45 : 85

    const timeout = window.setTimeout(() => {
      if (!deleting && finishedTyping) {
        setDeleting(true)
      } else if (deleting && finishedDeleting) {
        setDeleting(false)
        setRoleIndex((index) => (index + 1) % heroRoles.length)
      } else {
        setVisibleCharacters((count) => count + (deleting ? -1 : 1))
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [deleting, roleIndex, visibleCharacters])

  usePage('', 'Business websites and web applications, designed and built end to end.')
  return (
    <>
      <section className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div className="rise">
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
            I’m your
            <span className="mt-2 block min-h-[1.05em] text-brand">
              <span aria-hidden="true">
                {heroRoles[roleIndex].slice(0, visibleCharacters)}
              </span>
              <span className="ml-0.5 inline-block h-[0.9em] translate-y-1 border-r-2 border-brand" aria-hidden="true" />
              <span className="sr-only">{heroRoles[roleIndex]}</span>
            </span>
          </h1>
          <p className="mt-5 text-xl font-semibold leading-snug sm:text-2xl">
            One developer for your design, code and database.
          </p>
          <p className="mt-6 max-w-[60ch] text-lg text-muted">
            I design, build and launch business websites and web applications end to end, so you do not have to coordinate several freelancers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary">Request a quote</Link>
            <Link to="/projects" className="btn btn-secondary">See my work</Link>
            {site.cvUrl && <a href={site.cvUrl} download className="btn btn-secondary">Download CV</a>}
          </div>
          <p className="mt-5 text-sm text-muted">Working with clients locally and remotely.</p>
        </div>
        <dl className="divide-y divide-line border-y border-line text-sm" aria-label="Technologies I use">
          {Object.entries(stack).map(([k, v]) => (
            <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 py-3">
              <dt className="text-muted">{k}</dt>
              <dd className="flex flex-wrap gap-1.5">{v.map(t => <span key={t} className="tag">{t}</span>)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold sm:text-3xl">What I build</h2>
          <Link to="/services" className="btn btn-secondary text-sm">All services</Link>
        </div>
        <div className="mt-8 grid gap-px bg-line md:grid-cols-3">
          {services.map(([t, d]) => (
            <div key={t} className="bg-bg p-6">
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Selected work</h2>
            <Link to="/projects" className="btn btn-secondary text-sm">All projects</Link>
          </div>
          {projects.length === 0
            ? <p className="mt-4 max-w-[60ch] text-muted">Case studies will appear here once real projects are added.</p>
            : <ul className="mt-8 grid gap-6 md:grid-cols-3">{projects.slice(0, 3).map(p => (
                <li key={p.slug} className="border border-line bg-bg p-5 transition-colors hover:border-brand">
                  <h3 className="text-lg font-bold">{p.name}{p.sample && <span className="tag ml-2 align-middle">Sample</span>}</h3>
                  <p className="mt-2 text-sm text-muted">{p.solution}</p>
                  <p className="mt-3 flex flex-wrap gap-1.5">{p.tech.map(t => <span key={t} className="tag">{t}</span>)}</p>
                </li>))}</ul>}
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Why work with me</h2>
        <dl className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {reasons.map(([t, d]) => (
            <div key={t} className="border-t border-line pt-4">
              <dt className="font-bold">{t}</dt>
              <dd className="mt-1 max-w-[50ch] text-muted">{d}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold sm:text-3xl">How a project runs</h2>
            <Link to="/process" className="btn btn-secondary text-sm">Full process</Link>
          </div>
          <ol className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t], i) => (
              <li key={t} className="bg-surface p-4"><span className="font-mono text-sm text-muted">{i + 1}</span><p className="mt-1 font-medium">{t}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="mx-auto max-w-[24ch] text-3xl font-bold sm:text-4xl">Tell me what your business needs online.</h2>
        <p className="mx-auto mt-4 max-w-[50ch] text-muted">Send a short description and I will reply with questions or a quote.</p>
        <Link to="/contact" className="btn btn-primary mt-8">Request a quote</Link>
      </section>
    </>
  )
}
