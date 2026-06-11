import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const siteUrl = "https://dauntlessmaritimeservices.com";
const charterBookingUrl = "https://cal.com/dauntless-maritime-services/charter-block";
const twoHourCharterBookingUrl = "https://cal.com/dauntless-maritime-services/two-hour-charter-block";
const today = "2026-07-14";
const contactPhone = "(252) 207-3305";
const contactTelephone = "+12522073305";
const contactEmail = "jonathankeffer@hotmail.com";
const inquirySubject = "CHARTER INQUIRY";
const inquiryEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

const navItems = [
  { key: "book", label: "Book", href: "book/" },
  { key: "cruises", label: "Trips", href: "cruises/" },
  { key: "ulysses", label: "Boat", href: "ulysses/" },
  { key: "pickup-map", label: "Map", href: "pickup-map/" },
  { key: "safety-faq", label: "FAQ", href: "safety-faq/" },
  { key: "about", label: "Story", href: "about/" }
];

const images = {
  hero: {
    webp: "assets/images/hero-ulysses-golden-hour.webp",
    png: "assets/images/hero-ulysses-golden-hour.png",
    alt: "Ulysses, a white shallow-draft cruising trawler with a blue hull bottom, crosses the Currituck Sound in warm golden-hour light."
  },
  sunrise: {
    webp: "assets/images/sunrise-marsh-currituck.webp",
    png: "assets/images/sunrise-marsh-currituck.png",
    alt: "Soft sunrise light and mist over marsh grass and calm shallow water on the Currituck Sound."
  },
  wildlife: {
    webp: "assets/images/carova-horses-viewed-from-water.webp",
    png: "assets/images/carova-horses-viewed-from-water.png",
    alt: "Wild horses graze near distant dunes on the northern Currituck Banks, viewed respectfully from the water."
  },
  dock: {
    webp: "assets/images/dock-and-dine-duck-arrival.webp",
    png: "assets/images/dock-and-dine-duck-arrival.png",
    alt: "Ulysses tied at a quiet soundside dock with the bow, cabin, blue hull, and rail visible."
  },
  pickup: {
    webp: "assets/images/waterlily-koa-pickup-dock.webp",
    png: "assets/images/waterlily-koa-pickup-dock.png",
    alt: "Ulysses tied at a quiet Currituck Sound dock near Waterlily on a clear morning."
  },
  cabin: {
    webp: "assets/images/ulysses-bow-home-dock.webp",
    png: "assets/images/ulysses-bow-home-dock.png",
    alt: "Ulysses tied alongside her home dock on a clear morning, showing the enclosed pilothouse, forward cabin, and bow rail."
  },
  safety: {
    webp: "assets/images/captain-weather-safety-check.webp",
    png: "assets/images/captain-weather-safety-check.png",
    alt: "Life jackets and a neatly coiled dock line staged on Ulysses' white aft bench before a charter departs."
  },
  sunsetGuests: {
    webp: "assets/images/sunset-guests-aboard-ulysses.webp",
    png: "assets/images/sunset-guests-aboard-ulysses.png",
    alt: "Three guests on Ulysses' covered aft deck watch the sun set over the Currituck Sound."
  },
  routeMap: {
    webp: "assets/images/pickup-map-currituck-illustration.webp",
    png: "assets/images/pickup-map-currituck-illustration.png",
    alt: "USGS Topo map of Currituck Sound and the northern Outer Banks showing Dauntless pickup and service areas including Waterlily, Duck, Grandy, Manteo, Carova, Coinjock, and Corolla."
  },
  texture: {
    webp: "assets/images/brand-chart-wake-texture.webp",
    png: "assets/images/brand-chart-wake-texture.png",
    alt: "Abstract nautical chart texture with subtle wake lines and coordinate marks."
  },
  sideProfile: {
    webp: "assets/images/ulysses-side-profile.webp",
    png: "assets/images/ulysses-side-profile.png",
    alt: "Side profile of Ulysses, a white-and-blue Great Harbour TT35 shallow-draft trawler, cruising on Currituck Sound water."
  },
  birds: {
    webp: "assets/images/currituck-marsh-birds.webp",
    png: "assets/images/currituck-marsh-birds.png",
    alt: "Egrets forage along a quiet marsh edge in the Currituck Sound."
  }
};

const cruises = [
  {
    id: "guided_sound_tour",
    title: "Guided Currituck Sound Tour",
    shortTitle: "Guided Sound Tours",
    slug: "cruises/",
    imageKey: "birds",
    number: "01",
    eyebrow: "Nature views and quiet water",
    shortDescription: "Marsh edges, open water, birds, and soundside context.",
    longDescription: "Designed for guests who want to understand the Currituck Sound from the water, this private tour blends scenic cruising, local context, wildlife awareness, and time aboard Ulysses.",
    bestFor: ["Families", "First-time Outer Banks visitors", "Nature-focused guests"],
    duration: "Often planned around 90 minutes",
    departures: "Waterlily / KOA, Duck, Grandy by confirmation",
    cta: "Request a Sound Tour"
  },
  {
    id: "carova_horse_viewing",
    title: "Carova Horse Viewing from the Water",
    shortTitle: "Carova Horse Viewing",
    slug: "cruises/wildlife-carova-horses/",
    imageKey: "wildlife",
    number: "02",
    eyebrow: "Respectful wildlife viewing",
    shortDescription: "Distant, responsible viewing from the water when conditions allow.",
    longDescription: "This experience is built around patience, distance, and respect for wild horses and their habitat. Sightings are not guaranteed, and routes are adjusted for conditions and wildlife safety.",
    bestFor: ["Wildlife lovers", "Photographers with long lenses", "Quiet nature outings"],
    duration: "Custom timing after captain review",
    departures: "Waterlily / KOA or Duck by confirmation",
    cta: "Ask About Horse Viewing"
  },
  {
    id: "sunrise_sunset",
    title: "Scenic Sunrise & Sunset Cruise",
    shortTitle: "Sunrise & Sunset Cruises",
    slug: "cruises/sunset-sunrise/",
    imageKey: "sunsetGuests",
    number: "03",
    eyebrow: "Golden-hour private charters",
    shortDescription: "Early and late light over calm protected water.",
    longDescription: "Ideal for couples, families, and small groups who want a quiet golden-hour experience on the Currituck Sound.",
    bestFor: ["Couples", "Anniversaries", "Family photos", "Relaxed evenings"],
    duration: "Often planned around 90 minutes",
    departures: "Waterlily / KOA, Duck, Grandy by confirmation",
    cta: "Plan a Sunset Cruise"
  },
  {
    id: "dock_and_dine",
    title: "Dock-and-Dine Restaurant Charter",
    shortTitle: "Dock-and-Dine Charters",
    slug: "cruises/dock-and-dine/",
    imageKey: "dock",
    number: "04",
    eyebrow: "Dinner by water",
    shortDescription: "Dinner plans by water when dockage and timing line up.",
    longDescription: "A charter for guests who want the dinner journey to be part of the evening. Restaurant reservations, dock access, weather, and timing must be coordinated in advance.",
    bestFor: ["Dinner groups", "Celebrations", "Visitors staying near the sound"],
    duration: "Custom schedule",
    departures: "Waterlily / KOA, Duck, Grandy by confirmation",
    cta: "Plan a Dock-and-Dine Charter"
  },
  {
    id: "custom_private_charter",
    title: "Custom Private Charter",
    shortTitle: "Custom Private Charters",
    slug: "contact/?interest=custom_private_charter",
    imageKey: "sideProfile",
    number: "05",
    eyebrow: "Custom private expeditions",
    shortDescription: "A captain-reviewed plan for a specific group or route.",
    longDescription: "Custom charters are best for repeat visitors, local residents, referral partners, and groups with a specific soundside plan in mind.",
    bestFor: ["Seasonal visitors", "Local residents", "Special requests"],
    duration: "Built around the request",
    departures: "By captain approval",
    cta: "Request a Custom Charter"
  }
];

const locations = [
  {
    id: "koa_waterlily",
    name: "Outer Banks West / Currituck Sound KOA Holiday",
    shortName: "Waterlily / KOA",
    type: "pickup",
    status: "Needs confirmation",
    coordinates: "36.417178, -75.923594",
    left: 42.9,
    top: 29.4,
    description: "Primary requested pickup and departure point near Waterlily and Coinjock on the Currituck Sound side.",
    note: "Exact pickup location is subject to KOA permission, dock access, water level, and captain approval.",
    link: "https://koa.com/campgrounds/outer-banks-west/",
    linkLabel: "KOA campground website"
  },
  {
    id: "duck",
    name: "Duck, North Carolina",
    shortName: "Duck",
    type: "service_area",
    status: "Needs confirmation",
    coordinates: "36.169722, -75.755278",
    left: 53.6,
    top: 56.2,
    description: "Soundside resort town and possible pickup, tour zone, or dock-and-dine area.",
    note: "A specific legal dock or tie-up location must be confirmed before trip details are published.",
    link: "https://en.wikipedia.org/wiki/Duck,_North_Carolina",
    linkLabel: "Wikipedia"
  },
  {
    id: "grandy",
    name: "Grandy, North Carolina",
    shortName: "Grandy",
    type: "service_area",
    status: "Needs confirmation",
    coordinates: "36.241667, -75.878889",
    left: 45.7,
    top: 48.5,
    description: "Mainland Currituck service-area marker for guests staying near Grandy or passing through.",
    note: "Exact waterfront pickup point must be confirmed.",
    link: "https://en.wikipedia.org/wiki/Grandy,_North_Carolina",
    linkLabel: "Wikipedia"
  },
  {
    id: "manteo",
    name: "Manteo, North Carolina",
    shortName: "Manteo",
    type: "service_area",
    status: "Special request",
    coordinates: "35.908056, -75.675556",
    left: 58.7,
    top: 84.5,
    description: "Extended special-request service area, not a standard Currituck Sound pickup.",
    note: "Routing and timing must be validated by the captain before this area is offered.",
    link: "https://en.wikipedia.org/wiki/Manteo,_North_Carolina",
    linkLabel: "Wikipedia"
  },
  {
    id: "carova",
    name: "Carova Beach / Northern Currituck Banks",
    shortName: "Carova",
    type: "wildlife_context",
    status: "Context only",
    coordinates: "36.5454, -75.8722",
    left: 46.2,
    top: 15.5,
    description: "Context area for responsible wildlife viewing from the water.",
    note: "Wild horse sightings are never guaranteed and all viewing is from a respectful distance.",
    link: "https://en.wikipedia.org/wiki/Carova_Beach,_North_Carolina",
    linkLabel: "Wikipedia"
  },
  {
    id: "coinjock",
    name: "Coinjock, North Carolina",
    shortName: "Coinjock",
    type: "destination",
    status: "Needs confirmation",
    coordinates: "36.3446, -75.9480",
    left: 41.3,
    top: 37.3,
    description: "Dock-and-dine destination area with restaurant and marina context.",
    note: "Restaurant reservation, dockage, timing, and route must be confirmed before booking.",
    link: "https://coinjockmarina.com",
    linkLabel: "Coinjock Marina website"
  },
  {
    id: "corolla",
    name: "Corolla, North Carolina",
    shortName: "Corolla",
    type: "destination",
    status: "Needs confirmation",
    coordinates: "36.380287, -75.830780",
    left: 48.8,
    top: 33.4,
    description: "Northern Outer Banks destination context for private charters.",
    note: "Exact soundside dock or restaurant access must be verified before publishing a routable stop.",
    link: "https://en.wikipedia.org/wiki/Corolla,_North_Carolina",
    linkLabel: "Wikipedia"
  }
];

const partners = [
  {
    name: "Tull's Bay Marina",
    status: "Confirmed",
    url: "https://www.facebook.com/p/Tulls-Bay-Marina-100092721950793/",
    description: "Affiliated marina partner for passenger origin, pickup, and drop-off coordination."
  },
  {
    name: "Currituck Trading Post",
    status: "Confirmed",
    url: "https://curritucktradingpost.com",
    description: "Affiliated partner location for passenger origin, pickup, and drop-off coordination."
  },
  {
    name: "Coinjock Marina",
    status: "Confirmed",
    url: "https://coinjockmarina.com",
    description: "Affiliated marina partner near Coinjock for dockage and dock-and-dine coordination."
  },
  {
    name: "Barry's Walnut Island",
    status: "Requires Confirmation",
    url: "https://barryswalnutisland.com",
    description: "Prospective affiliated partner location, pending confirmation of dock access and terms."
  }
];

const faqs = [
  {
    q: "How many guests can come?",
    a: "Dauntless is planned around private charters for up to 6 guests. Final passenger rules, child requirements, and any weight or boarding limits should be confirmed by the owner before launch."
  },
  {
    q: "Where do we depart?",
    a: "Requested pickup areas include Waterlily / KOA, Duck, Grandy, and other soundside locations by review. Exact departure details depend on dock permissions, water level, weather, and captain approval."
  },
  {
    q: "Are horse sightings guaranteed?",
    a: "No. Carova and Corolla horse viewing is a possibility, not a promise. Wildlife viewing is conducted from a respectful distance without feeding, approaching, calling to, or disturbing animals."
  },
  {
    q: "What should we bring?",
    a: "Bring sun protection, layers, soft-soled shoes, water, and a camera. For wildlife photography, a longer lens is more appropriate than expecting close viewing."
  },
  {
    q: "What happens if weather changes?",
    a: "Currituck Sound conditions can change with wind, water level, storms, and visibility. Dauntless confirms each trip based on the captain's judgment and guest safety. Trips may be adjusted or rescheduled."
  },
  {
    q: "Can children come?",
    a: "Family trips are handled by request. Include child ages and any boarding needs so PFD requirements and safe access can be reviewed before confirmation."
  },
  {
    q: "Can we bring food or drinks?",
    a: "Food and drink policy, including any alcohol rules, must be confirmed by the owner. Dock-and-dine charters require restaurant timing and dock access to be coordinated in advance."
  },
  {
    q: "Are pets allowed?",
    a: "Pets are not assumed. Include any pet request in the inquiry notes so the captain can review the dock, route, and guest safety details."
  },
  {
    q: "Is there a bathroom aboard?",
    a: "Aboard amenities are confirmed during booking review so guests know what to expect before departure."
  },
  {
    q: "Is the boat wheelchair accessible?",
    a: "Boarding conditions vary by dock height, water level, and route. Include mobility needs in the inquiry so access can be reviewed before confirmation."
  },
  {
    q: "Do you offer gift certificates?",
    a: "Gift certificate requests can be noted in the inquiry form."
  },
  {
    q: "Can you take us to dinner by boat?",
    a: "Dock-and-dine charters are planned as custom private trips for up to 6 guests. Restaurant reservations, dockage, schedule, weather, and route feasibility must be confirmed before the charter is accepted."
  }
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TravelAgency"],
  name: "Dauntless Maritime Services LLC",
  url: siteUrl,
  telephone: contactTelephone,
  email: contactEmail,
  description: "Operating scenic, expeditionary inland voyages on the main Currituck Sound and nearby tributaries, such as the Northwest River and Tulls Bay, including the Intracoastal Waterway of northeastern North Carolina through Coinjock Bay and Coinjock, and areas in the northern Albemarle Sound, Kitty Hawk Bay, and Roanoke Sound, aboard Ulysses.",
  areaServed: [
    { "@type": "Place", name: "Currituck Sound" },
    { "@type": "Place", name: "Northwest River" },
    { "@type": "Place", name: "Tulls Bay" },
    { "@type": "Place", name: "Coinjock Bay" },
    { "@type": "Place", name: "Duck, North Carolina" },
    { "@type": "Place", name: "Grandy, North Carolina" },
    { "@type": "Place", name: "Coinjock, North Carolina" },
    { "@type": "Place", name: "Manteo, North Carolina" },
    { "@type": "Place", name: "Northern Albemarle Sound" },
    { "@type": "Place", name: "Kitty Hawk Bay" },
    { "@type": "Place", name: "Roanoke Sound" }
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Currituck Sound Boat Tour" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scenic Sunrise and Sunset Cruise" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dock-and-Dine Restaurant Charter" } }
  ]
};

function relPrefix(file) {
  const depth = file.split("/").length - 1;
  return depth === 0 ? "." : Array(depth).fill("..").join("/");
}

function href(prefix, path = "") {
  if (!path) return `${prefix}/`;
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) return path;
  return `${prefix}/${path}`;
}

function canonical(path) {
  return `${siteUrl}/${path}`.replace(/\/+$/, "/");
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function imageTag(prefix, key, className = "", loading = "lazy", pictureClass = "") {
  const image = images[key];
  return `<picture${pictureClass ? ` class="${pictureClass}"` : ""}>
    <source srcset="${href(prefix, image.webp)}" type="image/webp">
    <img class="${className}" src="${href(prefix, image.png)}" alt="${esc(image.alt)}" loading="${loading}" decoding="async">
  </picture>`;
}

function layout(page) {
  const prefix = relPrefix(page.file);
  const body = page.body(prefix);
  const pagePath = page.path || "";
  const preload = page.preloadHero
    ? `<link rel="preload" as="image" href="${href(prefix, images.hero.webp)}" type="image/webp">`
    : "";
  const jsonLd = [localBusinessJsonLd, ...(page.jsonLd || [])]
    .map((data) => `<script type="application/ld+json">${JSON.stringify(data)}</script>`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical(pagePath)}">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical(pagePath)}">
  <meta property="og:image" content="${siteUrl}/${images.hero.webp}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#082F3A">
  <link rel="icon" href="${href(prefix, "favicon.svg")}" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;1,400&amp;family=IBM+Plex+Mono:wght@500;600&amp;family=Libre+Caslon+Display&amp;family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet">
  ${preload}
  <link rel="stylesheet" href="${href(prefix, "assets/css/styles.css?v=20260714-mobile")}">
  ${jsonLd}
</head>
<body data-page="${esc(page.navKey || "site")}">
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="site-shell">
    ${header(prefix, page.navKey)}
    <main id="main">
      ${body}
    </main>
    ${footer(prefix)}
  </div>
  <script src="${href(prefix, "assets/js/site.js?v=20260714-mobile")}" defer></script>
</body>
</html>`;
}

function header(prefix, navKey) {
  const desktop = navItems.map((item) => {
    const current = item.key === navKey ? ' aria-current="page"' : "";
    return `<a class="nav-link" href="${href(prefix, item.href)}"${current}>${esc(item.label)}</a>`;
  }).join("");

  const mobile = navItems
    .filter((item) => item.key !== "book")
    .map((item) => `<a href="${href(prefix, item.href)}">${esc(item.label)}</a>`)
    .join("");

  return `<header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${href(prefix)}" aria-label="Dauntless Maritime Services home">
        <span class="brand-mark">U</span>
        <span class="brand-text"><strong>Dauntless Maritime Services</strong><span>Currituck Sound, NC</span></span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${desktop}
        <a class="button button-primary nav-cta" href="${href(prefix, "book/")}" data-track="cta_click_book_charter">Book a charter</a>
      </nav>
      <button class="menu-button" type="button" aria-label="Open navigation menu" aria-controls="mobile-nav" aria-expanded="false">
        <span class="menu-icon" aria-hidden="true"></span>
      </button>
    </div>
    <nav class="mobile-panel" id="mobile-nav" data-open="false" aria-label="Mobile navigation">
      <div class="container">
        ${mobile}
        <a class="button button-primary" href="${href(prefix, "book/")}" data-track="cta_click_book_charter">Book a charter</a>
      </div>
    </nav>
  </header>`;
}

function footer(prefix) {
  return `<footer class="site-footer">
    <section class="footer-cta">
      <div class="container footer-cta-inner">
        <div>
          <span class="kicker">Currituck Sound / Private groups</span>
          <h2><em>Ulysses</em> can navigate the shallow local waters and drop off or pick up at privately owned or affiliated partner locations.</h2>
        </div>
        <a class="button button-primary" href="${href(prefix, "book/")}" data-track="cta_click_book_charter">Book a charter</a>
      </div>
    </section>
    <div class="container footer-main">
      <section>
        <h2>Dauntless Maritime Services LLC</h2>
        <p>Private, captain-led sightseeing and small-group charters across the Currituck Sound aboard <em>Ulysses</em>, a shallow-draft cruising trawler.</p>
        <p><strong>Scheduling and Inquiries:</strong> <a href="tel:${contactTelephone}">${contactPhone}</a><br><a href="mailto:${contactEmail}">${contactEmail}</a></p>
      </section>
      <section>
        <h3>Explore</h3>
        <ul>
          <li><a href="${href(prefix, "cruises/")}">Cruises &amp; Charters</a></li>
          <li><a href="${href(prefix, "ulysses/")}">Aboard Ulysses</a></li>
          <li><a href="${href(prefix, "pickup-map/")}">Pickup Map</a></li>
          <li><a href="${href(prefix, "safety-faq/")}">Safety &amp; FAQ</a></li>
        </ul>
      </section>
      <section>
        <h3>Policies</h3>
        <ul>
          <li>Trips depend on weather, water level, and captain approval.</li>
          <li>Dock stops and pickup points require confirmed access.</li>
          <li><a href="${href(prefix, "privacy/")}">Privacy Policy</a> / <a href="${href(prefix, "terms/")}">Charter Terms</a></li>
        </ul>
      </section>
    </div>
    <div class="container footer-bottom">
      <span>&copy; 2026 Dauntless Maritime Services LLC.</span>
      <span>Map and routes are for planning and inquiry only, not navigation.</span>
    </div>
  </footer>`;
}

function pageHero(prefix, pageTitle, eyebrow, description, actions = "", imageKey = "texture") {
  return `<section class="page-hero">
    <div class="page-hero-media" aria-hidden="true">
      ${imageTag(prefix, imageKey, "", "eager")}
    </div>
    <div class="container page-hero-inner">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="${href(prefix)}">Home</a><span>/</span><span>${esc(pageTitle)}</span></nav>
      <span class="eyebrow">${esc(eyebrow)}</span>
      <h1>${esc(pageTitle)}</h1>
      <p class="lead">${description}</p>
      ${actions}
    </div>
  </section>`;
}

function cruiseHref(prefix, cruise) {
  const target = href(prefix, cruise.slug);
  return cruise.slug.includes("?") ? target : `${target}?interest=${cruise.id}`;
}

function cruiseGrid(prefix, includeCustom = true) {
  const items = includeCustom ? cruises : cruises.filter((cruise) => cruise.id !== "custom_private_charter");
  return `<div class="route-grid">
    ${items.map((cruise) => `<article class="route-card">
      <a class="route-media" href="${cruiseHref(prefix, cruise)}" data-track="cruise_card_click" aria-label="${esc(cruise.cta)}">
        ${imageTag(prefix, cruise.imageKey)}
      </a>
      <div class="route-body">
        <span class="kicker">${esc(cruise.eyebrow)}</span>
        <h3>${esc(cruise.shortTitle)}</h3>
        <p>${esc(cruise.shortDescription)}</p>
        <div class="route-meta">
          <span>${esc(cruise.duration)}</span>
          <span>${esc(cruise.departures)}</span>
        </div>
        <a class="card-link" href="${cruiseHref(prefix, cruise)}" data-track="cruise_card_click">${esc(cruise.cta)}</a>
      </div>
    </article>`).join("")}
  </div>`;
}

function mapSection(prefix, heading = "Pickup and departure areas", intro = "A planning map for requested pickup points, service areas, destination context, and wildlife-viewing context. Exact routes are confirmed only after inquiry and captain review.") {
  const first = locations[0];
  return `<section class="section section-seafoam" aria-labelledby="pickup-map-heading">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="eyebrow">Planning map</span>
          <h2 id="pickup-map-heading">${esc(heading)}</h2>
        </div>
        <p>${esc(intro)}</p>
      </div>
      <div class="map-layout">
        <div>
          <div class="map-canvas" role="group" aria-label="USGS Topo planning map of Currituck Sound pickup areas and destination context">
            <div class="map-art" aria-hidden="true">${imageTag(prefix, "routeMap")}</div>
            ${locations.map((loc, index) => `<button class="map-pin" type="button" style="left:${loc.left}%;top:${loc.top}%;" data-id="${loc.id}" data-type="${loc.type}" data-name="${esc(loc.name)}" data-status="${esc(loc.status)}" data-description="${esc(loc.description)}" data-note="${esc(loc.note)}" data-link="${esc(loc.link || "")}" data-link-label="${esc(loc.linkLabel || "")}" aria-label="${esc(`${loc.name}: ${loc.status}`)}" aria-pressed="${index === 0 ? "true" : "false"}">
              <span class="map-pin-dot" aria-hidden="true"></span><span>${esc(loc.shortName)}</span>
            </button>`).join("")}
            <a class="map-attribution" href="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer" target="_blank" rel="noopener">Map tiles: USGS The National Map</a>
          </div>
          <div class="map-legend" aria-hidden="true">
            <span class="legend-item"><span class="legend-dot" style="background:var(--weathered-red)"></span>Pickup / service area</span>
            <span class="legend-item"><span class="legend-dot" style="background:var(--marsh-gold)"></span>Destination context</span>
            <span class="legend-item"><span class="legend-dot" style="background:var(--deep-pine)"></span>Wildlife context</span>
          </div>
        </div>
        <aside class="map-aside">
          <div class="map-detail" aria-live="polite">
            <span class="kicker">${esc(first.status)}</span>
            <h3>${esc(first.name)}</h3>
            <p>${esc(first.description)}</p>
            <p class="subtle">${esc(first.note)}</p>
            ${first.link ? `<p><a href="${esc(first.link)}" target="_blank" rel="noopener">${esc(first.linkLabel || "More information")}</a></p>` : ""}
          </div>
          <div class="note-box" style="margin-top:1rem">
            <p><strong>Map note:</strong> This illustration is for planning and inquiry only, not navigation. Exact departure location, route, pickup timing, and destination feasibility are confirmed after captain review.</p>
            <p><strong>Official charts:</strong> For actual navigation, Dauntless uses <a href="https://www.charts.noaa.gov/OnLineViewer/12207.shtml" target="_blank" rel="noopener">NOAA Chart 12207</a> (Cape Henry to Currituck Beach Light) and <a href="https://www.charts.noaa.gov/OnLineViewer/12204.shtml" target="_blank" rel="noopener">NOAA Chart 12204</a> (Currituck Beach Light to Wimble Shoals), covering the Currituck Sound from the Virginia state line south to Manteo.</p>
          </div>
        </aside>
      </div>
      <ul class="sr-only">
        ${locations.map((loc) => `<li>${esc(loc.name)}: ${esc(loc.description)} ${esc(loc.note)}${loc.link ? ` ${esc(loc.linkLabel || "More information")}: ${esc(loc.link)}` : ""}</li>`).join("")}
      </ul>
    </div>
  </section>`;
}

function partnersSection() {
  return `<section class="section" aria-labelledby="partners-heading">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="eyebrow">Affiliated partners</span>
          <h2 id="partners-heading">Partner locations for pickup and drop-off.</h2>
        </div>
        <p>These businesses are affiliated partners for passenger origin, pickup, or drop-off. Confirmation status reflects dockage and access agreements, not availability of any specific trip.</p>
      </div>
      <div class="grid grid-3">
        ${partners.map((partner) => `<article class="card cruise-card">
          <h3><a href="${esc(partner.url)}" target="_blank" rel="noopener">${esc(partner.name)}</a></h3>
          <p>${esc(partner.description)}</p>
          <span class="badge ${partner.status === "Confirmed" ? "badge-gold" : "badge-red"}">${esc(partner.status)}</span>
        </article>`).join("")}
      </div>
    </div>
  </section>`;
}

function wildlifeCallout(prefix) {
  return `<section class="section section-dark">
    <div class="container feature-panel">
      <div class="feature-copy">
        <span class="eyebrow">Responsible wildlife viewing</span>
        <h2>Distance is the rule.</h2>
        <p>Horse viewing stays patient, quiet, and offshore. Sightings are possible, not promised.</p>
        <ul class="info-list">
          <li>Horse sightings are never guaranteed.</li>
          <li>All wildlife viewing is from a respectful distance.</li>
          <li>No feeding, approaching, calling to, or disturbing wildlife.</li>
        </ul>
        <div class="section-actions">
          <a class="button button-primary" href="${href(prefix, "cruises/wildlife-carova-horses/")}" data-track="cta_click_request_charter">Ask About Horse Viewing</a>
          <a class="button button-secondary" href="https://www.corollawildhorses.com/" rel="noopener" target="_blank">Corolla Wild Horse Fund</a>
        </div>
      </div>
      <div class="feature-media wide">
        ${imageTag(prefix, "wildlife")}
      </div>
    </div>
  </section>`;
}

function faqSection(limit = faqs.length) {
  return `<section class="section" aria-labelledby="faq-heading">
    <div class="narrow">
      <div class="section-header" style="grid-template-columns:1fr">
        <div>
          <span class="eyebrow">Safety &amp; FAQ</span>
          <h2 id="faq-heading">Know before boarding.</h2>
        </div>
      </div>
      <div class="faq-list">
        ${faqs.slice(0, limit).map((item, index) => `<article class="faq-item">
          <h3>
            <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="faq-${index}">
              ${esc(item.q)}
            </button>
          </h3>
          <div class="faq-answer" id="faq-${index}" ${index === 0 ? "" : "hidden"}>
            <p>${esc(item.a)}</p>
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>`;
}

function planningLinksSection(prefix) {
  return `<section class="section section-seafoam" aria-labelledby="planning-heading">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="eyebrow">Plan your time aboard</span>
          <h2 id="planning-heading">Pickup details and answers, without the detour.</h2>
        </div>
        <p>Review dock and pickup context before booking, then check the practical questions guests ask most often.</p>
      </div>
      <div class="grid grid-2">
        <article class="card cruise-card">
          <span class="kicker">Pickup planning</span>
          <h3>Explore the pickup map.</h3>
          <p>See planned pickup areas, partner docks, and the confirmation notes for each location.</p>
          <a class="button button-dark" href="${href(prefix, "pickup-map/")}">View pickup map</a>
        </article>
        <article class="card cruise-card">
          <span class="kicker">Before you go</span>
          <h3>Review safety and FAQ.</h3>
          <p>Find weather, wildlife, access, guest, and onboard-details guidance in one place.</p>
          <a class="button button-dark" href="${href(prefix, "safety-faq/")}">Read safety and FAQ</a>
        </article>
      </div>
    </div>
  </section>`;
}

function inquirySection(prefix, source = "site") {
  return `<section class="section section-seafoam" id="inquiry" aria-labelledby="inquiry-heading">
    <div class="container form-shell">
      <div class="feature-copy">
        <span class="eyebrow">Custom charter inquiry</span>
        <h2 id="inquiry-heading">Need something beyond a standard charter?</h2>
        <p>Use this form for dock-and-dine plans, special pickup locations, wildlife-focused trips, accessibility needs, or any route that needs captain review before booking.</p>
        <div class="callout">
          <p><strong>Ready for a standard charter?</strong> Choose a 2-hour block for $300 or a 3-hour block for $450 through the live booking calendar.</p>
          <p><a href="${href(prefix, "book/")}" data-track="cta_click_book_charter">Book and pay online</a>.</p>
        </div>
      </div>
      <form class="form-card inquiry-form" data-source="${esc(source)}" data-endpoint="${inquiryEndpoint}" novalidate>
        <input type="hidden" name="_subject" value="${inquirySubject}">
        <input type="hidden" name="_template" value="table">
        <div class="honeypot">
          <label for="website">Website</label>
          <input id="website" name="website" tabindex="-1" autocomplete="off">
          <span class="error" data-error-for="website"></span>
        </div>
        <div class="form-grid">
          ${field("name", "Name", "text", true)}
          ${field("email", "Email", "email", true)}
          ${field("phone", "Phone", "tel", false)}
          <fieldset class="contact-method full">
            <legend>Preferred contact</legend>
            <label><input type="radio" name="preferredContact" value="phone" checked> <span>Phone</span></label>
            <label><input type="radio" name="preferredContact" value="email"> <span>Email</span></label>
          </fieldset>
          <div class="field">
            <label for="cruiseType">Preferred cruise type</label>
            <select id="cruiseType" name="cruiseType" aria-invalid="false" required>
              <option value="">Choose a cruise</option>
              ${cruises.map((cruise) => `<option value="${cruise.id}">${esc(cruise.shortTitle)}</option>`).join("")}
            </select>
            <span class="error" data-error-for="cruiseType"></span>
          </div>
          ${field("preferredDate", "Preferred date", "date", false)}
          <div class="field">
            <label for="preferredTime">Preferred time</label>
            <select id="preferredTime" name="preferredTime" aria-invalid="false">
              <option value="">Flexible</option>
              <option>Sunrise</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Sunset</option>
              <option>Dinner</option>
            </select>
            <span class="error" data-error-for="preferredTime"></span>
          </div>
          <div class="field">
            <label for="guests">Number of guests</label>
            <input id="guests" name="guests" type="number" min="1" max="6" inputmode="numeric" aria-invalid="false" required>
            <span class="error" data-error-for="guests"></span>
          </div>
          <div class="field">
            <label for="pickupPreference">Pickup preference</label>
            <select id="pickupPreference" name="pickupPreference" aria-invalid="false">
              <option value="">Not sure yet</option>
              ${locations.filter((loc) => loc.type !== "wildlife_context").map((loc) => `<option>${esc(loc.shortName)}</option>`).join("")}
            </select>
            <span class="error" data-error-for="pickupPreference"></span>
          </div>
          ${field("restaurantDestination", "Restaurant destination, optional", "text", false, "Coinjock, Duck, Corolla, or other")}
          <div class="field full">
            <label for="notes">Notes</label>
            <textarea id="notes" name="notes" maxlength="2000" aria-invalid="false" placeholder="Tell us about timing, lodging area, accessibility needs, restaurant plans, or wildlife interests."></textarea>
            <span class="error" data-error-for="notes"></span>
          </div>
          <label class="checkbox-field full">
            <input type="checkbox" name="weatherConsent" aria-invalid="false">
            <span>I understand trips depend on weather, dock access, water level, and captain approval.</span>
          </label>
          <span class="error full" data-error-for="weatherConsent"></span>
          <label class="checkbox-field full">
            <input type="checkbox" name="wildlifeConsent" aria-invalid="false">
            <span>I understand wildlife sightings cannot be guaranteed.</span>
          </label>
          <span class="error full" data-error-for="wildlifeConsent"></span>
        </div>
        <div class="section-actions">
          <button class="button button-dark" type="submit">Send Inquiry</button>
        </div>
        <p class="subtle" style="margin-top:0.75rem">Dauntless reviews route, dock access, weather, and guest count before confirming a charter.</p>
        <div class="form-status" role="status" aria-live="polite"></div>
      </form>
    </div>
  </section>`;
}

function inquiryCallout(prefix, interest = "") {
  const query = interest ? `?interest=${encodeURIComponent(interest)}` : "";
  return `<section class="section section-seafoam custom-inquiry-callout">
    <div class="container narrow feature-copy">
      <span class="eyebrow">Custom plans</span>
      <h2>Need something beyond a standard charter?</h2>
      <p>For dock-and-dine outings, special pickup arrangements, accessibility needs, wildlife-focused trips, or another route that needs captain review, send a custom inquiry.</p>
      <div class="section-actions"><a class="button button-dark" href="${href(prefix, `contact/${query}`)}" data-track="cta_click_custom_inquiry">Start a custom inquiry</a></div>
    </div>
  </section>`;
}

function bookingSection() {
  return `<section class="section" aria-labelledby="booking-heading">
    <div class="container">
      <div class="section-header">
        <div><span class="eyebrow">Live booking</span><h1 id="booking-heading">Book your charter.</h1></div>
        <p>Select the charter length, choose an available start time, and complete payment securely with Stripe without leaving this site.</p>
      </div>
      <div class="booking-options" aria-label="Charter options">
        <article class="booking-option"><span class="kicker">Standard charter</span><h2>2-hour block</h2><p>$300 total. A focused private outing for up to 6 guests.</p></article>
        <article class="booking-option"><span class="kicker">Standard charter</span><h2>3-hour block</h2><p>$450 total, priced at $150 per hour, for a longer passage on the sound.</p></article>
      </div>
      <div class="booking-embed" id="cal-booking" aria-label="Dauntless charter booking calendar"></div>
      <noscript><p class="callout">JavaScript is required for the on-site calendar. <a href="${twoHourCharterBookingUrl}">Book a 2-hour charter</a> or <a href="${charterBookingUrl}">book a 3-hour charter</a> directly on Cal.com.</p></noscript>
    </div>
  </section>
  <script>
    (function (C, A, L) {
      var p = function (a, ar) { a.q.push(ar); };
      var d = C.document;
      C.Cal = C.Cal || function () {
        var cal = C.Cal;
        var ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          var api = function () { p(api, arguments); };
          var namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "dauntless-booking", { origin: "https://cal.com" });
    Cal.ns["dauntless-booking"]("inline", {
      elementOrSelector: "#cal-booking",
      calLink: "dauntless-maritime-services"
    });
    Cal.ns["dauntless-booking"]("ui", {
      cssVarsPerTheme: {
        light: {
          "cal-bg": "#f7fbf7",
          "cal-bg-subtle": "#ffffff"
        }
      }
    });
  </script>`;
}

function field(name, label, type, required, placeholder = "") {
  return `<div class="field">
    <label for="${name}">${label}</label>
    <input id="${name}" name="${name}" type="${type}" ${required ? "required" : ""} ${placeholder ? `placeholder="${esc(placeholder)}"` : ""} aria-invalid="false">
    <span class="error" data-error-for="${name}"></span>
  </div>`;
}

function breadcrumbJson(path, title) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: title, item: canonical(path) }
    ]
  };
}

function touristTripJson(cruise) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${cruise.title} aboard Ulysses`,
    description: cruise.longDescription,
    touristType: cruise.bestFor,
    itinerary: [
      { "@type": "Place", name: "Currituck Sound" },
      { "@type": "Place", name: "Waterlily / Coinjock, North Carolina" },
      { "@type": "Place", name: "Duck, North Carolina" }
    ],
    provider: { "@type": "LocalBusiness", name: "Dauntless Maritime Services LLC" }
  };
}

function faqJson(limit = faqs.length) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, limit).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };
}

const pages = [
  {
    file: "index.html",
    path: "",
    navKey: "home",
    title: "Dauntless Maritime Services | Private Currituck Sound Boat Tours",
    description: "Private Currituck Sound cruises aboard Ulysses: guided sightseeing, nature views, sunset and sunrise cruises, responsible Carova horse viewing, and 6-person dock-and-dine charters.",
    preloadHero: true,
    jsonLd: [faqJson(5)],
    body: (prefix) => `
      <section class="hero" data-hero>
        <div class="hero-media">
          ${imageTag(prefix, "hero", "hero-image", "eager")}
        </div>
        <div class="container hero-content">
          <div class="hero-copy">
            <span class="eyebrow">Private charters / Currituck Sound, North Carolina</span>
            <h1>Sound tours aboard <em>Ulysses</em>.</h1>
            <p class="lead">Private, specialized, expeditionary inland voyages for up to 6 guests: observe the flora and fauna of northeastern North Carolina, travel by safe waterborne transportation (water taxi), and choose dock-and-dine trip combinations from local partner restaurants accessible by water.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${href(prefix, "book/")}" data-track="cta_click_book_charter">Book a charter</a>
              <a class="button button-secondary" href="${href(prefix, "cruises/")}" data-track="cta_click_cruises">View trips</a>
            </div>
            <dl class="hero-facts">
              <div><dt>Boat</dt><dd>Great Harbour TT35</dd></div>
              <div><dt>Guests</dt><dd>Up to 6</dd></div>
              <div><dt>Draft</dt><dd>18 inches</dd></div>
            </dl>
            <span class="coord" style="margin-top:1.1rem">36.4172&deg; N / 75.9236&deg; W &middot; Currituck Sound</span>
          </div>
        </div>
      </section>
      <section class="section" aria-labelledby="cruise-grid-heading">
        <div class="container">
          <div class="section-header">
            <div><span class="eyebrow">Trips</span><h2 id="cruise-grid-heading">Choose your adventure.</h2></div>
            <p>Curated voyages planned with the customer, with due regard to weather conditions, water levels, navigable access, and the desired theme or experience you seek.</p>
          </div>
          ${cruiseGrid(prefix)}
        </div>
      </section>
      <section class="section section-dark">
        <div class="container feature-panel">
          <div class="feature-copy">
            <span class="eyebrow">The sound</span>
            <h2>Low horizon. Shallow water. Working docks.</h2>
            <p>Currituck is not an ocean thrill ride. It is protected water, marsh grass, navigation posts, quiet wildlife, and broad sunset light.</p>
            <ul class="info-list">
              <li>Routes adjust for wind and water level.</li>
              <li>Wildlife is viewed without crowding.</li>
              <li>Dock stops require confirmation.</li>
            </ul>
          </div>
          <div class="feature-media tall">${imageTag(prefix, "birds")}</div>
        </div>
      </section>
      <section class="section" aria-labelledby="ulysses-heading">
        <div class="container feature-panel reverse">
          <div class="feature-copy">
            <span class="eyebrow">Ulysses</span>
            <h2 id="ulysses-heading">A practical trawler for protected water.</h2>
            <p>Ulysses is a Great Harbour TT35 with shallow draft, a protected cabin, and a small-group layout suited to the Currituck Sound.</p>
            <div class="spec-grid">
              <div class="spec"><strong>35 ft 8 in</strong><span>Length overall</span></div>
              <div class="spec"><strong>18 in</strong><span>Approximate draft</span></div>
              <div class="spec"><strong>Up to 6</strong><span>Private charter guests</span></div>
            </div>
            <div class="section-actions"><a class="button button-dark" href="${href(prefix, "ulysses/")}">Boat details</a></div>
          </div>
          <div class="feature-media wide">${imageTag(prefix, "sideProfile")}</div>
        </div>
      </section>
      ${planningLinksSection(prefix)}
      ${wildlifeCallout(prefix)}
      ${inquiryCallout(prefix)}
    `
  },
  {
    file: "cruises/index.html",
    path: "cruises/",
    navKey: "cruises",
    title: "Currituck Sound Cruises & Private Charters | Dauntless Maritime Services",
    description: "Compare private Currituck Sound cruise types: guided sound tours, sunrise and sunset cruises, wildlife-aware Carova horse viewing, dock-and-dine charters, and custom private trips.",
    jsonLd: [breadcrumbJson("cruises/", "Cruises & Charters")],
    body: (prefix) => `
      ${pageHero(prefix, "Cruises & Charters", "Private trips, captain-reviewed", "Choose a quiet sightseeing cruise, a golden-hour passage, a wildlife-aware outing, or a private dock-and-dine plan. All trips are for up to 6 guests and depend on weather, water level, dock access, and captain approval.", `<div class="section-actions"><a class="button button-primary" href="${href(prefix, "contact/")}" data-track="cta_click_request_charter">Request a Charter</a></div>`, "pickup")}
      <section class="section">
        <div class="container">
          ${cruiseGrid(prefix)}
        </div>
      </section>
      <section class="section section-seafoam">
        <div class="container">
          <div class="section-header">
            <div><span class="eyebrow">Compare options</span><h2>Find the right charter style.</h2></div>
            <p>Published prices and fixed schedules are intentionally held until the owner confirms rates, route timing, deposit rules, and operating season.</p>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Cruise</th><th>Best for</th><th>Typical timing</th><th>Important note</th></tr></thead>
              <tbody>
                ${cruises.map((cruise) => `<tr><td><strong>${esc(cruise.title)}</strong></td><td>${esc(cruise.bestFor.join(", "))}</td><td>${esc(cruise.duration)}</td><td>Up to 6 guests. Routes depend on weather, water level, dock access, and captain approval.</td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      ${inquiryCallout(prefix)}
    `
  },
  {
    file: "cruises/sunset-sunrise/index.html",
    path: "cruises/sunset-sunrise/",
    navKey: "cruises",
    title: "Currituck Sound Sunset & Sunrise Cruises | Dauntless Maritime Services",
    description: "Private sunrise and sunset cruises on the Currituck Sound aboard Ulysses for couples, families, anniversaries, and quiet golden-hour sightseeing.",
    jsonLd: [breadcrumbJson("cruises/sunset-sunrise/", "Sunrise & Sunset Cruises"), touristTripJson(cruises[2])],
    body: (prefix) => `
      ${pageHero(prefix, "Sunrise & Sunset Cruises", "Golden-hour private charters", "A calm private cruise timed around the sound's best light, planned for couples, anniversaries, family photos, and relaxed evenings on protected water.", `<div class="section-actions"><a class="button button-primary" href="${href(prefix, "contact/?interest=sunrise_sunset")}" data-track="cta_click_request_charter">Plan a Sunset Cruise</a></div>`, "sunsetGuests")}
      <section class="section">
        <div class="container feature-panel reverse">
          <div class="feature-copy">
            <span class="eyebrow">The quiet way to end the day</span>
            <h2>Golden light, low marsh, and private space aboard <em>Ulysses</em>.</h2>
            <p>Sunrise and sunset charters are shaped around light, water, and wind. The goal is not speed or noise. It is a private passage with open horizons, soundside air, and room to take in the moment.</p>
            <ul class="info-list">
              <li>Private charters for up to 6 guests.</li>
              <li>Sunrise, sunset, or flexible golden-hour timing by review.</li>
              <li>Visibility and route depend on weather and cloud cover.</li>
            </ul>
          </div>
          <div class="feature-media wide">${imageTag(prefix, "sunrise")}</div>
        </div>
      </section>
      ${inquiryCallout(prefix, "sunrise_sunset")}
    `
  },
  {
    file: "cruises/wildlife-carova-horses/index.html",
    path: "cruises/wildlife-carova-horses/",
    navKey: "cruises",
    title: "Carova Horse Viewing from the Water | Dauntless Maritime Services",
    description: "A responsible wildlife-aware Currituck Sound cruise with the possibility of seeing Corolla and Carova horses from the water. Private charters for up to 6 guests.",
    jsonLd: [breadcrumbJson("cruises/wildlife-carova-horses/", "Wildlife & Carova Horse Viewing"), touristTripJson(cruises[1])],
    body: (prefix) => `
      ${pageHero(prefix, "Wildlife & Carova Horse Viewing", "Respectful distance, realistic expectations", "A wildlife-aware cruise with the possibility of seeing the Corolla and Carova horses from the water. The experience is about the sound, habitat, and patient observation - not guaranteed encounters.", `<div class="section-actions"><a class="button button-primary" href="${href(prefix, "contact/?interest=carova_horse_viewing")}" data-track="cta_click_request_charter">Ask About Horse Viewing</a></div>`, "wildlife")}
      <section class="section">
        <div class="container feature-panel">
          <div class="feature-copy">
            <span class="eyebrow">Wildlife responsibility</span>
            <h2>View from the water without intruding on the habitat.</h2>
            <p>The wild horses are part of the northern Outer Banks' living heritage. Dauntless treats viewing as a privilege and keeps the language, imagery, and route planning grounded in responsible wildlife practice.</p>
            <div class="callout">
              <p><strong>Required guest expectation:</strong> Horse sightings are never guaranteed. Guests must not feed, approach, call to, crowd, or disturb wildlife. All viewing is from a respectful distance.</p>
            </div>
            <div class="section-actions">
              <a class="button button-dark" href="https://www.corollawildhorses.com/corolla-wild-horses-faqs/" target="_blank" rel="noopener">Wild Horse FAQ</a>
            </div>
          </div>
          <div class="feature-media wide">${imageTag(prefix, "wildlife")}</div>
        </div>
      </section>
      ${mapSection(prefix, "Wildlife-viewing context area", "Carova and the northern Currituck Banks are shown as context only. Conditions, distance, wildlife safety, and captain approval control any route discussion.")}
      ${inquiryCallout(prefix, "carova_horse_viewing")}
    `
  },
  {
    file: "cruises/dock-and-dine/index.html",
    path: "cruises/dock-and-dine/",
    navKey: "cruises",
    title: "Dock-and-Dine Boat Charters in Duck, Coinjock & Currituck | Dauntless",
    description: "Private dock-and-dine restaurant charters for up to 6 guests, subject to dock access, restaurant timing, route feasibility, weather, and captain approval.",
    jsonLd: [breadcrumbJson("cruises/dock-and-dine/", "Dock-and-Dine Charters"), touristTripJson(cruises[3])],
    body: (prefix) => `
      ${pageHero(prefix, "Dock-and-Dine Restaurant Charters", "Dinner by water", "Make the trip to dinner part of the evening. Dock-and-dine charters are custom private outings for up to 6 guests when restaurant dockage, weather, timing, and routing allow.", `<div class="section-actions"><a class="button button-primary" href="${href(prefix, "contact/?interest=dock_and_dine")}" data-track="cta_click_request_charter">Plan a Dock-and-Dine Charter</a></div>`, "dock")}
      <section class="section">
        <div class="container feature-panel reverse">
          <div class="feature-copy">
            <span class="eyebrow">Coordinated, not improvised</span>
            <h2>Restaurant trips need confirmation from every side of the dock.</h2>
            <p>A dock-and-dine charter depends on restaurant reservations, tie-up permission, water level, arrival windows, weather, route timing, and the captain's judgment. The request form captures the plan so Dauntless can review feasibility before confirming.</p>
            <ul class="info-list">
              <li>Up to 6 guests aboard <em>Ulysses</em>.</li>
              <li>Duck, Coinjock, Corolla, and other soundside destinations by confirmation.</li>
              <li>Restaurant reservation and dock timing are coordinated before confirmation.</li>
            </ul>
          </div>
          <div class="feature-media wide">${imageTag(prefix, "dock")}</div>
        </div>
      </section>
      <section class="section section-seafoam">
        <div class="container">
          <div class="section-header">
            <div><span class="eyebrow">Destination context</span><h2>Possible dinner areas require dock review.</h2></div>
            <p>Specific restaurants should not be advertised as routable until tie-up permission and timing are confirmed.</p>
          </div>
          <div class="grid grid-3">
            ${["Duck soundside restaurants", "Coinjock waterfront dining", "Corolla destination context"].map((name) => `<article class="card cruise-card"><h3>${name}</h3><p>Potential dock-and-dine context. Exact dock access, restaurant timing, and route feasibility must be reviewed before the trip is accepted.</p><span class="badge badge-red">Needs confirmation</span></article>`).join("")}
          </div>
        </div>
      </section>
      ${inquiryCallout(prefix, "dock_and_dine")}
    `
  },
  {
    file: "ulysses/index.html",
    path: "ulysses/",
    navKey: "ulysses",
    title: "Aboard Ulysses, a Great Harbour TT35 | Dauntless Maritime Services",
    description: "Learn about Ulysses, the Great Harbour TT35 shallow-draft cruising motor trawler used for private Currituck Sound cruises and small-group charters.",
    jsonLd: [breadcrumbJson("ulysses/", "Aboard Ulysses")],
    body: (prefix) => `
      ${pageHero(prefix, "Aboard Ulysses", "Great Harbour TT35", "<em>Ulysses</em> is a shallow-draft cruising motor trawler suited to protected waters, quiet passages, and comfortable private charters across the Currituck Sound.", `<div class="section-actions"><a class="button button-primary" href="${href(prefix, "contact/")}" data-track="cta_click_request_charter">Request a Charter</a></div>`, "sideProfile")}
      <section class="section">
        <div class="container feature-panel">
          <div class="feature-copy">
            <span class="eyebrow">Boat benefits</span>
            <h2>Practical capability matters more than flash.</h2>
            <p>The Great Harbour TT35 is known for shallow-water access, a protected cabin, easy boarding at varied dock heights, efficient outboard power, and comfortable small-group travel. Dauntless translates those traits into a calm sightseeing experience rather than a luxury-yacht promise.</p>
            <div class="spec-grid">
              <div class="spec"><strong>35 ft 8 in</strong><span>Length overall</span></div>
              <div class="spec"><strong>10 ft 4 in</strong><span>Beam</span></div>
              <div class="spec"><strong>18 in</strong><span>Approximate draft</span></div>
              <div class="spec"><strong>Twin 60 hp</strong><span>Standard outboard power</span></div>
              <div class="spec"><strong>8-16 mph</strong><span>Typical cruising range</span></div>
              <div class="spec"><strong>Up to 6</strong><span>Private charter guests</span></div>
            </div>
            <div class="section-actions"><a class="button button-secondary" href="https://www.greatharbourtrawlers.com/tt35.html" target="_blank" rel="noopener">Great Harbour TT35 specifications</a></div>
          </div>
          <div class="feature-media wide">${imageTag(prefix, "sideProfile")}</div>
        </div>
      </section>
      <section class="section section-dark">
        <div class="container feature-panel reverse">
          <div class="feature-copy">
            <span class="eyebrow">Comfort and safety</span>
            <h2>A protected, steady platform for seeing the sound.</h2>
            <ul class="info-list">
              <li>Shallow-draft access for soundside water, subject to conditions.</li>
              <li>Protected cabin and small-group seating for a personal feel.</li>
              <li>Twin outboard redundancy and weather-aware routing.</li>
              <li>Easy boarding is subject to dock height, water level, and guest mobility.</li>
            </ul>
          </div>
          <div class="feature-media wide">${imageTag(prefix, "cabin")}</div>
        </div>
      </section>
    `
  },
  {
    file: "pickup-map/index.html",
    path: "pickup-map/",
    navKey: "pickup-map",
    title: "Pickup & Departure Map | Dauntless Maritime Services",
    description: "View requested pickup areas, service areas, destination context, and planning notes for private Currituck Sound charters aboard Ulysses.",
    jsonLd: [breadcrumbJson("pickup-map/", "Pickup & Departure Map")],
    body: (prefix) => `
      ${pageHero(prefix, "Pickup & Departure Map", "For inquiry planning only", "Requested pickup points and route ideas are shown to make planning easier. Exact departure details are confirmed only after dock permissions, weather, water level, and captain approval are reviewed.", "", "pickup")}
      ${mapSection(prefix)}
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div><span class="eyebrow">Location details</span><h2>Choose your voyage, pickup, and drop-off location with the captain; plan your trip together.</h2></div>
            <p>Publishing a town or restaurant area is not the same as confirming a legal pickup dock. The site keeps those distinctions visible.</p>
          </div>
          <ul class="location-list grid grid-2">
            ${locations.map((loc) => `<li><strong>${esc(loc.name)}</strong><span>${esc(loc.coordinates)} - ${esc(loc.status)}. ${esc(loc.note)}</span>${loc.link ? ` <a href="${esc(loc.link)}" target="_blank" rel="noopener">${esc(loc.linkLabel || "More information")}</a>` : ""}</li>`).join("")}
          </ul>
        </div>
      </section>
      ${partnersSection(prefix)}
    `
  },
  {
    file: "safety-faq/index.html",
    path: "safety-faq/",
    navKey: "safety-faq",
    title: "Safety & FAQ | Dauntless Maritime Services",
    description: "Passenger expectations, weather policy, wildlife responsibility, dock access notes, and route review details for Currituck Sound charters.",
    jsonLd: [breadcrumbJson("safety-faq/", "Safety & FAQ"), faqJson()],
    body: (prefix) => `
      ${pageHero(prefix, "Safety & FAQ", "Clear before confirmed", "Private charters depend on weather, water level, dock access, route feasibility, and captain approval. Review the practical rules before requesting a trip.", "", "safety")}
      <section class="section">
        <div class="container feature-panel">
          <div class="feature-copy">
            <span class="eyebrow">Weather policy preview</span>
            <h2>Conditions decide the day.</h2>
            <p>Currituck Sound conditions can change with wind, water level, storms, and visibility. Dauntless confirms each trip based on the captain's judgment and guest safety. If conditions are not suitable, the charter may be adjusted or rescheduled under the final booking terms.</p>
            <div class="callout">
              <p><strong>Before booking:</strong> review cancellation terms, child PFD requirements, pet requests, amenities, and accessibility needs.</p>
            </div>
          </div>
          <div class="feature-media wide">${imageTag(prefix, "safety")}</div>
        </div>
      </section>
      ${faqSection()}
    `
  },
  {
    file: "about/index.html",
    path: "about/",
    navKey: "about",
    title: "About Dauntless Maritime Services | Currituck Sound Charters",
    description: "Dauntless Maritime Services offers private, captain-led sightseeing and small-group charters across the Currituck Sound aboard Ulysses.",
    jsonLd: [breadcrumbJson("about/", "About Dauntless")],
    body: (prefix) => `
      ${pageHero(prefix, "About Dauntless", "Local waters, quiet confidence", "Dauntless Maritime Services is built around private, captain-led experiences on the Currituck Sound: shallow water, marsh grass, working docks, sunrise and sunset light, and responsible wildlife viewing.", "", "birds")}
      <section class="section">
        <div class="container feature-panel reverse">
          <div class="feature-copy">
            <span class="eyebrow">Positioning</span>
            <h2>A refined soundside charter, not a generic boat ride.</h2>
            <p>Dauntless Maritime Services LLC operates scenic, expeditionary inland voyages of the main Currituck Sound and nearby tributaries, such as the Northwest River and Tulls Bay, including the Intracoastal Waterway of northeastern North Carolina through Coinjock Bay and Coinjock, and areas in the northern Albemarle Sound, Kitty Hawk Bay, and Roanoke Sound, aboard <em>Ulysses</em>, a shallow-draft cruising trawler built for quiet access, comfort, and soundside discovery.</p>
            <ul class="info-list">
              <li>Capable, not flashy.</li>
              <li>Literary maritime character through <em>Ulysses</em>.</li>
              <li>Responsible wildlife viewing without overpromises.</li>
              <li>Small-group comfort for up to 6 guests.</li>
            </ul>
          </div>
          <div class="feature-media wide">${imageTag(prefix, "hero")}</div>
        </div>
      </section>
      <section class="section section-seafoam">
        <div class="container">
          <div class="section-header">
            <div><span class="eyebrow">Operating principles</span><h2>Simple rules on shallow water.</h2></div>
            <p>The public site avoids unconfirmed claims. The experience itself is built around route review, distance from wildlife, and calm small-group handling.</p>
          </div>
          <div class="grid grid-3">
            <article class="card cruise-card"><h3>Conditions first</h3><p>Wind, water level, storms, visibility, and dock state shape every trip.</p><span class="badge badge-gold">Captain review</span></article>
            <article class="card cruise-card"><h3>Wildlife at distance</h3><p>Horse and bird viewing stays observational, quiet, and never guaranteed.</p><span class="badge badge-gold">Responsible viewing</span></article>
            <article class="card cruise-card"><h3>Confirmed docks only</h3><p>Pickup points and dinner stops require permission and timing before confirmation.</p><span class="badge badge-gold">Route planning</span></article>
          </div>
        </div>
      </section>
    `
  },
  {
    file: "book/index.html",
    path: "book/",
    navKey: "book",
    title: "Book a Charter | Dauntless Maritime Services",
    description: "Book a 2-hour or 3-hour private Currituck Sound charter aboard Ulysses and complete secure payment online.",
    jsonLd: [breadcrumbJson("book/", "Book a Charter")],
    body: (prefix) => `
      ${bookingSection()}
      <section class="section section-seafoam">
        <div class="container narrow feature-copy">
          <span class="eyebrow">Special plans</span>
          <h2>Planning a custom route?</h2>
          <p>For dock-and-dine outings, special pickup arrangements, wildlife-focused trips, or other plans that need captain review, use the custom inquiry form.</p>
          <div class="section-actions"><a class="button button-dark" href="${href(prefix, "contact/")}" data-track="cta_click_custom_inquiry">Start a custom inquiry</a></div>
        </div>
      </section>
    `
  },
  {
    file: "contact/index.html",
    path: "contact/",
    navKey: "contact",
    title: "Custom Charter Inquiry | Dauntless Maritime Services",
    description: "Ask Dauntless Maritime Services about a custom Currituck Sound charter, special route, dock-and-dine plan, or pickup arrangement.",
    jsonLd: [breadcrumbJson("contact/", "Custom Charter Inquiry")],
    body: (prefix) => `
      ${pageHero(prefix, "Custom Charter Inquiry", "Special routes and logistics", "Use this form for dock-and-dine plans, special pickup needs, wildlife-focused trips, or other itineraries that need captain review. Standard 2-hour and 3-hour charters can be booked and paid for online.", `<div class="section-actions"><a class="button button-primary" href="${href(prefix, "book/")}" data-track="cta_click_book_charter">Book and pay online</a></div>`, "pickup")}
      ${inquirySection(prefix, "contact")}
      <section class="section">
        <div class="container grid grid-3">
          <article class="card cruise-card"><span class="kicker">Direct contact</span><h3>Scheduling and Inquiries</h3><p>Call or text <a href="tel:${contactTelephone}">${contactPhone}</a>, or email <a href="mailto:${contactEmail}">${contactEmail}</a>.</p></article>
          <article class="card cruise-card"><span class="kicker">Inquiry flow</span><h3>Route request</h3><p>The form captures trip goals before any charter is accepted.</p></article>
          <article class="card cruise-card"><span class="kicker">Response flow</span><h3>Captain review</h3><p>Every request is reviewed for route, weather, water level, dock access, and guest safety before confirmation.</p></article>
        </div>
      </section>
    `
  },
  {
    file: "privacy/index.html",
    path: "privacy/",
    navKey: "privacy",
    title: "Privacy Policy | Dauntless Maritime Services",
    description: "Privacy policy for Dauntless Maritime Services charter inquiries, analytics, and guest data handling.",
    jsonLd: [breadcrumbJson("privacy/", "Privacy Policy")],
    body: (prefix) => `
      ${pageHero(prefix, "Privacy Policy", "Inquiry data", "This policy explains how charter inquiry details are used to respond, review routes, and coordinate guests.", "", "texture")}
      <section class="section">
        <div class="narrow feature-copy">
          <h2>Information collected</h2>
          <p>The inquiry form may collect name, email, phone, preferred cruise type, preferred date and time, guest count, pickup preference, restaurant destination, notes, and consent acknowledgments.</p>
          <h2>How information is used</h2>
          <p>Inquiry details are used to respond to charter requests, review route feasibility, coordinate timing, and follow up with guests. No payment information is collected through this static website.</p>
          <h2>Third-party services</h2>
          <p>Charter inquiry details are delivered through FormSubmit to Dauntless' designated inquiry inbox. Cal.com and Stripe handle online charter scheduling and payments under their respective privacy terms.</p>
          <h2>Data deletion requests</h2>
          <p>Use the business contact channel listed on the site for privacy questions or deletion requests.</p>
        </div>
      </section>
    `
  },
  {
    file: "terms/index.html",
    path: "terms/",
    navKey: "terms",
    title: "Charter Terms | Dauntless Maritime Services",
    description: "Charter terms for weather dependency, passenger capacity, dock access, cancellation policy, wildlife rules, and captain approval.",
    jsonLd: [breadcrumbJson("terms/", "Charter Terms")],
    body: (prefix) => `
      ${pageHero(prefix, "Charter Terms", "Captain-reviewed routes", "All charters depend on weather, water level, guest count, dock access, route feasibility, and final captain approval.", "", "texture")}
      <section class="section">
        <div class="narrow feature-copy">
          <h2>Captain approval</h2>
          <p>All routes, pickup locations, destination stops, and charter timing are subject to captain approval.</p>
          <h2>Weather and water conditions</h2>
          <p>Trips may be adjusted, rescheduled, or declined due to wind, water level, storms, visibility, unsafe dock conditions, or other operational concerns.</p>
          <h2>Passenger capacity</h2>
          <p>The site describes private charters for up to 6 guests. Passenger, child, PFD, and boarding rules are confirmed before booking.</p>
          <h2>Wildlife viewing</h2>
          <p>Wildlife sightings are never guaranteed. Guests must not feed, approach, call to, crowd, or disturb wildlife.</p>
          <h2>Dock access and restaurant stops</h2>
          <p>Pickup points, restaurant stops, and dock-and-dine routes require dock permission, restaurant timing, route feasibility, and captain approval.</p>
          <h2>Payments, deposits, cancellation, and refunds</h2>
          <p>Rates, deposits, payment method, cancellation policy, refund policy, and waiver language are provided before a charter is accepted.</p>
        </div>
      </section>
    `
  }
];

for (const page of pages) {
  mkdirSync(dirname(page.file), { recursive: true });
  writeFileSync(page.file, layout(page));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${canonical(page.path || "")}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
writeFileSync("sitemap.xml", sitemap);

writeFileSync("robots.txt", `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`);

writeFileSync(".nojekyll", "");
