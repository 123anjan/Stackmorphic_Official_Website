import { phases } from "./process.js";
export const steps = phases.map((p) => [p.title, p.summary]);

export const services = [
  [
    "Business websites",
    "A clear, fast website that explains what you do and makes it easy for customers to contact you.",
  ],
  [
    "Website design",
    "Layouts and visual design planned around your content and your visitors, designed in Figma before any code is written.",
  ],
  [
    "Websites for specific businesses",
    "A site shaped around your trade, with the pages, forms and features your customers actually use.",
  ],
];
export const reasons = [
  [
    "One developer, start to finish",
    "Design, front end, back end and database are handled together, so nothing gets lost between people.",
  ],
  [
    "Clear communication",
    "You get plain-language updates at each stage and know what happens next.",
  ],
  [
    "Agreed scope and timeline",
    "Pages, features, price and schedule are settled in writing before work starts.",
  ],
  [
    "Built for your customers",
    "Fast on phones, easy to read, and designed so visitors can contact you in a click.",
  ],
];
