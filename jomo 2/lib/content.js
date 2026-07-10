// All Schools-page content lives here so copy edits never touch layout code.
// Image URLs point at the live Squarespace CDN so the site previews immediately.
// Swap these for local /public assets once Rachelle provides the originals.

export const IMG = {
  logoLight:
    "https://images.squarespace-cdn.com/content/v1/68d6d6a5ada4e45eff097799/fe66f779-d460-47ca-bf96-4138c5c4712d/JOMO_PrimaryLogo_Light.gif?format=1500w",
  logoDark:
    "https://images.squarespace-cdn.com/content/v1/68d6d6a5ada4e45eff097799/deaf1925-c784-4deb-aa54-4950818b5b22/JOMO_PrimaryLogo_Dark.gif",
  hero:
    "https://images.squarespace-cdn.com/content/v1/68d6d6a5ada4e45eff097799/0e4602de-a8d3-4fc4-95da-a692c8373720/image+170.png?format=2500w",
  expect:
    "https://images.squarespace-cdn.com/content/v1/68d6d6a5ada4e45eff097799/8b4ba5b8-942f-4bd5-9a3e-508ab69a0eb3/dom-fou-YRMWVcdyhmI-unsplash.jpg?format=2500w",
  impact:
    "https://images.squarespace-cdn.com/content/v1/68d6d6a5ada4e45eff097799/6ebc6e8e-84c5-4a78-8899-1ea1422fedc8/pexels-george-pak-7972653.jpg?format=2500w",
  t1: "https://images.squarespace-cdn.com/content/v1/68d6d6a5ada4e45eff097799/52c013b9-806b-47e6-9c32-33a1a2c328ba/IMG_2483.webp?format=1000w",
  t2: "https://images.squarespace-cdn.com/content/v1/68d6d6a5ada4e45eff097799/dcb8c5fb-ca65-46d2-9e23-c66c1908f25d/IMG_00701.webp?format=1000w",
  t3: "https://images.squarespace-cdn.com/content/v1/68d6d6a5ada4e45eff097799/b7716e18-bf2a-409e-b244-c249ad77b13a/IMG_8197+%281%29.webp?format=1000w",
};

export const NAV = [
  { label: "Home", href: "https://www.experiencejomo.com/" },
  { label: "About", href: "https://www.experiencejomo.com/about" },
  { label: "All Programs", href: "https://www.experiencejomo.com/all-programs" },
  { label: "Schools", href: "/schools" },
  { label: "Families", href: "https://www.experiencejomo.com/families" },
  { label: "Teams", href: "https://www.experiencejomo.com/teams" },
  { label: "Blog", href: "https://www.experiencejomo.com/blog" },
  { label: "Contact", href: "https://www.experiencejomo.com/contact" },
];

export const QUICK_LINKS = [
  { label: "Our Curriculum: What to Expect", href: "#whattoexpect" },
  { label: "Our Impact at Schools", href: "#schoolimpact" },
  { label: "What Schools Say", href: "#what-schools-say" },
];

export const EXPECT = [
  {
    title: "Curriculum Driven",
    body: "A Biblically rooted program helping students build joyful, purposeful relationships with technology through 10 grade-specific lessons that blend Scripture, health science, and practical strategies—guiding them from distraction to Christ-centered living.",
    lists: [
      {
        label: "Structure",
        items: [
          "Module 1: 4 lessons (Fall)",
          "Module 2: 2 lessons (January booster)",
          "Module 3: 4 lessons (Spring)",
        ],
      },
      {
        label: "Resources Included",
        items: [
          "Administrator Playbook",
          "Teacher Playbook",
          "Annual Communications Calendar",
          "Policies & Procedures",
        ],
      },
    ],
  },
  {
    title: "Christian Framework",
    body: "Rooted in God’s design for community, creativity, and presence, JOMO’s Christian Framework guides students toward intentional digital discipleship—choosing joy over fear, creation over consumption, and connection over isolation. Grounded in Matthew 22:37–39, our lessons help students explore how their digital habits reflect faith, identity, and purpose.",
    lists: [],
  },
  {
    title: "Coaching",
    body: "JOMO provides ongoing coaching and personalized support to help your team implement with clarity and confidence. From onboarding to ongoing growth, we walk with you every step of the way—offering tools, training, and guidance that make implementation simple and sustainable.",
    lists: [
      {
        label: "We Provide",
        items: [
          "Launch and onboarding support",
          "Bi-weekly mentor emails with best practices",
          "Monthly group coaching calls",
          "Planning tools and family engagement templates",
          "Two personalized strategy sessions per year",
        ],
      },
    ],
  },
];

export const STATS = [
  { value: 92, suffix: "%", label: "made a change to their digital habits as a result of the digital wellness challenge." },
  { value: 35, suffix: "+", label: "schools and counting that are using JOMO resources." },
  { value: 96, suffix: "%", label: "of participating students said they would recommend the JOMO Challenge to a friend." },
];

export const TESTIMONIALS = [
  {
    img: "t1",
    school: "Woodland Christian School",
    quote:
      "Our families and board are thrilled about JOMO — parents are engaging with the webinars, and teachers are seeing real change. Classrooms feel lighter and more connected, with students chatting face-to-face instead of hiding behind screens.",
    name: "Marjorie Sutherland",
    role: "Vice-Principal",
  },
  {
    img: "t2",
    school: "John Knox Christian School",
    quote:
      "Working with JOMO(campus) has been an inspiring and deeply meaningful experience for our school community. JOMO’s professional development sessions left a lasting impact, and we’re eager to continue building on the great work already begun.",
    name: "Wendy Perttula, MEd",
    role: "Director of Curriculum",
  },
  {
    img: "t3",
    school: "Eastern Christian School",
    quote:
      "Partnering with JOMO(campus) has been an incredible blessing for our school. It’s helped us cultivate a healthier mindset as we’ve moved toward becoming a phone-free community, and I continue to share JOMO with other schools whenever I have the opportunity.",
    name: "Ben Carapezza",
    role: "Director of Learning",
  },
];

export const FAQ = [
  {
    q: "What’s the structure/timeline for implementation?",
    a: "You can choose a phased launch or full-year plan. A sample rollout runs Staff + Family Formation and Student Module 1 in the Fall, a Mid-Year Refresh and Booster Lessons in Winter, and Student Module 3 plus Leadership Activities in Spring. JOMO is designed to follow the natural school rhythm — Module 1 is 4 lessons (Fall), Module 2 is 2 lessons (January booster), and Module 3 is 4 lessons (Spring). Every plan includes the Administrator Playbook, Teacher Playbook, Annual Communications Calendar, and Policies & Procedures.",
  },
  {
    q: "How long are the lessons?",
    a: "Each lesson comes in a condensed format (~7 min) and a full format (~15–20 min). All are modular and designed for flexible classroom integration.",
  },
  {
    q: "Does the JOMO content repeat from grade to grade (for example, in Grades 6, 7, and 8)?",
    a: "No — the content is unique to each grade. While all levels are built on the same JOMO framework (joy, kindness, relationships, and intentional digital use), each grade has age-appropriate modules. Grade 6 emphasizes kindness, community, and healthy digital habits; Grade 7 moves into habits, self-control, and belonging; Grade 8 focuses on identity, leadership, and intentional living. Each year builds on the last, with intentional spiralling so students encounter fresh content and new challenges tailored to their stage.",
  },
  {
    q: "Can we adapt the content?",
    a: "Yes. While we ask schools to preserve core messages, you’re encouraged to customize based on context, faith formation goals, or SEL frameworks.",
  },
  {
    q: "Do students need phones to participate?",
    a: "No. Our curriculum focuses on habits and self-awareness for all tech—laptops, tablets, gaming, and more—not just smartphones.",
  },
  {
    q: "Can we do a trial period?",
    a: "Yes. Let’s talk about a phased soft start for your school community.",
  },
];

export const MAP_SRC =
  "https://www.google.com/maps/d/embed?mid=1K0oUUDNIze2r2Xv-JTPAtBt78u49VRY&ehbc=2E312F&noprof=1&wmode=opaque";

export const YOUTUBE_ID = "s2IyO_X4qj4";

export const SAMPLE_LESSON_URL = "https://jomocampussamplelesson.my.canva.site/";
