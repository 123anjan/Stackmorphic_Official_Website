// PRICING DATA. Edit every value so it matches your real rates and terms.
//
// REAL PRICES (from you): the "bundles" below.
// SUGGESTED PRICES (mine): custom projects, extras and care plans.
// While PRICES_CONFIRMED is false, the live site shows "On request" for the SUGGESTED prices only.
// Set it to true after you have reviewed every suggested number and sentence.
export const PRICES_CONFIRMED = true;

// ---------- Website + domain + hosting plans ----------
export const bundles = [
  {
    id: "one",
    term: "1 year",
    years: 1,
    setup: 6500,
    hosting: { com: 4000, in: 3500 },
    hostingLabel: "Domain + hosting",
    freeDomainYear: false,
    maintenanceMonths: 2,
    bestFor:
      "Getting online quickly, or testing a new business idea for a year",
  },
  {
    id: "two",
    term: "2 years",
    years: 2,
    setup: 7000,
    hosting: { com: 6900.69, in: 6500.1 },
    hostingLabel: "Domain + hosting",
    freeDomainYear: true,
    maintenanceMonths: 2,
    bestFor:
      "Businesses that want a lower yearly cost and a free year of the domain",
  },
  {
    id: "four",
    term: "4 years",
    years: 4,
    setup: 7500,
    hosting: { com: 12100.18, in: 10800 },
    hostingLabel: "Domain (3 years) + hosting",
    freeDomainYear: true,
    maintenanceMonths: 2,
    label: "Lowest cost per year",
    bestFor:
      "Businesses planning for the long term, with the lowest cost per year",
  },
];

export const bundleNote = "Domain and hosting prices include taxes.";

// What clients pay after the plan ends. Leave empty to hide this line.
// Example: 'After the plan ends, domain and hosting renew at the provider price. I will tell you the amount before it is due.'
export const renewalNote = "";

// CONFIRM every line against what you really deliver and what your hosting plan really includes.
// Delete anything you do not provide.
export const included = [
  {
    title: "Your website",
    items: [
      "Mobile-friendly design that matches your business",
      "Pages for your services, about and contact",
      "Contact form that sends enquiries to your email",
      "WhatsApp chat button",
      "Basic search engine setup (page titles and descriptions)",
      "Fast loading pages and basic accessibility",
      "Testing on phones and computers before launch",
    ],
  },
  {
    title: "Domain and hosting",
    items: [
      "Your domain name (.com or .in) for the plan term",
      "Hosting for the plan term",
      "Everything connected and published for you",
      "Help choosing a domain name that is easy to remember",
    ],
  },
  {
    title: "Free maintenance (first 2 months)",
    items: [
      "Security and software updates",
      "A backup of your site",
      "Checks that your site is online",
      "Small text and image changes (up to 2 hours in total)",
      "Fixes if something stops working",
    ],
  },
];

export const domainTip =
  "A .in domain suits a business that mainly serves customers in India. A .com domain suits a business that wants a wider or international audience. Both can work well, so choose the one your customers expect.";

export const startSteps = [
  ["Choose a plan", "Pick the term that suits you, with .com or .in."],
  [
    "Send your details",
    "Tell me about your business, your pages and any examples you like.",
  ],
  [
    "Review the written quote",
    "You receive the scope, price and schedule in writing before work starts.",
  ],
];

// ---------- Custom projects (SUGGESTED prices) ----------
export const packages = [
  {
    id: "business",
    name: "Business",
    for: "Businesses that want a fully custom design and enquiries stored in a database",
    price: "From ₹35,000",
    time: "2 to 4 weeks",
    includes: [
      "Up to 10 pages",
      "Custom design in Figma, approved before development starts",
      "Enquiry form with project type and budget, saved in a database",
      "Blog, FAQ and testimonials sections",
      "Booking link (Cal.com or Calendly) and WhatsApp button",
      "Search engine setup and performance checks",
      "3 rounds of revisions",
    ],
  },
  {
    id: "app",
    name: "Web application",
    for: "Client portals, dashboards and custom business tools",
    price: "Quoted per project",
    time: "Agreed after discovery",
    includes: [
      "Requirements discussion and a written scope",
      "User accounts, login and a dashboard",
      "REST API and database design (Django with Oracle SQL or MongoDB)",
      "Admin area for you to manage the data",
      "Security basics: input checks, rate limiting, protected secrets",
      "Publishing and handover notes",
    ],
  },
];

export const everyProject = [
  "Mobile-friendly layout tested on real screen sizes",
  "Clean, readable code you can hand to another developer",
  "Fast loading pages",
  "Basic accessibility: keyboard use, readable colours, clear labels",
  "A written scope and price before work starts",
];

export const addons = [
  ["Extra page", "Each page beyond your package", "From ₹1,500"],
  ["Blog setup", "Blog with categories and search", "From ₹5,000"],
  [
    "Booking integration",
    "Cal.com or Calendly added to your contact page",
    "From ₹2,000",
  ],
  ["Content writing", "Text written for your pages", "From ₹1,000 per page"],
  ["Extra revision round", "Beyond the rounds in your package", "From ₹2,000"],
];

export const care = [
  {
    name: "Basic care",
    price: "₹1,500 per month",
    includes: [
      "Small text and image updates (up to 2 hours a month)",
      "Security and software updates",
      "Monthly backup of your data",
      "Fixes if something stops working",
    ],
  },
  {
    name: "Growth care",
    price: "₹4,000 per month",
    includes: [
      "Everything in Basic care",
      "Up to 6 hours of updates and improvements a month",
      "Monthly speed and search check",
      "Priority replies",
    ],
  },
];

export const factors = [
  "The number of pages",
  "Custom features such as login, dashboards, bookings or payments",
  "Whether your text and images are ready",
  "Connections to other services",
  "The deadline: urgent work costs more",
  "The number of design revision rounds",
];

export const payment = [
  [
    "Written quote",
    "You receive the scope, price, schedule and revision rounds in writing.",
  ],
  ["50% to start", "Work begins when the first half is paid."],
  [
    "Balance before launch",
    "The rest is paid once you have approved the finished site, before it goes live.",
  ],
  [
    "Larger projects",
    "Web applications are split into milestones that are agreed in the quote.",
  ],
];

export const excluded = [
  "Domain and hosting renewals after your plan ends",
  "Paid plugins, stock photos or premium fonts, if you choose them",
  "Email or SMS services that charge for usage",
  "Content writing and photography, unless you add them",
  "Work outside the agreed scope, which is quoted before it starts",
];

export const priceFaq = [
  [
    "What do the website and domain plans include?",
    "The website and its setup, your domain and hosting for the chosen term, and 2 months of free maintenance. Longer plans cost less per year, and the 2-year and 4-year plans include a free year of the domain.",
  ],
  [
    "Should I choose .com or .in?",
    "A .in domain suits a business that mainly serves customers in India, and a .com suits a wider audience. Use the switch above the plans to compare the prices.",
  ],
  [
    "What happens when my plan ends?",
    "Your domain and hosting can be renewed. I will tell you the renewal price before your plan ends.",
  ],
  [
    "What happens after the 2 free months of maintenance?",
    "Your site keeps running. If you want updates and fixes to continue, you can choose an optional care plan.",
  ],
  [
    "Are changes to the text and images included in the free maintenance?",
    "Small text and image changes are included, up to the time limit shown in the plan. Larger changes are quoted before I start.",
  ],
  [
    "Are custom project prices final?",
    "They are starting prices. The final price depends on your pages and features, and I confirm it in writing before work begins.",
  ],
  [
    "Do you take a deposit?",
    "Yes. 50% to start, and the balance before the site goes live.",
  ],
  [
    "Do I own the website?",
    "Yes. Once the final payment is made, the website files and content are yours.",
  ],
];
