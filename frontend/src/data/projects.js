// SAMPLE CONTENT: replace with real entries. Items with sample: true show a "Sample" badge.
// Delete the sample items (or set sample: false) once real content is in.
// Only publish verified testimonials; placeholders must remain clearly labeled until replaced.
export const projects = [
  {
    slug: "local-business-website",
    sample: false,
    name: "Radha Krishna Jewellers",
    type: "Client",
    problem:
      "A local jewellery brand needed a reliable online presence to showcase collections and convert visitors into enquiries.",
    approach:
      "I focused on trust-building design, clear messaging, and a mobile-first structure that made the business feel premium and easy to contact.",
    solution:
      "A responsive storefront-style website with curated product highlights, business information, and direct enquiry contact paths.",
    result:
      "The site gave the business a more professional online identity and made it easier for local shoppers to discover and contact the brand.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    features: ["Responsive layout", "Product showcase", "Contact CTA"],
    live: "https://123anjan.github.io/Radha-Krishna-Jewellers/",
    github: "https://github.com/123anjan/Radha-Krishna-Jewellers.git",
  },
  {
    slug: "enquiry-management-app",
    sample: false,
    name: "Enquiry management app",
    type: "Internal tool",
    problem:
      "Customer enquiries were arriving across multiple channels and getting lost without one place to track them.",
    approach:
      "I modeled the enquiry flow around status tracking and built a clean interface that connected to a backend data source.",
    solution:
      "A React dashboard with a Django REST API and Oracle SQL storage to manage enquiries through each follow-up stage.",
    result:
      "The team gained a single source of truth for leads, improving consistency and reducing missed follow-ups.",
    tech: ["React", "Django", "REST APIs", "Oracle SQL"],
    features: ["Enquiry list", "Status tracking", "Admin login"],
    live: "",
    github: "",
  },
  {
    slug: "content-dashboard",
    sample: false,
    name: "Content dashboard",
    type: "Dashboard",
    problem:
      "Content owners needed a way to update pages without editing source code or waiting for developer changes.",
    approach:
      "I created a flexible content model and a simple admin interface so non-technical staff could manage site content safely.",
    solution:
      "A React dashboard backed by Python and MongoDB for easy publishing and editing of content.",
    result:
      "The client could update content without developer help while keeping the structure clean and maintainable.",
    tech: ["React", "Python", "MongoDB", "REST APIs"],
    features: ["Create and edit content", "Preview", "Role-based access"],
    live: "",
    github: "",
  },
  {
    slug: "service-booking-dashboard",
    sample: true,
    name: "Service booking dashboard",
    type: "Business app",
    problem:
      "A service business needed a clearer booking workflow to prevent missed appointments and miscommunication.",
    approach:
      "I mapped the booking flow, appointment logic, and admin workflow to keep the interface practical and easy to manage.",
    solution:
      "A React app with Django and Oracle SQL for appointments, customer records, and business availability.",
    result:
      "The process became easier for staff to manage and more reliable for customers booking time slots.",
    tech: ["React", "Django", "Oracle SQL", "REST APIs"],
    features: ["Booking flow", "Availability view", "Client records"],
    live: "",
    github: "",
  },
  {
    slug: "lead-capture-site",
    sample: true,
    name: "Lead capture website",
    type: "Marketing site",
    problem:
      "A service company wanted a cleaner way to generate enquiries and explain its offer without overwhelming the visitor.",
    approach:
      "I focused the page structure around a single action, making the site feel clear, persuasive, and easy to trust.",
    solution:
      "A conversion-focused website built with React and Tailwind CSS, designed to guide visitors toward contact.",
    result:
      "The business gained a simpler path from interest to enquiry and a more professional brand presence online.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    features: ["Lead form", "Service messaging", "Responsive design"],
    live: "",
    github: "",
  },
  {
    slug: "client-portal-dashboard",
    sample: true,
    name: "Client portal dashboard",
    type: "Client portal",
    problem:
      "A business wanted a clear portal where clients could view account details and key information without contacting support repeatedly.",
    approach:
      "I designed the dashboard around essential client tasks and built a structured interface that was clean, fast, and easy to navigate.",
    solution:
      "A client dashboard using React and Django, with MongoDB storing account information and API endpoints for retrieval.",
    result:
      "Clients had a simpler experience, and the business reduced repetitive support requests.",
    tech: ["React", "Django", "MongoDB", "REST APIs"],
    features: ["Client overview", "Account data", "Secure dashboard"],
    live: "",
    github: "",
  },
  {
    slug: "restaurant-business-website",
    sample: true,
    name: "Restaurant business website",
    type: "Business website",
    problem:
      "A neighborhood restaurant needed a clear way to present its menu, location, and contact information to local customers.",
    approach:
      "I organized the key visitor information into a mobile-friendly layout and kept the design focused on helping customers decide and get in touch.",
    solution:
      "A responsive restaurant website with menu sections, business details, and prominent contact links.",
    result:
      "The restaurant gets a straightforward online presence that helps visitors quickly find the information they need.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    features: [
      "Menu sections",
      "Mobile-friendly layout",
      "Contact information",
    ],
    live: "",
    github: "",
  },
  {
    slug: "service-business-website",
    sample: true,
    name: "Service business website",
    type: "Business website",
    problem:
      "A local service provider needed to explain its services clearly and make it simple for potential customers to request an enquiry.",
    approach:
      "I shaped the page structure around the services, common customer questions, and clear next steps.",
    solution:
      "A responsive React website with service details, reusable page sections, and an enquiry-focused contact path.",
    result:
      "Visitors can understand the offer quickly and find a clear way to contact the business.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    features: ["Service pages", "Reusable sections", "Contact CTA"],
    live: "",
    github: "",
  },
  {
    slug: "inventory-management-dashboard",
    sample: true,
    name: "Inventory management dashboard",
    type: "Business app",
    problem:
      "A small business needed a central view of its products and stock instead of tracking updates across separate records.",
    approach:
      "I organized the interface around frequently used inventory tasks and structured the data access through API endpoints.",
    solution:
      "A React dashboard with a Django REST API and Oracle SQL data storage for product and stock records.",
    result:
      "The business has a more organized way to review and update inventory information.",
    tech: ["React", "Django", "REST APIs", "Oracle SQL"],
    features: ["Product list", "Stock status", "Inventory updates"],
    live: "",
    github: "",
  },
  {
    slug: "blog-content-platform",
    sample: true,
    name: "Blog content platform",
    type: "Content website",
    problem:
      "A small publisher needed an organized place to share articles and make content easier for readers to browse.",
    approach:
      "I planned the article and category structure, then built a responsive front end connected to a manageable content data source.",
    solution:
      "A React content site with a Python and Django backend and MongoDB for article data.",
    result:
      "Readers can browse published content in a structured layout, while the content model supports future additions.",
    tech: ["React", "Python", "Django", "MongoDB", "REST APIs"],
    features: ["Article pages", "Category browsing", "Responsive design"],
    live: "",
    github: "",
  },
  {
    slug: "event-registration-platform",
    sample: true,
    name: "Event registration platform",
    type: "Web application",
    problem:
      "An event organizer needed a clear registration flow and a simple way to review attendee submissions.",
    approach:
      "I mapped the attendee journey from event information to registration and designed the management view around submitted entries.",
    solution:
      "A React registration interface backed by Django REST APIs and Oracle SQL for event and attendee records.",
    result:
      "Attendees have a clear registration path and organizers can review submitted registrations in one place.",
    tech: ["React", "Django", "REST APIs", "Oracle SQL"],
    features: ["Event details", "Registration form", "Attendee list"],
    live: "",
    github: "",
  },
  {
    slug: "product-catalog-site",
    sample: true,
    name: "Product catalog website",
    type: "Product website",
    problem:
      "A small retailer wanted to present its product range online in a way that was easy to browse on desktop and mobile.",
    approach:
      "I arranged products into clear categories and used a consistent card layout to make the catalog easy to scan.",
    solution:
      "A responsive catalog built with React and Tailwind CSS, with product information served from a Django REST API.",
    result:
      "Customers can browse product categories and details through a cleaner online catalog.",
    tech: ["React", "Tailwind CSS", "Django", "REST APIs", "MongoDB"],
    features: ["Product categories", "Catalog cards", "Product details"],
    live: "",
    github: "",
  },
];
export const posts = [
  {
    slug: "what-to-prepare-before-ordering-a-website",
    sample: false, // delete this line when you write the real article
    title: "What to prepare before ordering a website",
    date: "2026-10-01", // always YYYY-MM-DD
    category: "Planning",
    tags: ["Small business", "Planning"],
    summary:
      "A short checklist of the content and decisions that make a website project faster and easier.",
    body: [
      {
        type: "p",
        text: "A website project goes much faster when a few decisions are made before development starts. This checklist covers what most small business owners can prepare in an afternoon.",
      },
      { type: "h2", text: "Decide what the site must do" },
      {
        type: "ul",
        items: [
          "Who is the site for, and what should they do when they arrive?",
          "Do you want enquiries, phone calls, WhatsApp messages or bookings?",
          "Which three pages matter most?",
        ],
      },
      { type: "h2", text: "Gather your content" },
      {
        type: "p",
        text: "Collect your logo, photos, a short description of each service and your contact details. Real photos and clear wording make more difference than any design effect.",
      },
      { type: "h2", text: "Look at examples" },
      {
        type: "quote",
        text: "Save two or three sites you like and note what you like about each one.",
      },
      {
        type: "p",
        text: "This gives the designer a shared reference without copying anyone.",
      },
    ],
  },
  {
    slug: "which-pages-a-small-business-website-needs",
    sample: false, // delete this line when you write the real article
    title: "Which pages a small business website needs",
    date: "2026-09-28",
    category: "Planning",
    tags: ["Small business", "Structure"],
    summary:
      "The pages most small business sites need at launch, and the ones that can wait.",
    body: [
      {
        type: "p",
        text: "Most small business sites work well with a small set of clear pages.",
      },
      { type: "h2", text: "Pages to launch with" },
      { type: "ul", items: ["Home", "Services", "About", "Contact"] },
      { type: "h2", text: "Pages that can wait" },
      {
        type: "p",
        text: "A blog, a gallery or an online shop can be added after launch once the main site is bringing in enquiries.",
      },
    ],
  },
];
export const testimonials = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "Acme Corp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "Integrating this solution cut our deployment pipeline times by 65%. The developer experience and documentation are unmatched in the industry.",
    highlight: "Reduced deployment times by 65%",
  },
  {
    id: "test-2",
    name: "Marcus Chen",
    role: "Engineering Director",
    company: "Nexus Labs",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "We scaled from 10k to 1M daily active users without a single hiccup. The architecture recommendations paid off tenfold during our peak launch.",
    highlight: "Seamless scaling to 1M+ DAU",
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Head of Design",
    company: "Starlight Studio",
    avatar: null, // Will automatically generate an 'ER' avatar
    rating: 4.8,
    quote:
      "The attention to detail and UI responsiveness is top-tier. It brought our team's creative vision to life effortlessly.",
    highlight: "Flawless UI execution",
  },
  {
    id: "test-4",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "Acme Corp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "Integrating this solution cut our deployment pipeline times by 65%. The developer experience and documentation are unmatched in the industry.",
    highlight: "Reduced deployment times by 65%",
  },
  {
    id: "test-5",
    name: "Marcus Chen",
    role: "Engineering Director",
    company: "Nexus Labs",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "We scaled from 10k to 1M daily active users without a single hiccup. The architecture recommendations paid off tenfold during our peak launch.",
    highlight: "Seamless scaling to 1M+ DAU",
  },
  {
    id: "test-6",
    name: "Elena Rostova",
    role: "Head of Design",
    company: "Starlight Studio",
    avatar: null,
    rating: 4.8,
    quote:
      "The attention to detail and UI responsiveness is top-tier. It brought our team's creative vision to life effortlessly.",
    highlight: "Flawless UI execution",
  },
];
export const pricing = [
  {
    name: "Starter website",
    sample: false,
    price: "Price to be set",
    note: "Small business site",
    includes: ["Up to 5 pages", "Responsive design", "Contact form"],
  },
  {
    name: "Business website",
    sample: false,
    price: "Price to be set",
    note: "Most common choice",
    includes: [
      "Up to 10 pages",
      "Custom design in Figma",
      "Enquiry form with database",
      "Basic SEO setup",
    ],
  },
  {
    name: "Web application",
    sample: false,
    price: "Price to be set",
    note: "Quoted per project",
    includes: [
      "Custom features",
      "Django REST API",
      "Database design",
      "Deployment",
    ],
  },
];
