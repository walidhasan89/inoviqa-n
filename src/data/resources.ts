export const resourceCategories = [
  "All",
  "Website Growth",
  "SEO",
  "CRO",
  "Analytics",
  "Lead Generation",
  "Automation",
] as const;

export const resources = [
  {
    slug: "website-growth-system",
    number: "01",
    title: "What Is a Website Growth System?",
    category: "Website Growth",
    type: "Growth Strategy",
    readTime: "7 min read",
    seoTitle: "What Is a Website Growth System? — Inoviqa",
    seoDescription:
      "Learn how a website growth system connects strategy, design, SEO, CRO, analytics, lead generation, and automation into one measurable business asset.",
    summary:
      "A website growth system turns a website from a static brochure into a measurable business asset built to attract, convert, track, optimize, and scale.",
    intro:
      "Most websites are built around pages. A website growth system is built around business outcomes: qualified traffic, clear messaging, conversion paths, tracking, optimization, and scalable workflows.",
    sections: [
      {
        title: "A website should do more than look good",
        text:
          "A strong website has a job. It should communicate the offer clearly, help the right people understand value quickly, build trust, guide visitors toward action, and show what is working through measurable data.",
      },
      {
        title: "The five-part growth framework",
        text:
          "Inoviqa uses the Attract → Convert → Track → Optimize → Scale framework. This connects SEO, page structure, UX, CTAs, analytics, CRO, lead capture, and automation into one practical system.",
      },
      {
        title: "Why systems outperform one-off redesigns",
        text:
          "A one-off redesign can make a website look better, but a system makes it easier to improve over time. When strategy, tracking, and optimization are included, the website becomes easier to manage and grow.",
      },
    ],
    takeaways: [
      "A website growth system connects strategy, design, SEO, CRO, and analytics.",
      "The goal is measurable business performance, not just visual improvement.",
      "Tracking and optimization make the website more valuable over time.",
    ],
    relatedServices: ["Website Growth Systems", "CRO & UX Optimization", "Analytics & Conversion Tracking"],
    faqs: [
      {
        question: "Is a website growth system different from a normal website?",
        answer:
          "Yes. A normal website is often focused on design and content. A website growth system connects strategy, UX, SEO, conversion flow, tracking, and optimization.",
      },
      {
        question: "Who needs a website growth system?",
        answer:
          "Businesses that rely on their website for leads, sales, visibility, trust, or customer acquisition can benefit from a growth-system approach.",
      },
    ],
  },
  {
    slug: "website-redesign-mistakes",
    number: "02",
    title: "Website Redesign Mistakes That Hurt Growth",
    category: "Website Growth",
    type: "Website Redesign",
    readTime: "6 min read",
    seoTitle: "Website Redesign Mistakes That Hurt Growth — Inoviqa",
    seoDescription:
      "Avoid common website redesign mistakes that damage SEO, conversions, tracking, UX, trust, and lead generation performance.",
    summary:
      "A redesign can improve a business — or quietly damage SEO, conversions, tracking, and user trust if the strategy is weak.",
    intro:
      "Many website redesigns focus too much on visuals and too little on structure, search visibility, conversion flow, and measurement. The result may look better but perform worse.",
    sections: [
      {
        title: "Redesigning without an audit",
        text:
          "Before changing visuals, review the current website. Look at page performance, SEO structure, user behavior, conversion paths, forms, CTAs, speed, and tracking gaps.",
      },
      {
        title: "Ignoring SEO structure",
        text:
          "Changing URLs, headings, internal links, and page hierarchy without planning can damage visibility. SEO should be built into the redesign process from the start.",
      },
      {
        title: "Forgetting conversion tracking",
        text:
          "A redesign should make measurement stronger. Forms, buttons, calls, key pages, and campaign actions should be tracked so performance can be improved after launch.",
      },
    ],
    takeaways: [
      "Audit before redesigning.",
      "Protect SEO structure and URL strategy.",
      "Build tracking into the new website from the start.",
    ],
    relatedServices: ["Website Growth Systems", "SEO & Local Visibility", "Analytics & Conversion Tracking"],
    faqs: [
      {
        question: "Can a redesign hurt SEO?",
        answer:
          "Yes. If URLs, headings, content hierarchy, metadata, redirects, or internal links are handled poorly, SEO performance can be affected.",
      },
      {
        question: "Should analytics be reviewed before redesigning?",
        answer:
          "Yes. Analytics can reveal which pages, CTAs, forms, and journeys matter most before making major design changes.",
      },
    ],
  },
  {
    slug: "local-seo-website-structure",
    number: "03",
    title: "How Local SEO Should Shape Website Structure",
    category: "SEO",
    type: "Local SEO",
    readTime: "8 min read",
    seoTitle: "How Local SEO Should Shape Website Structure — Inoviqa",
    seoDescription:
      "Learn how local SEO should influence service pages, location relevance, internal linking, trust signals, and conversion flow.",
    summary:
      "Local SEO is not only a Google Business Profile task. Your website structure should also support local relevance and conversion intent.",
    intro:
      "A local business website should make it easy for both search engines and customers to understand what you do, where you serve, why you are credible, and how to contact you.",
    sections: [
      {
        title: "Service pages need clear intent",
        text:
          "Each important service should have a clear page or section with helpful content, proof, FAQs, and CTAs. This makes the website easier to understand and easier to rank.",
      },
      {
        title: "Location relevance should feel natural",
        text:
          "Local signals should be useful, not spammy. Mention service areas, local proof, reviews, contact details, and location-specific context where it helps the visitor.",
      },
      {
        title: "Local SEO and CRO should work together",
        text:
          "Traffic without conversion is not enough. Local pages should include trust, proof, fast contact options, strong CTAs, and clear next steps.",
      },
    ],
    takeaways: [
      "Local SEO should influence page hierarchy and internal linking.",
      "Service pages need clear intent and helpful content.",
      "Local visibility and conversion flow should be planned together.",
    ],
    relatedServices: ["SEO & Local Visibility", "Website Growth Systems", "Lead Generation Systems"],
    faqs: [
      {
        question: "Do local businesses need service pages?",
        answer:
          "Yes. Clear service pages can help explain relevance, support SEO, answer buyer questions, and improve conversion paths.",
      },
      {
        question: "Is local SEO only about Google Business Profile?",
        answer:
          "No. Google Business Profile matters, but the website also plays an important role in trust, relevance, service clarity, and conversion.",
      },
    ],
  },
  {
    slug: "cro-signals-website-is-leaking-leads",
    number: "04",
    title: "CRO Signals Your Website Is Leaking Leads",
    category: "CRO",
    type: "Conversion Optimization",
    readTime: "7 min read",
    seoTitle: "CRO Signals Your Website Is Leaking Leads — Inoviqa",
    seoDescription:
      "Learn common CRO signals that show your website may be losing leads through unclear messaging, weak CTAs, low trust, poor forms, or bad page flow.",
    summary:
      "If people visit your website but do not take action, the issue may be clarity, trust, CTA flow, form friction, or weak page structure.",
    intro:
      "A website can look professional but still leak leads. CRO helps identify where visitors hesitate, lose trust, feel confused, or fail to find a clear next step.",
    sections: [
      {
        title: "Visitors do not understand the offer quickly",
        text:
          "If the hero section is vague, visitors may leave before understanding what you do. Strong positioning, specific outcomes, and clear CTAs help reduce confusion.",
      },
      {
        title: "Trust signals appear too late",
        text:
          "Reviews, proof, case studies, certifications, client results, and process clarity should support the decision journey. If proof appears too late, visitors may not continue.",
      },
      {
        title: "Forms create unnecessary friction",
        text:
          "Long, unclear, or intimidating forms can reduce conversions. Forms should match the intent level of the visitor and make the next step feel easy.",
      },
    ],
    takeaways: [
      "Clear messaging is one of the strongest CRO improvements.",
      "Trust signals should appear before doubt becomes too strong.",
      "Forms and CTAs should reduce friction, not create it.",
    ],
    relatedServices: ["CRO & UX Optimization", "Website Growth Systems", "Analytics & Conversion Tracking"],
    faqs: [
      {
        question: "Can CRO help service businesses?",
        answer:
          "Yes. CRO is valuable for service businesses because it improves inquiry flow, trust, page clarity, and lead capture.",
      },
      {
        question: "Do I need more traffic or better conversion?",
        answer:
          "Often both matter, but if the website already receives traffic and produces weak leads, CRO should be reviewed before investing more in traffic.",
      },
    ],
  },
  {
    slug: "ga4-gtm-conversion-tracking",
    number: "05",
    title: "GA4 and GTM Conversion Tracking Basics",
    category: "Analytics",
    type: "Tracking",
    readTime: "8 min read",
    seoTitle: "GA4 and GTM Conversion Tracking Basics — Inoviqa",
    seoDescription:
      "Understand the basics of GA4 and GTM conversion tracking for forms, CTA clicks, calls, key pages, and website growth decisions.",
    summary:
      "Website growth becomes guesswork when conversion actions are not tracked. GA4 and GTM help make important actions visible.",
    intro:
      "Many websites have analytics installed but still cannot answer important questions: which CTAs are clicked, which forms submit, which campaigns drive leads, and which pages influence conversion.",
    sections: [
      {
        title: "Track actions that matter",
        text:
          "Useful tracking starts with business goals. Forms, calls, CTA clicks, demo requests, checkout actions, key page views, and lead sources should be planned intentionally.",
      },
      {
        title: "Use GTM for cleaner event management",
        text:
          "Google Tag Manager makes it easier to manage events, triggers, tags, and conversion actions without editing website code for every tracking change.",
      },
      {
        title: "Keep reporting simple",
        text:
          "Tracking should help decision-making. Avoid creating noisy events that make reports confusing. Focus on actions that connect to business outcomes.",
      },
    ],
    takeaways: [
      "Track meaningful business actions, not random clicks.",
      "GTM helps manage events more cleanly.",
      "Simple reporting is more useful than noisy tracking.",
    ],
    relatedServices: ["Analytics & Conversion Tracking", "CRO & UX Optimization", "Website Growth Systems"],
    faqs: [
      {
        question: "Do I need both GA4 and GTM?",
        answer:
          "GA4 is used for analytics reporting. GTM helps manage tracking tags and events. Many growth-focused websites use both together.",
      },
      {
        question: "What should I track first?",
        answer:
          "Start with high-value actions: form submissions, CTA clicks, phone/email clicks, important landing pages, and conversion confirmation pages.",
      },
    ],
  },
  {
    slug: "lead-generation-system-for-service-businesses",
    number: "06",
    title: "Building a Lead Generation System for Service Businesses",
    category: "Lead Generation",
    type: "Lead Systems",
    readTime: "7 min read",
    seoTitle: "Lead Generation System for Service Businesses — Inoviqa",
    seoDescription:
      "Learn how service businesses can build better lead generation systems with landing pages, forms, tracking, follow-up workflows, and outreach support.",
    summary:
      "A lead generation system connects traffic, landing pages, offers, forms, tracking, follow-up, and organization into one repeatable workflow.",
    intro:
      "Service businesses often need more than a contact form. They need a clear offer, focused landing pages, trust signals, simple forms, tracking, and a follow-up process.",
    sections: [
      {
        title: "Start with the offer",
        text:
          "A strong lead generation system begins with a clear reason to act. The visitor should understand what they get, why it matters, and why now is the right time.",
      },
      {
        title: "Create focused conversion paths",
        text:
          "Landing pages and service pages should remove distractions and guide visitors toward the next step with clear CTAs, proof, FAQs, and frictionless forms.",
      },
      {
        title: "Organize leads after capture",
        text:
          "Lead generation does not end at submission. Leads should be tracked, organized, followed up with quickly, and reviewed to understand source quality.",
      },
    ],
    takeaways: [
      "Lead generation needs a clear offer and focused page flow.",
      "Forms should be simple and aligned with visitor intent.",
      "Follow-up and organization are part of the system.",
    ],
    relatedServices: ["Lead Generation Systems", "CRO & UX Optimization", "Analytics & Conversion Tracking"],
    faqs: [
      {
        question: "Do service businesses need landing pages?",
        answer:
          "Landing pages are useful when campaigns, offers, or audience segments need a focused conversion path.",
      },
      {
        question: "How can tracking improve lead generation?",
        answer:
          "Tracking helps show which pages, sources, CTAs, and campaigns produce leads so future growth decisions are clearer.",
      },
    ],
  },
  {
    slug: "automation-as-business-asset",
    number: "07",
    title: "How Automation Becomes a Business Asset",
    category: "Automation",
    type: "Automation Strategy",
    readTime: "6 min read",
    seoTitle: "How Automation Becomes a Business Asset — Inoviqa",
    seoDescription:
      "Learn how automation can become a business asset by reducing manual work, improving workflows, organizing data, and supporting scalable growth systems.",
    summary:
      "Automation becomes valuable when it reduces repeated work, improves data flow, speeds up decisions, and supports long-term scale.",
    intro:
      "Automation is not only about saving a few minutes. It can become a real business asset when it improves workflows, reduces errors, organizes information, and creates leverage.",
    sections: [
      {
        title: "Automate repeated workflows first",
        text:
          "The best automation opportunities often come from repeated tasks: copying data, following up, generating reports, collecting leads, updating records, or preparing drafts.",
      },
      {
        title: "Connect automation with data clarity",
        text:
          "Automation works better when data is organized. Forms, lead sources, customer actions, and workflow status should be easy to understand and use.",
      },
      {
        title: "Turn workflows into products",
        text:
          "Some automations can become internal tools, dashboards, Chrome extensions, or SaaS products. This is where automation becomes a scalable digital asset.",
      },
    ],
    takeaways: [
      "Start automation with repeated manual work.",
      "Clean data makes automation more useful.",
      "Some workflows can become reusable product assets.",
    ],
    relatedServices: ["Automation & Product Builds", "Lead Generation Systems", "Analytics & Conversion Tracking"],
    faqs: [
      {
        question: "What should I automate first?",
        answer:
          "Start with repeated tasks that are time-consuming, error-prone, or directly connected to revenue, leads, reporting, or customer communication.",
      },
      {
        question: "Can automation connect with my website?",
        answer:
          "Yes. Website forms, lead capture, analytics events, CRM workflows, reports, and follow-up systems can often connect with automation.",
      },
    ],
  },
] as const;

