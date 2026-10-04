import { Link } from "react-router-dom";
import { usePage } from "../lib/usePage.js";

const faqGroups = [
  {
    title: "Getting started",
    description: "What to expect when you reach out about a project.",
    questions: [
      [
        "What do you need from me to get started?",
        "A short overview of your business, your target customers, and what you want the website to achieve is a great start. If you have a logo, copy, images, or example websites you like, those are helpful too. We can identify anything still needed during the first conversation.",
      ],
      [
        "What kinds of projects do you take on?",
        "I work on business websites and web applications, including responsive front ends, backend features, databases, and REST APIs. Share your goals and requirements, and I can confirm whether the project is a good fit.",
      ],
      [
        "Do I need to know exactly what I want before contacting you?",
        "No. You can start with the problem you want to solve or the outcome you need. I can help clarify the pages, features, and next steps before we agree on the project scope.",
      ],
    ],
  },
  {
    title: "Scope, timing & pricing",
    description: "Clear expectations before work begins.",
    questions: [
      [
        "How long does a website project take?",
        "Timing depends on the number of pages, features, and how quickly content and feedback are available. Before work starts, I will confirm an estimated schedule based on the agreed scope.",
      ],
      [
        "How much does a website cost?",
        "The cost depends on the project requirements, such as page count, design needs, integrations, and custom functionality. After discussing the scope, I will provide a quote for approval before work begins.",
      ],
      [
        "Can I add features after the project starts?",
        "Yes. If requirements change, I will explain how the change affects the scope, cost, and schedule, and get your approval before proceeding.",
      ],
      [
        "Will I know what is included in the quote?",
        "Yes. The agreed scope should make clear what pages, features, and deliverables are included, along with the expected timeline and cost.",
      ],
    ],
  },
  {
    title: "Design, content & launch",
    description: "How the site is planned, built, and made ready to go live.",
    questions: [
      [
        "Will my website work on phones and tablets?",
        "Yes. Responsive layouts are part of the build, and I check the experience across mobile, tablet, and desktop screen sizes.",
      ],
      [
        "Do you provide the text, logo, and photos?",
        "You provide business-specific information, approved copy, brand assets, and any images you want used. I can help organize the content and identify what is missing; creating new brand assets or copy can be discussed as part of the scope.",
      ],
      [
        "Can you help with my domain and hosting?",
        "Yes. I can advise you on choosing a domain and hosting setup and help with the launch configuration. Domain and hosting accounts should be owned by you, and their provider charges are separate from development unless stated otherwise.",
      ],
      [
        "Will the website be search-engine friendly?",
        "I can build a clear, crawlable site structure and set up foundational on-page details as agreed in the project scope. Search rankings depend on many factors, so specific ranking positions or timelines cannot be guaranteed.",
      ],
      [
        "Who owns the website after launch?",
        "The ownership and handover details will be confirmed in the project agreement. The goal is to hand over the agreed website files and access so you can manage your project and accounts.",
      ],
    ],
  },
  {
    title: "After launch",
    description: "Support and updates once your website is live.",
    questions: [
      [
        "Can you make changes after the site launches?",
        "Yes. Send the requested updates and I will confirm the scope, cost, and timing before making them.",
      ],
      [
        "Do you provide ongoing maintenance?",
        "Ongoing maintenance or support can be discussed and scoped separately. The exact services and response expectations should be agreed in writing rather than assumed to be included in the initial build.",
      ],
      [
        "Can I update the website myself?",
        "That depends on the site and whether content-management features are included. If self-service updates are important, mention that when we define the requirements so the right approach can be planned.",
      ],
      [
        "Can we work together remotely?",
        "Yes. Project discussions, reviews, and updates can be handled remotely. We will agree on the communication and feedback process at the start.",
      ],
    ],
  },
];

export default function Faq() {
  usePage(
    "FAQ",
    "Answers to common questions about website design, development, pricing, and support.",
  );

  return (
    <>
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Frequently asked questions
          </span>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">
            Helpful answers before you start.
          </h1>
          <p className="mt-5 max-w-[65ch] text-lg leading-8 text-muted">
            Find out how projects work, what to prepare, and what to expect
            before and after launch. If your question is not covered here, get
            in touch and tell me a little about your project.
          </p>
          <Link to="/contact" className="btn btn-primary mt-7">
            Ask about your project
          </Link>
        </div>
      </section>

      <div className="container-page pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {faqGroups.flatMap((group) =>
            group.questions.map(([question, answer]) => (
              <details key={question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 text-base font-semibold marker:hidden hover:text-brand [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-lg font-normal text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[65ch] pb-2 pr-10 pt-3 text-sm leading-7 text-muted sm:text-base">
                  {answer}
                </p>
              </details>
            )),
          )}
        </div>
      </div>

      <section className="bg-surface py-14 sm:py-16">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-[25ch] text-3xl font-bold sm:text-4xl">
            Still have a question?
          </h2>
          <p className="mx-auto mt-4 max-w-[55ch] leading-7 text-muted">
            Send a short note about what you are planning. I will get back to
            you to discuss the right next step.
          </p>
          <Link to="/contact" className="btn btn-primary mt-7">
            Contact me
          </Link>
        </div>
      </section>
    </>
  );
}
