// Edit this file so every line matches how you really work. Delete anything you do not do.
// 'duration' is optional: leave it '' to hide it, or write something you can keep to, e.g. '1 week'.

export const phases = [
  {
    id: "discovery",
    title: "Discovery",
    summary:
      "We talk through your business, your customers and what the website has to achieve.",
    duration: "",
    do: [
      "Ask about your business, audience and goals",
      "Look at sites you like and any existing material",
      "Note the pages, features and deadline you have in mind",
    ],
    get: "A short written brief that sums up what the site must do.",
    need: [
      "Your goals and target customers",
      "Examples of sites you like",
      "Any existing logo, text or photos",
    ],
    approval: "You confirm the brief is correct.",
  },
  {
    id: "planning",
    title: "Planning",
    summary:
      "I turn the brief into a clear plan, so price, schedule and scope are settled before work starts.",
    duration: "",
    do: [
      "List the pages and features and how they connect",
      "Choose the technology that fits the project",
      "Set the schedule, price and number of revision rounds",
    ],
    get: "A written scope with the page list, features, price and schedule.",
    need: [
      "A decision on pages and features",
      "The name of the person who approves each stage",
    ],
    approval:
      "You approve the scope and schedule before any design or code begins.",
  },
  {
    id: "design",
    title: "UX/UI design",
    summary: "You see how the site will look and work before it is built.",
    duration: "",
    do: [
      "Plan the layout of each key page",
      "Design the pages in Figma for desktop and mobile",
      "Apply your colours, fonts and logo",
    ],
    get: "Designs you can review and comment on.",
    need: [
      "Feedback on layout, wording and images",
      "Final logo and brand colours, if you have them",
    ],
    approval: "You approve the design before development starts.",
  },
  {
    id: "development",
    title: "Development",
    summary: "The approved design is built into a working website.",
    duration: "",
    do: [
      "Build the front end with React and Tailwind CSS",
      "Build the back end and database where the project needs them (Django and Oracle SQL or MongoDB)",
      "Connect forms, enquiries and any other features, and share progress as I go",
    ],
    get: "A working preview you can open and click through.",
    need: ["Final text and images", "Quick answers when I have a question"],
    approval: "You review the preview and confirm it matches the design.",
  },
  {
    id: "testing",
    title: "Testing",
    summary:
      "I check the site thoroughly and fix problems before it goes live.",
    duration: "",
    do: [
      "Test on phones, tablets and desktop screens",
      "Test every form and link",
      "Check loading speed and basic accessibility",
    ],
    get: "A tested site and a short summary of what was checked and fixed.",
    need: ["Try the preview yourself and report anything that looks wrong"],
    approval: "You sign off the site for launch.",
  },
  {
    id: "deployment",
    title: "Deployment",
    summary: "The site goes live on your domain.",
    duration: "",
    do: [
      "Set up hosting and your domain",
      "Publish the site and check it again once it is live",
      "Make sure enquiry emails reach you",
    ],
    get: "Your website, live on your own address.",
    need: [
      "Access to your domain and hosting accounts, or your go-ahead for me to set them up with you",
    ],
    approval: "",
  },
  {
    id: "support",
    title: "Support",
    summary: "I stay available after launch.",
    duration: "",
    do: [
      "Fix problems found after launch",
      "Make updates on request, confirming time and cost first",
    ],
    get: "A developer you can contact if something needs fixing or changing.",
    need: ["Tell me what you want changed"],
    approval: "",
  },
];

// Only keep checks you really do before launch.
export const checks = [
  "Layout on phones, tablets and desktop screens",
  "The browsers your visitors use most",
  "Every form submits and reaches the right place",
  "Every link and button goes where it should",
  "Page loading speed",
  "Keyboard use, readable colours and clear labels",
  "Page titles and descriptions for search engines",
];

// Edit these so they match your real terms.
export const rules = [
  [
    "Written scope",
    "Pages, features, price and schedule are agreed in writing before work starts.",
  ],
  [
    "Approval at each stage",
    "Nothing moves to the next stage until you have approved the current one.",
  ],
  [
    "Plain-language updates",
    "You hear from me at each stage, in clear terms, with no jargon.",
  ],
  [
    "Changes are quoted first",
    "If you want something outside the agreed scope, I tell you the time and cost before I start.",
  ],
];
