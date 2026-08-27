import fs from "node:fs";
import path from "node:path";

const SITE = "https://thedawsongant.com";

const posts = [
  {
    slug: "from-north-carolina-with-nothing",
    title: "From North Carolina With Nothing to Build With",
    description:
      "Dawson Gant on leaving North Carolina A&T at eighteen with no safety net and building a career in real estate and operations from scratch.",
    date: "2025-08-19",
    dateDisplay: "August 19, 2025",
    image: `${SITE}/profile.jpg`,
  },
  {
    slug: "proof-in-the-plaster",
    title: "Proof in the Plaster: What 100+ Houses Actually Teaches You",
    description:
      "Dawson Gant on flipping and building 100+ houses in Scottsdale — proof that operator experience beats spreadsheet modeling.",
    date: "2025-09-07",
    dateDisplay: "September 7, 2025",
    image: `${SITE}/post3-1.jpg`,
  },
  {
    slug: "telehealth-is-a-fulfillment-problem",
    title: "Telehealth Is a Fulfillment Problem, Not a Marketing Problem",
    description:
      "Dawson Gant on building telehealth to seven figures in four months — cold chain, compliance, and fulfillment as the real moat.",
    date: "2025-10-23",
    dateDisplay: "October 23, 2025",
    image: `${SITE}/conference.jpg`,
  },
  {
    slug: "cockpit-and-the-track",
    title: "The Cockpit and the Track Run on the Same Operating System",
    description:
      "Dawson Gant on private aviation, competitive racing, and the focus discipline that carries into business.",
    date: "2025-11-11",
    dateDisplay: "November 11, 2025",
    image: `${SITE}/JCA00070.jpg`,
  },
  {
    slug: "fifty-employees-changes-everything",
    title: "What Changes When You Cross Fifty Employees",
    description:
      "Dawson Gant on transitioning from solo operator to leading a team of fifty-plus across telehealth, growth ops, and real estate.",
    date: "2025-12-18",
    dateDisplay: "December 18, 2025",
    image: `${SITE}/JCA09318.jpg`,
  },
  {
    slug: "operator-not-advisor",
    title: "Operator, Not Advisor: Why I Stay in the Work",
    description:
      "Dawson Gant on a decade of building — real estate, telehealth, fifty-plus employees, and why he operates instead of advising.",
    date: "2026-01-14",
    dateDisplay: "January 14, 2026",
    image: `${SITE}/dawson-gant-giving-back.jpg`,
  },
];

function articleSchema(post) {
  const url = `${SITE}/blog/${post.slug}`;
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": ${JSON.stringify(post.title)},
  "description": ${JSON.stringify(post.description)},
  "image": ${JSON.stringify(post.image)},
  "datePublished": ${JSON.stringify(post.date)},
  "dateModified": ${JSON.stringify(post.date)},
  "author": {
    "@type": "Person",
    "@id": "${SITE}/#dawsongant",
    "name": "Dawson Gant",
    "url": "${SITE}/"
  },
  "publisher": {
    "@type": "Person",
    "@id": "${SITE}/#dawsongant",
    "name": "Dawson Gant"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": ${JSON.stringify(url)}
  },
  "url": ${JSON.stringify(url)},
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "Blog",
    "@id": "${SITE}/blog/#blog",
    "name": "Dawson Gant Blog",
    "url": "${SITE}/blog/"
  }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "${SITE}/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "${SITE}/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": ${JSON.stringify(post.title)},
      "item": ${JSON.stringify(url)}
    }
  ]
}
</script>`;
}

function seoHead(post) {
  const url = `${SITE}/blog/${post.slug}`;
  return `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="author" content="Dawson Gant">
<meta property="og:site_name" content="Dawson Gant">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="article">
<meta property="og:title" content="${post.title} | Dawson Gant">
<meta property="og:description" content="${post.description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${post.image}">
<meta property="article:published_time" content="${post.date}">
<meta property="article:author" content="Dawson Gant">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${post.title} | Dawson Gant">
<meta name="twitter:description" content="${post.description}">
<meta name="twitter:image" content="${post.image}">
${articleSchema(post)}`;
}

function blogIndexSchema() {
  return `<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="author" content="Dawson Gant">
<meta property="og:site_name" content="Dawson Gant">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="website">
<meta property="og:title" content="Blog | Dawson Gant">
<meta property="og:description" content="Articles from Dawson Gant on real estate, telehealth, racing, aviation, and building teams from nothing.">
<meta property="og:url" content="${SITE}/blog/">
<meta property="og:image" content="${SITE}/dawson-gant-office-portrait.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Blog | Dawson Gant">
<meta name="twitter:description" content="Articles from Dawson Gant on real estate, telehealth, racing, aviation, and building teams from nothing.">
<meta name="twitter:image" content="${SITE}/dawson-gant-office-portrait.jpg">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "${SITE}/blog/#blog",
  "url": "${SITE}/blog/",
  "name": "Dawson Gant Blog",
  "description": "Articles from Dawson Gant on real estate, telehealth, racing, aviation, and building teams from nothing.",
  "inLanguage": "en-US",
  "author": { "@id": "${SITE}/#dawsongant" },
  "publisher": { "@id": "${SITE}/#dawsongant" },
  "blogPost": [
${posts
  .map(
    (post) => `    {
      "@type": "BlogPosting",
      "headline": ${JSON.stringify(post.title)},
      "url": "${SITE}/blog/${post.slug}",
      "datePublished": ${JSON.stringify(post.date)}
    }`,
  )
  .join(",\n")}
  ]
}
</script>`;
}

function injectSeo(filePath, marker, seoBlock) {
  let html = fs.readFileSync(filePath, "utf8");
  if (html.includes('property="og:type"') || html.includes('"@type": "BlogPosting"') || html.includes('"@type": "Blog"')) {
    html = html.replace(/<meta name="robots"[\s\S]*?(?=<link rel="preconnect"|<link rel="stylesheet"|<\/head>)/, "");
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, "");
  }
  html = html.replace(marker, `${seoBlock}\n${marker}`);
  fs.writeFileSync(filePath, html);
}

const dirs = ["public/blog", "blog"];

for (const dir of dirs) {
  for (const post of posts) {
    const filePath = path.join(dir, `${post.slug}.html`);
    injectSeo(filePath, '<link rel="preconnect"', seoHead(post));
  }
  injectSeo(path.join(dir, "index.html"), '<link rel="preconnect"', blogIndexSchema());
}

console.log("Blog SEO injected.");
