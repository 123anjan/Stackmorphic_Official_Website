// ABOUT PAGE DATA.
// Every section below appears ONLY when it is filled in, so nothing on the page is ever invented.
// Fill in what is true and leave the rest empty ('' or []).

export const about = {
  // Your statement: edit it if you like (this is the version you approved).
  lead: "I build websites and web applications from the first sketch to launch, so you deal with one person.",
  intro: [
    "I design, build and launch websites and web applications end to end: UX and UI design, front-end and back-end development, and database architecture. You work with one developer instead of coordinating several freelancers, with clear communication at every stage and an agreed timeline up front.",
    "Every site is built to load quickly, work on any device, and make it easy for your customers to contact you.",
  ],

  // Put your photo in the public folder (for example public/anjan.jpg) and write '/anjan.jpg'.
  // Leave '' to show your initials instead.
  photo: "../frontend/public/anjan.png",

  // Short facts. Rows with an empty value are hidden. Fill in only what is true.
  facts: [
    ["Works with", "Clients locally and remotely"],
    [
      "Services",
      "Business websites, website design, and websites built for specific businesses",
    ],
    ["Based in", ""], // e.g. 'Kolkata, India'
    ["Experience", ""], // e.g. 'Building websites since 2023'
    ["Languages", ""], // e.g. 'English, Bengali, Hindi'
  ],

  // Your story: 2 or 3 short paragraphs on how you got into web development and what you care about
  // when you build for clients. Keep it relevant to the people who hire you. Leave [] to hide this section.
  story: [],

  // Education, courses, certificates. Only list ones you really hold.
  // Example: { title: 'B.Sc. in Computer Science', detail: 'University name, year' }
  credentials: [],
};

// Tools grouped by what they mean for the client. All of these are tools you told me you use.
export const toolGroups = [
  {
    title: "Design",
    tools: ["Figma"],
    why: "You see and approve the design before any code is written.",
  },
  {
    title: "Front end",
    tools: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React"],
    why: "Fast, mobile-friendly pages that are easy to maintain.",
  },
  {
    title: "Back end",
    tools: ["Python", "Django", "REST APIs"],
    why: "Forms, logins and dashboards that work reliably.",
  },
  {
    title: "Data",
    tools: ["Oracle SQL", "MongoDB"],
    why: "Enquiries and records stored safely and kept organised.",
  },
  {
    title: "Workflow",
    tools: ["Git", "GitHub", "VS Code", "PyCharm", "SQL Developer"],
    why: "Every change is tracked, so work can be reviewed or undone.",
  },
  {
    title: "Publishing",
    tools: ["GitHub", "Vercel", "Netlify"],
    why: "Your site goes live on dependable hosting.",
  },
];
