import { Link } from 'react-router-dom'
import { services } from '../data/content.js'
import { usePage } from '../lib/usePage.js'

const serviceDetails = [
  {
    title: 'Business websites',
    short: 'High-converting websites built to explain your value clearly and turn visitors into enquiries.',
    bullets: ['Service pages', 'Landing pages', 'Lead capture', 'Mobile-first design'],
  },
  {
    title: 'Website design',
    short: 'Clear design systems, strong UX, and polished visuals that feel premium and trustworthy.',
    bullets: ['Brand alignment', 'UI design', 'Content structure', 'Design handoff'],
  },
  {
    title: 'Custom web projects',
    short: 'Tailored solutions for businesses that need more than a brochure site or booking flow.',
    bullets: ['Dashboards', 'Forms & workflows', 'Integrations', 'Database support'],
  },
]

const process = [
  ['Discover', 'We clarify your audience, offer, goals, and the actions you want people to take.'],
  ['Design', 'I map the structure and shape the visual direction so the site feels clear and premium.'],
  ['Build', 'The interface, logic and integrations are developed in a single, cohesive build.'],
  ['Launch', 'We test, optimise, and ship the site with the support needed to keep it running smoothly.'],
]

export default function Services() {
  usePage('Services', 'Business website development and design for local and remote clients.')

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <span className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Services
          </span>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Websites and digital experiences that look premium and perform.
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg text-muted">
            From clean brochure websites to tailored web apps, I build polished experiences that help businesses look credible, communicate clearly, and convert more enquiries.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">Working style</p>
          <ul className="mt-5 space-y-4 text-sm text-muted">
            <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand" />One developer from concept to launch</li>
            <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand" />Clear communication and realistic timelines</li>
            <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand" />Built with conversion, clarity, and performance in mind</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {serviceDetails.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-line bg-bg p-6 shadow-sm transition-colors hover:border-brand"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 font-display text-lg font-bold text-brand">
              {service.title.split(' ').map((word) => word[0]).slice(0, 2).join('').toUpperCase()}
            </div>
            <h2 className="mt-5 text-2xl font-bold">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{service.short}</p>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">How I work</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">A straightforward process that keeps momentum high.</h2>
          </div>
          <Link to="/contact" className="btn btn-primary whitespace-nowrap">
            Start your project
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {process.map(([step, description], index) => (
            <div key={step} className="rounded-2xl border border-line bg-bg p-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">0{index + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{step}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">What’s included</h2>
        </div>
        <div className="mt-8 grid gap-px bg-line md:grid-cols-2">
          {services.map(([title, description]) => (
            <div key={title} className="bg-bg p-6">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="mx-auto max-w-[24ch] text-3xl font-bold sm:text-4xl">Need a website that represents your business properly?</h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-muted">
          Tell me about your business, the audience you want to attract, and what you want the site to do. I’ll help shape the right approach for your next project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn btn-primary">Request a quote</Link>
          <Link to="/projects" className="btn btn-secondary">View projects</Link>
        </div>
      </div>
    </section>
  )
}
