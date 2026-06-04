# Dauntless Maritime Services LLC — Website System Design Document

**Prepared for:** Dauntless Maritime Services LLC  
**Project:** Public website for guided Currituck Sound tours, nature cruises, sunrise/sunset cruises, and 6-passenger restaurant charters  
**Boat:** *Ulysses*, Great Harbour TT35 ultra-shallow-draft cruising motor trawler  
**Version:** 1.0  
**Date:** 2026-05-30  
**Primary build audience:** Codex agents, frontend engineers, brand designers, SEO implementers, and content editors

---

## 1. Executive Brief

Dauntless Maritime Services LLC needs a polished local-service website that makes private boat tours feel safe, memorable, intimate, and region-specific rather than generic. The core product is small-group guided nautical sightseeing on the Currituck Sound, with nature views, Carova wild-horse viewing from the water, sunrise and sunset cruises, and 6-person dock-and-dine charters to waterfront restaurants in Duck, Corolla, Coinjock, and surrounding areas.

The website should position Dauntless as a refined, highly local, captain-led maritime experience: part Outer Banks nature excursion, part private charter, part quiet literary voyage aboard *Ulysses*. The design should avoid stock “beach vacation” tropes. It should feel like a shallow-water expedition brand built around sound water, marsh grass, working docks, red navigation markers, quiet sunrise light, polished brass, soundside boardwalks, and a capable trawler that can reach places larger vessels cannot.

The site should launch as a high-conversion informational and inquiry funnel first. Direct booking and payment can be added later once rates, operational schedule, cancellation policy, insurance language, passenger waivers, pickup permissions, captain credentials, and dock agreements are confirmed.

---

## 2. Source-Informed Operating Context

### 2.1 Region and experience

Currituck Sound is a shallow, wildlife-rich body of water separating the mainland from the northern Outer Banks. Public tourism sources describe it as a nature-oriented area with shallow open water, maritime forest edges, marshy islands, fishing, and wildlife. This matters because the website should sell the sound itself, not just “a boat ride.”

### 2.2 Boat facts for accurate copy and image generation

The official Great Harbour TT35 specifications list the model as approximately:

| Attribute | Specification |
|---|---:|
| Length overall | 35 ft 8 in |
| LWL | 34 ft 1 in |
| Beam | 10 ft 4 in |
| Draft | 18 in |
| Dry weight | 7,000 lb |
| Fuel | 128 gal |
| Water | 50 gal |
| Standard power | Twin 60 hp 4-stroke outboards |
| Cruising speed | 8-16 mph |
| Range | 500-1,000 miles |

The same manufacturer materials emphasize shallow draft, trailerability, ramp launch/retrieval, easy boarding at varied dock heights, natural light/ventilation, and efficient shallow-water access. The site should translate those facts into visitor benefits: stable small-group comfort, sound-friendly shallow-water access, easy boarding, calm sightseeing pace, and “private enough to feel personal.”

### 2.3 Wildlife responsibility

The Corolla Wild Horse Fund and Currituck County ordinance information state that visitors must not feed wild horses or intentionally come within 50 feet of them. The website should make responsible viewing a brand value. Copy should say “view from a respectful distance” rather than promising close encounters. All AI image prompts should depict horses at a distance, never fed, touched, crowded, chased, or surrounded.

### 2.4 Passenger and safety context

Dauntless is describing 6-person charters. In U.S. charter context, operators commonly refer to “OUPV” or “six-pack” credentials for uninspected passenger vessels carrying up to six paying passengers. The website should not make legal claims until the owner confirms the actual credential, insurance, inspection/documentation status, and operating limits. It should include a build-time content placeholder for “Captain credentials and safety practices.”

### 2.5 Location context

Initial pickup/departure points requested by the business:

| Location | Suggested map role | Approximate coordinates | Source confidence | Implementation note |
|---|---|---:|---|---|
| Outer Banks West / Currituck Sound KOA Holiday, Waterlily/Coinjock | Primary pickup / departure | 36.417178, -75.923594 | High for campground point | Confirm exact dock/launch pickup permission with KOA before publishing a navigable departure pin. |
| Duck, NC | Possible pickup / dock-and-dine / tour zone | 36.169722, -75.755278 | Medium for town center | Use a town-level marker until a legal/public dock is confirmed. |
| Grandy, NC | Possible pickup / mainland service area | 36.241667, -75.878889 | Medium for community center | Use as service area marker until exact dock is confirmed. |
| Manteo, NC | Possible pickup / extended service area | 35.908056, -75.675556 | Medium for town center | Manteo is not on Currituck Sound; treat as an extended/seasonal/special request zone until captain validates routing and timing. |
| Carova Beach / northern Currituck Banks | Wildlife-viewing context area | 36.5454, -75.8722 | Medium for community area | Do not promise horse sightings; use “opportunity to view” and wildlife-responsible language. |

---

## 3. Business Goals

1. Convert qualified visitors into charter inquiries.
2. Establish Dauntless as safe, local, professional, and conservation-minded.
3. Explain the value of the *Ulysses* and its shallow-draft capability without overwhelming tourists with boat specs.
4. Make pickup points and route concepts easy to understand through a map.
5. Give search engines structured local tourism information.
6. Support later expansion into online booking, gift cards, seasonal schedules, and direct payment.

---

## 4. Target Audiences

### 4.1 Primary visitors

**Vacationing families and small groups**  
Needs: safe boat, easy logistics, beautiful photos, clear pricing, kid-friendly expectations, simple booking.

**Couples and adults planning sunset/sunrise outings**  
Needs: romance, calm water, privacy, scenic timing, simple “what to bring” guidance.

**Visitors interested in Corolla/Carova wild horses**  
Needs: a respectful viewing experience, wildlife context, realistic expectations, no overpromises.

**Dinner groups seeking dock-and-dine transport**  
Needs: pickup/dropoff clarity, capacity, restaurant coordination, timing, weather backup.

**Local residents / repeat seasonal visitors**  
Needs: private charters, custom timing, local knowledge, easy communication.

### 4.2 Secondary users

- Hotel/campground concierges
- Restaurant partners
- Wedding/event planners
- Tourism boards and local referral partners
- Search engines and AI assistants

---

## 5. Positioning and Brand Strategy

### 5.1 Recommended positioning statement

**Dauntless Maritime Services offers private, captain-led sightseeing and small-group charters across the Currituck Sound aboard *Ulysses*, a shallow-draft cruising trawler built for quiet access, comfort, and soundside discovery.**

### 5.2 Brand pillars

1. **Capable, not flashy**: The TT35 is the hero because it is practical, shallow-draft, and comfortable.
2. **Literary maritime character**: *Ulysses* links the experience to exploration, endurance, and curiosity.
3. **Responsible wildlife viewing**: The brand should never imply intrusion into sensitive habitats.
4. **Local sound knowledge**: The captain and the Currituck Sound are the differentiators.
5. **Small-group comfort**: Six passengers creates a premium, personal experience.

### 5.3 Tone of voice

Use language that feels calm, knowledgeable, and quietly adventurous.

Preferred words: soundside, shallow water, marsh grass, golden hour, quiet passage, captain-led, small group, private charter, wildlife-aware, local waters, aboard *Ulysses*.

Avoid: luxury yacht, party boat, guaranteed horses, cheap boat ride, adrenaline, booze cruise, extreme adventure, overused beach clichés.

### 5.4 Tagline options

- **Private soundside cruises aboard *Ulysses*.**
- **Currituck Sound, seen the quiet way.**
- **Small-group charters across shallow water and golden light.**
- **Sunrise, sunset, wildlife, and dockside dinners on the Currituck Sound.**
- **To seek the sound. To find the quiet.**

---

## 6. Visual Identity Direction

### 6.1 Design thesis

The site should feel like a coastal chart room opened onto the sound at golden hour. Use deep navy, oyster-white backgrounds, marsh-gold accents, restrained red signal details, and natural textures. The aesthetic should sit between “maritime field guide,” “boutique charter,” and “Outer Banks soundside heritage.”

### 6.2 Color system

Use a restrained, high-contrast palette. The palette is designed for a premium, place-specific feeling and accessible contrast.

| Token | Hex | Use |
|---|---:|---|
| `--sound-navy` | `#082F3A` | Primary background, hero overlays, footer |
| `--deep-pine` | `#133B36` | Secondary dark, nature panels |
| `--oyster` | `#F6F1E7` | Primary page background |
| `--fog` | `#D9DFD8` | Section dividers, subdued cards |
| `--seafoam` | `#A8C7BE` | Soft callouts, map water tint |
| `--tide-blue` | `#2F6F7E` | Links, secondary buttons, icons |
| `--marsh-gold` | `#C6964A` | CTA accent, sunrise/sunset highlights |
| `--weathered-red` | `#8B2E2B` | Boat stripe-inspired accent, warnings, map pins |
| `--charcoal` | `#172024` | Body text |
| `--foam` | `#FFFFFF` | Cards and navigation surfaces |

Recommended contrast pairs:

| Foreground | Background | Approx. contrast |
|---|---|---:|
| Oyster | Sound Navy | 12.62:1 |
| Sound Navy | Oyster | 12.62:1 |
| Marsh Gold | Sound Navy | 5.32:1 |
| Oyster | Weathered Red | 7.39:1 |
| Charcoal | Oyster | 14.71:1 |
| Oyster | Deep Pine | 10.93:1 |
| Sound Navy | Seafoam | 7.83:1 |

Do not use marsh-gold text on white for body copy. Use marsh-gold as an accent line, icon fill, button background with sound-navy text, or heading underline.

### 6.3 Typography

Use a high-trust editorial pairing:

- **Display / headings:** `Fraunces`, `Cormorant Garamond`, or `Newsreader` for literary maritime character.
- **Body / UI:** `Inter`, `Source Sans 3`, or `Public Sans` for legibility.
- **Numerals / small labels:** `IBM Plex Mono` or `JetBrains Mono` sparingly for coordinates, route specs, and time blocks.

Typographic rules:

- Hero H1: 56-76 px desktop, 42-48 px tablet, 34-40 px mobile.
- Body: 17-19 px, line-height 1.55-1.7.
- Labels: uppercase, 0.08em letter spacing, never overused.
- Avoid script fonts and nautical novelty fonts.

### 6.4 Layout language

- Use broad horizontal sections that mimic the calm plane of the sound.
- Use thin chart-line dividers and subtle coordinate labels.
- Use cards with slightly rounded corners, not bubbly SaaS cards.
- Use map and route modules as visual anchors.
- Use image crops that hold empty sky/water negative space.
- Reserve high-contrast CTAs for booking actions only.

### 6.5 Graphic motifs

- Nautical chart contour lines
- Sound-depth numbers used subtly as texture
- Compass ticks, but never cartoon compass roses
- Red/green navigation marker dots
- Brass or weathered metal micro-accents
- Marsh grass silhouettes
- A thin “wake line” divider between sections
- Coordinates as captions

---

## 7. Information Architecture

### 7.1 Top navigation

Desktop nav:

1. Cruises
2. *Ulysses*
3. Pickup Map
4. Safety & FAQ
5. About
6. Contact / Book

Mobile nav:

- Menu button
- Sticky bottom “Request Charter” CTA optional after scroll

### 7.2 Recommended pages

| Route | Page title | Purpose |
|---|---|---|
| `/` | Dauntless Maritime Services | High-conversion overview and inquiry funnel |
| `/cruises` | Cruises & Charters | Explain all cruise types and private charter options |
| `/cruises/sunset-sunrise` | Sunrise & Sunset Cruises | Dedicated golden-hour landing page |
| `/cruises/wildlife-carova-horses` | Wildlife & Carova Horse Viewing | Responsible wildlife viewing page |
| `/cruises/dock-and-dine` | Dock-and-Dine Restaurant Charters | Explain 6-person restaurant charters |
| `/ulysses` | About *Ulysses* | Boat page with TT35 benefits and comfort details |
| `/pickup-map` | Pickup & Departure Map | Map of requested points and service areas |
| `/safety-faq` | Safety & FAQ | Passenger expectations, weather policy, accessibility, what to bring |
| `/about` | About Dauntless | Captain, local knowledge, story, credentials placeholder |
| `/contact` | Request a Charter | Lead form, phone/email, inquiry CTA |
| `/privacy` | Privacy Policy | Required if forms/analytics are used |
| `/terms` | Charter Terms | Placeholder until legal review |

### 7.3 Single-page MVP option

If budget is tight, launch with a single-page site using anchors:

- Hero
- Cruise types
- Aboard *Ulysses*
- Pickup map
- Wildlife responsibility
- FAQ
- Request charter form
- Footer

Build the component system so the single-page version can later expand into multi-page routes.

---

## 8. Homepage Specification

### 8.1 Hero section

**Goal:** Immediately communicate private, local, scenic, and safe.

Required content:

- H1: “Private Currituck Sound cruises aboard *Ulysses*.”
- Subhead: “Guided sightseeing, nature views, sunrise and sunset cruises, Carova horse viewing from the water, and small-group restaurant charters across Duck, Grandy, Coinjock, and the northern Outer Banks.”
- CTAs:
  - Primary: “Request a Charter”
  - Secondary: “View Pickup Map”
- Trust line: “Private charters for up to 6 guests. Weather-aware scheduling. Responsible wildlife viewing.”
- Background: AI-generated or licensed image of *Ulysses* on the Currituck Sound at golden hour.

Hero UX rules:

- Text must be readable over image through a navy gradient overlay.
- Do not place text over busy boat details.
- Include a small coordinate caption, e.g. “Currituck Sound / 36.4172, -75.9236.”

### 8.2 Cruise cards section

Cards:

1. Guided Sound Tours
2. Carova Horse Viewing from the Water
3. Scenic Sunrise & Sunset Cruises
4. Dock-and-Dine Charters
5. Custom Private Charters

Each card includes:

- 1-line outcome
- approximate guest capacity
- “Best for” line
- CTA to relevant detail page or form with preselected interest

### 8.3 “Why the Sound” section

Explain why Currituck Sound is unique: shallow water, marsh edges, calm scenic views, waterfowl history, soundside sunsets, mainland and barrier-island relationship.

### 8.4 “Aboard Ulysses” section

Translate boat specs into benefits:

- Shallow-draft access
- Comfortable protected cabin
- Small-group seating
- Stable sightseeing pace
- Easy boarding subject to dock conditions
- Twin outboard redundancy

Do not overstate luxury. Say “comfortable cruising trawler” rather than “luxury yacht.”

### 8.5 Pickup map preview

Show markers for:

- KOA Outer Banks West / Waterlily / Coinjock
- Duck
- Grandy
- Manteo
- Carova / northern Currituck Banks viewing context

Map disclaimer:

> Pickup points and routes are subject to dock access, weather, wind tide, captain approval, and partner permissions. Exact departure details are confirmed after inquiry.

### 8.6 Wildlife responsibility module

Include:

- “Horse sightings are never guaranteed.”
- “All wildlife viewing is from a respectful distance.”
- “No feeding, approaching, or disturbing wildlife.”
- Link to Corolla Wild Horse Fund.

### 8.7 Inquiry form

Fields:

- Name
- Email
- Phone
- Preferred cruise type
- Preferred date
- Preferred time: sunrise / morning / afternoon / sunset / dinner
- Number of guests, max 6
- Pickup preference
- Restaurant destination, optional
- Notes
- Checkbox: “I understand trips depend on weather, dock access, and captain approval.”
- Checkbox: “I understand wildlife sightings cannot be guaranteed.”

After submission:

- Show confirmation message.
- Send email to business.
- Send auto-reply to guest.
- Log lead in Airtable/Notion/Google Sheet only if privacy policy covers it.

---

## 9. Cruise Product Content Model

Use this model for every cruise page.

```ts
export type CruiseType =
  | 'guided_sound_tour'
  | 'carova_horse_viewing'
  | 'sunrise_sunset'
  | 'dock_and_dine'
  | 'custom_private_charter';

export interface Cruise {
  id: CruiseType;
  title: string;
  slug: string;
  eyebrow: string;
  shortDescription: string;
  longDescription: string;
  bestFor: string[];
  typicalDurationMinutes?: number;
  maxGuests: 6;
  departureOptions: LocationId[];
  destinationOptions?: LocationId[];
  seasonalNotes?: string;
  wildlifeDisclaimer?: string;
  weatherDisclaimer: string;
  imageKey: string;
  inquiryCtaLabel: string;
}
```

### 9.1 Draft cruise data

```ts
export const cruises: Cruise[] = [
  {
    id: 'guided_sound_tour',
    title: 'Guided Currituck Sound Tour',
    slug: 'guided-sound-tour',
    eyebrow: 'Nature views and quiet water',
    shortDescription: 'A captain-led sightseeing cruise through the sound’s shallow water, marsh edges, and open views.',
    longDescription: 'Designed for guests who want to understand the Currituck Sound from the water, this private tour blends scenic cruising, local context, wildlife awareness, and time aboard Ulysses.',
    bestFor: ['Families', 'First-time Outer Banks visitors', 'Nature-focused guests'],
    typicalDurationMinutes: 90,
    maxGuests: 6,
    departureOptions: ['koa_waterlily', 'duck', 'grandy'],
    weatherDisclaimer: 'Routes and timing depend on wind, water level, weather, and captain approval.',
    imageKey: 'currituck_sound_marsh_cruise',
    inquiryCtaLabel: 'Request a Sound Tour'
  },
  {
    id: 'carova_horse_viewing',
    title: 'Carova Horse Viewing from the Water',
    slug: 'wildlife-carova-horses',
    eyebrow: 'Respectful wildlife viewing',
    shortDescription: 'A wildlife-aware cruise with the possibility of seeing the Corolla/Carova horses from a respectful distance.',
    longDescription: 'This experience is built around patience, distance, and respect for the wild horses and their habitat. Sightings are not guaranteed, and routes are adjusted for conditions and wildlife safety.',
    bestFor: ['Wildlife lovers', 'Photographers with long lenses', 'Guests seeking a quieter alternative to beach traffic'],
    maxGuests: 6,
    departureOptions: ['koa_waterlily', 'duck'],
    wildlifeDisclaimer: 'Wild horse sightings are never guaranteed. Guests must follow all wildlife-viewing rules and view from a respectful distance.',
    weatherDisclaimer: 'Routes depend on water, wind, captain approval, and safe viewing conditions.',
    imageKey: 'carova_horses_from_water',
    inquiryCtaLabel: 'Ask About Horse Viewing'
  },
  {
    id: 'sunrise_sunset',
    title: 'Scenic Sunrise & Sunset Cruise',
    slug: 'sunset-sunrise',
    eyebrow: 'Golden-hour private charters',
    shortDescription: 'A calm private cruise timed around the sound’s best light.',
    longDescription: 'Ideal for couples, families, and small groups who want a quiet golden-hour experience on the Currituck Sound.',
    bestFor: ['Couples', 'Anniversaries', 'Family photos', 'Relaxed evenings'],
    typicalDurationMinutes: 90,
    maxGuests: 6,
    departureOptions: ['koa_waterlily', 'duck', 'grandy'],
    weatherDisclaimer: 'Sunrise and sunset visibility depends on weather and cloud cover.',
    imageKey: 'ulysses_sunset_cruise',
    inquiryCtaLabel: 'Request a Sunset Cruise'
  },
  {
    id: 'dock_and_dine',
    title: 'Dock-and-Dine Restaurant Charter',
    slug: 'dock-and-dine',
    eyebrow: 'Dinner by water',
    shortDescription: 'Private 6-person restaurant transfers to waterfront dining destinations when dock access and routing allow.',
    longDescription: 'A charter for guests who want the dinner journey to be part of the evening. Restaurant reservations, dock access, weather, and timing must be coordinated in advance.',
    bestFor: ['Dinner groups', 'Celebrations', 'Visitors staying near the sound'],
    maxGuests: 6,
    departureOptions: ['koa_waterlily', 'duck', 'grandy'],
    destinationOptions: ['duck', 'corolla', 'coinjock'],
    weatherDisclaimer: 'Dock-and-dine routes require captain approval, restaurant/dock confirmation, and weather-safe conditions.',
    imageKey: 'dock_and_dine_duck',
    inquiryCtaLabel: 'Plan a Dock-and-Dine Charter'
  }
];
```

---

## 10. Location and Map Data Model

### 10.1 TypeScript model

```ts
export type LocationId =
  | 'koa_waterlily'
  | 'duck'
  | 'grandy'
  | 'manteo'
  | 'carova'
  | 'corolla'
  | 'coinjock';

export interface MapLocation {
  id: LocationId;
  name: string;
  shortName: string;
  type: 'pickup' | 'service_area' | 'destination' | 'wildlife_context';
  latitude: number;
  longitude: number;
  address?: string;
  description: string;
  status: 'confirmed' | 'needs_confirmation' | 'context_only';
  publishDisclaimer?: string;
}
```

### 10.2 Draft location data

```ts
export const mapLocations: MapLocation[] = [
  {
    id: 'koa_waterlily',
    name: 'Outer Banks West / Currituck Sound KOA Holiday',
    shortName: 'Waterlily / KOA',
    type: 'pickup',
    latitude: 36.417178,
    longitude: -75.923594,
    address: '1631 Waterlily Road, Coinjock, NC 27923',
    description: 'Primary requested pickup/departure point near Waterlily and Coinjock on the Currituck Sound side.',
    status: 'needs_confirmation',
    publishDisclaimer: 'Exact pickup location subject to KOA permission, dock access, water level, and captain approval.'
  },
  {
    id: 'duck',
    name: 'Duck, North Carolina',
    shortName: 'Duck',
    type: 'service_area',
    latitude: 36.169722,
    longitude: -75.755278,
    description: 'Soundside resort town and possible pickup/dock-and-dine area. Exact dock must be confirmed.',
    status: 'needs_confirmation'
  },
  {
    id: 'grandy',
    name: 'Grandy, North Carolina',
    shortName: 'Grandy',
    type: 'service_area',
    latitude: 36.241667,
    longitude: -75.878889,
    description: 'Mainland Currituck service-area marker. Exact waterfront pickup point must be confirmed.',
    status: 'needs_confirmation'
  },
  {
    id: 'manteo',
    name: 'Manteo, North Carolina',
    shortName: 'Manteo',
    type: 'service_area',
    latitude: 35.908056,
    longitude: -75.675556,
    description: 'Extended special-request service area. Routing and timing must be validated by captain.',
    status: 'needs_confirmation'
  },
  {
    id: 'carova',
    name: 'Carova Beach / Northern Currituck Banks',
    shortName: 'Carova',
    type: 'wildlife_context',
    latitude: 36.5454,
    longitude: -75.8722,
    description: 'Context area for responsible wildlife viewing. Sightings are not guaranteed.',
    status: 'context_only'
  },
  {
    id: 'coinjock',
    name: 'Coinjock, North Carolina',
    shortName: 'Coinjock',
    type: 'destination',
    latitude: 36.3446,
    longitude: -75.9480,
    description: 'Dock-and-dine destination area. Restaurant and dockage must be confirmed before booking.',
    status: 'needs_confirmation'
  },
  {
    id: 'corolla',
    name: 'Corolla, North Carolina',
    shortName: 'Corolla',
    type: 'destination',
    latitude: 36.380287,
    longitude: -75.830780,
    description: 'Northern Outer Banks destination context. Exact dock/restaurant access must be confirmed.',
    status: 'needs_confirmation'
  }
];
```

### 10.3 Map implementation requirements

Use one of these approaches:

1. **MapLibre GL + OpenStreetMap-compatible tiles** for a polished custom-styled map.
2. **Leaflet + OpenStreetMap** for a simpler implementation.
3. **Static SVG map** for fastest launch and best design control.

Recommended MVP: static SVG/illustrated map with a “not for navigation” note, plus a link to contact form. Add interactive map after exact docks are confirmed.

Map style:

- Water: muted seafoam/blue-gray.
- Mainland: oyster/fog.
- Barrier islands: sand/oyster.
- Pins: weathered red for pickups, marsh gold for destinations, deep pine for wildlife context.
- Label only the needed points. Avoid map clutter.

Required map note:

> Map is for planning and inquiry only, not navigation. Exact departure location, route, pickup timing, and destination feasibility are confirmed after captain review.

---

## 11. Component System

### 11.1 Core components

- `SiteHeader`
- `MobileNav`
- `HeroMaritime`
- `CruiseCard`
- `CruiseGrid`
- `CoordinateCaption`
- `UlyssesSpecPanel`
- `PickupMap`
- `MapLegend`
- `RouteDisclaimer`
- `ResponsibleWildlifeCallout`
- `BookingInquiryForm`
- `FAQAccordion`
- `WeatherPolicyPanel`
- `DockAndDineDestinationCard`
- `TestimonialCard` placeholder
- `FooterCTA`
- `SEOJsonLd`

### 11.2 Hero component props

```ts
export interface HeroMaritimeProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: {
    src: string;
    alt: string;
    focalPoint?: 'center' | 'left' | 'right' | 'top' | 'bottom';
  };
  coordinateCaption?: string;
  trustLine?: string;
}
```

### 11.3 CTA rules

Primary CTA label should be action-specific:

- “Request a Charter”
- “Plan a Sunset Cruise”
- “Ask About Horse Viewing”
- “Plan a Dock-and-Dine Charter”

Never use vague CTAs such as “Submit,” “Learn More” as the only CTA, or “Book Now” until live booking is actually implemented.

---

## 12. Booking / Inquiry Workflow

### 12.1 MVP inquiry flow

1. User selects a cruise type or clicks CTA.
2. Form preselects cruise type based on URL param or page context.
3. User submits inquiry.
4. Server validates form.
5. Lead is emailed to business and optionally stored.
6. User receives confirmation.
7. Captain follows up to confirm route, price, weather, pickup, and waivers.

### 12.2 Form validation rules

- Guests: integer 1-6.
- Date: no past dates.
- Phone: optional but strongly encouraged.
- Email: required.
- Notes: max 2,000 characters.
- Honeypot field for spam.
- Rate-limit by IP and email.
- Include clear privacy statement.

### 12.3 Admin workflow

For launch, use one of:

- Formspree / Basin / Netlify Forms for fastest deployment.
- Resend or Postmark email API for production-quality email delivery.
- Airtable or Google Sheets for lead logging.
- Calendly/FareHarbor/Checkfront integration later after rates and time slots are finalized.

### 12.4 Lead email template

Subject: `New Dauntless Charter Inquiry — {{cruiseType}} — {{preferredDate}}`

Body should include:

- Guest contact
- Cruise type
- Guest count
- Date/time preference
- Pickup preference
- Restaurant destination, if any
- Notes
- Consent checkboxes
- Submission timestamp
- Source page

---

## 13. Content Requirements by Page

### 13.1 Home

- Clear headline and value proposition.
- Cruise type cards.
- Ulysses highlight.
- Pickup map preview.
- Wildlife responsibility callout.
- FAQ preview.
- Inquiry form.

### 13.2 Cruises & Charters

- Compare cruise types in a matrix.
- Make capacity clear: up to 6 guests.
- Make weather and captain approval clear.
- Avoid fixed prices until confirmed.

### 13.3 Wildlife & Carova Horse Viewing

Required copy points:

- “Potential viewing” language only.
- “Wildlife sightings are not guaranteed.”
- “Viewing is from a respectful distance.”
- “No feeding, approaching, calling to, or disturbing wildlife.”
- Explain that the experience is about the sound, habitat, and possibility of sightings.

### 13.4 Dock-and-Dine

Required copy points:

- Restaurant charters are custom/private.
- Guest should make restaurant reservation or request help coordinating.
- Dockage and schedule must be confirmed.
- Weather can change plans.
- Up to 6 guests.

Potential restaurant/dock context to verify before publishing:

- Coinjock Marina Restaurant: public information describes waterfront dining on the Intracoastal Waterway and marina services.
- NC Coast Grill & Bar in Duck: public information states it is waterfront and features boat dockage.
- Duck soundside restaurants and town docks: verify exact tie-up permissions before advertising specific dock use.
- Corolla options: verify soundside dock access before publishing as a routable dock-and-dine destination.

### 13.5 About Ulysses

Copy direction:

- Explain the boat as a “Great Harbour TT35 shallow-draft cruising motor trawler.”
- Highlight 18-inch draft as a region fit.
- Mention protected cabin, broad roof, shallow-water comfort, and small-group scale.
- Explain the name *Ulysses* through exploration, not mythology-heavy copy.

Example section:

> *Ulysses* is a Great Harbour TT35, a shallow-draft cruising motor trawler designed for comfortable travel through protected and skinny water. At just over 35 feet with an 18-inch draft, she is well suited to the soundside character of Currituck: open water, marsh edges, docks, and quiet passages that reward patience rather than speed.

### 13.6 Safety & FAQ

FAQ topics:

- How many guests can come?
- Where do we depart?
- Are horse sightings guaranteed?
- What should we bring?
- What happens if weather changes?
- Can children come?
- Are pets allowed?
- Can we bring food or drinks?
- Are there bathrooms aboard?
- Is the boat wheelchair accessible?
- How far in advance should we request a cruise?
- Do you offer gift certificates?
- Can you take us to dinner by boat?

Include placeholders requiring owner confirmation:

- Bathroom/head availability for charter guests.
- Alcohol policy.
- Child PFD availability or guest-provided requirements.
- Accessibility and boarding limitations.
- Cancellation and refund rules.
- Captain license/insurance phrasing.

---

## 14. Accessibility Requirements

Minimum target: WCAG 2.2 AA.

Implementation rules:

- Normal text contrast at least 4.5:1.
- Large text contrast at least 3:1.
- Visible keyboard focus states.
- Skip link.
- Semantic HTML headings in order.
- Buttons and links must have clear labels.
- No text baked into important images.
- Form errors must be text-based, not color-only.
- Map pins must have accessible list fallback.
- Accordions must use correct ARIA state.
- Motion must respect `prefers-reduced-motion`.
- All generated images require human-written alt text.

Map accessibility pattern:

```tsx
<section aria-labelledby="pickup-map-heading">
  <h2 id="pickup-map-heading">Pickup and departure areas</h2>
  <PickupMap aria-hidden="true" />
  <ul className="sr-only focus:not-sr-only">
    {locations.map(location => (
      <li key={location.id}>
        {location.name}: {location.description}
      </li>
    ))}
  </ul>
</section>
```

---

## 15. SEO Strategy

### 15.1 Primary keyword themes

- Currituck Sound boat tours
- Currituck Sound sunset cruise
- private boat charter Currituck Sound
- Duck NC boat charter
- Corolla horse viewing boat tour
- Outer Banks private boat tour
- Coinjock dock and dine boat charter
- Grandy NC boat tours
- Waterlily NC boat charter

### 15.2 Page title formulas

- Home: `Dauntless Maritime Services | Private Currituck Sound Boat Tours`
- Cruises: `Currituck Sound Cruises & Private Charters | Dauntless Maritime Services`
- Sunset: `Currituck Sound Sunset & Sunrise Cruises | Dauntless Maritime Services`
- Wildlife: `Carova Horse Viewing from the Water | Dauntless Maritime Services`
- Dock-and-Dine: `Dock-and-Dine Boat Charters in Duck, Coinjock & Currituck | Dauntless`
- Ulysses: `Aboard Ulysses, a Great Harbour TT35 | Dauntless Maritime Services`

### 15.3 Meta description patterns

Home:

> Private Currituck Sound cruises aboard Ulysses: guided sightseeing, nature views, sunset and sunrise cruises, responsible Carova horse viewing, and 6-person dock-and-dine charters.

Wildlife page:

> Explore the Currituck Sound with a responsible wildlife-aware cruise and the possibility of seeing the Corolla/Carova horses from the water. Private charters for up to 6 guests.

### 15.4 Structured data

Use JSON-LD. Include:

- `LocalBusiness` or `TravelAgency`
- `Service`
- `TouristTrip` for individual cruise pages
- `FAQPage` for FAQ content
- `BreadcrumbList`

#### Example LocalBusiness / TravelAgency schema

Use placeholders until business address, phone, email, logo, and sameAs links are confirmed.

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TravelAgency"],
  "name": "Dauntless Maritime Services LLC",
  "description": "Private guided boat tours, scenic cruises, nature viewing, and small-group charters on the Currituck Sound aboard Ulysses.",
  "areaServed": [
    { "@type": "Place", "name": "Currituck Sound" },
    { "@type": "Place", "name": "Duck, North Carolina" },
    { "@type": "Place", "name": "Grandy, North Carolina" },
    { "@type": "Place", "name": "Coinjock, North Carolina" },
    { "@type": "Place", "name": "Manteo, North Carolina" }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Private Currituck Sound Boat Tour"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Scenic Sunrise and Sunset Cruise"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dock-and-Dine Restaurant Charter"
      }
    }
  ]
}
```

#### Example TouristTrip schema

```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Currituck Sound Sunset Cruise aboard Ulysses",
  "description": "A private small-group sunset cruise on the Currituck Sound aboard Ulysses, a Great Harbour TT35 shallow-draft cruising trawler.",
  "touristType": ["Couples", "Families", "Outer Banks visitors", "Nature viewers"],
  "itinerary": [
    { "@type": "Place", "name": "Currituck Sound" },
    { "@type": "Place", "name": "Duck, North Carolina" },
    { "@type": "Place", "name": "Waterlily / Coinjock, North Carolina" }
  ],
  "provider": {
    "@type": "LocalBusiness",
    "name": "Dauntless Maritime Services LLC"
  }
}
```

---

## 16. Technical Architecture

### 16.1 Recommended stack

Preferred stack:

- Framework: Next.js with App Router or Astro with React islands.
- Language: TypeScript.
- Styling: Tailwind CSS with CSS variables for brand tokens.
- UI components: custom components, optionally shadcn/ui for accessible primitives.
- Forms: server action / API route with Zod validation.
- Email: Resend, Postmark, or SMTP provider.
- CMS: Sanity, Contentful, or Markdown/MDX for initial launch.
- Hosting: Vercel, Netlify, or Cloudflare Pages.
- Map: static SVG for MVP; MapLibre/Leaflet for interactive version.
- Analytics: Plausible, Fathom, or privacy-conscious GA4 setup.

### 16.2 File structure

```txt
src/
  app/
    page.tsx
    cruises/
      page.tsx
      sunset-sunrise/page.tsx
      wildlife-carova-horses/page.tsx
      dock-and-dine/page.tsx
    ulysses/page.tsx
    pickup-map/page.tsx
    safety-faq/page.tsx
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      MobileNav.tsx
    sections/
      HeroMaritime.tsx
      CruiseGrid.tsx
      UlyssesPanel.tsx
      PickupMapSection.tsx
      WildlifeCallout.tsx
      FAQSection.tsx
      InquirySection.tsx
    ui/
      Button.tsx
      Card.tsx
      Badge.tsx
      Accordion.tsx
      FormField.tsx
  content/
    cruises.ts
    locations.ts
    faq.ts
    seo.ts
  lib/
    validation.ts
    email.ts
    analytics.ts
    jsonld.ts
  styles/
    globals.css
public/
  images/
  map/
```

### 16.3 Environment variables

```txt
SITE_URL=
BUSINESS_EMAIL=
LEAD_EMAIL_TO=
RESEND_API_KEY=
POSTMARK_SERVER_TOKEN=
NEXT_PUBLIC_ANALYTICS_DOMAIN=
NEXT_PUBLIC_MAP_TILE_URL=
FORM_RATE_LIMIT_SECRET=
```

---

## 17. Design Tokens

```css
:root {
  --sound-navy: #082F3A;
  --deep-pine: #133B36;
  --oyster: #F6F1E7;
  --fog: #D9DFD8;
  --seafoam: #A8C7BE;
  --tide-blue: #2F6F7E;
  --marsh-gold: #C6964A;
  --weathered-red: #8B2E2B;
  --charcoal: #172024;
  --foam: #FFFFFF;

  --font-display: 'Fraunces', 'Newsreader', Georgia, serif;
  --font-body: 'Inter', 'Source Sans 3', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;

  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;

  --shadow-soft: 0 18px 50px rgba(8, 47, 58, 0.12);
  --shadow-card: 0 8px 30px rgba(23, 32, 36, 0.08);
}
```

Tailwind theme guidance:

```ts
colors: {
  sound: {
    navy: 'var(--sound-navy)',
    pine: 'var(--deep-pine)',
    tide: 'var(--tide-blue)',
    seafoam: 'var(--seafoam)',
    gold: 'var(--marsh-gold)',
    red: 'var(--weathered-red)',
    oyster: 'var(--oyster)',
    fog: 'var(--fog)',
    charcoal: 'var(--charcoal)',
    foam: 'var(--foam)'
  }
}
```

---

## 18. Copy Blocks for Launch

### 18.1 Homepage hero copy

**H1:** Private Currituck Sound cruises aboard *Ulysses*.

**Subhead:** Guided sightseeing, nature views, sunrise and sunset cruises, responsible Carova horse viewing from the water, and small-group restaurant charters across Duck, Grandy, Coinjock, and the northern Outer Banks.

**Trust line:** Private charters for up to 6 guests. Weather-aware scheduling. Responsible wildlife viewing.

### 18.2 Ulysses intro copy

*Ulysses* is a Great Harbour TT35 shallow-draft cruising motor trawler, designed for protected waters, quiet passages, and comfortable small-group travel. With an 18-inch draft, broad cabin, and twin outboard power, she is a natural fit for the shallow, scenic character of the Currituck Sound.

### 18.3 Wildlife copy

The wild horses of the northern Currituck Outer Banks are part of the region’s living heritage. Dauntless treats horse viewing as a privilege, not a guarantee. All wildlife viewing is conducted from a respectful distance, and routes are adjusted for weather, water conditions, and animal safety.

### 18.4 Weather policy preview

Currituck Sound conditions can change with wind, water level, storms, and visibility. Dauntless confirms each trip based on the captain’s judgment and guest safety. If conditions are not suitable, the charter may be rescheduled or adjusted.

---

## 19. Performance Requirements

- Lighthouse performance target: 90+ on mobile after image optimization.
- Largest Contentful Paint target: under 2.5 seconds on good 4G.
- Use AVIF/WebP responsive images.
- Preload hero image only on homepage.
- Lazy-load below-fold images and map.
- Avoid heavy animation libraries unless used minimally.
- Use static generation for marketing pages.
- Keep JS for map below fold or interaction-triggered.

---

## 20. Security, Privacy, and Compliance

### 20.1 Form security

- Server-side validation.
- Spam honeypot.
- Rate limiting.
- Sanitized email output.
- CSRF protection if framework does not provide it.
- No sensitive data in client logs.

### 20.2 Privacy

- Publish privacy policy before collecting leads.
- State what information is collected and why.
- State whether analytics are used.
- Provide contact email for deletion requests.

### 20.3 Operational disclaimers

The website should include owner-reviewed disclaimers for:

- Weather dependency.
- Captain approval.
- Wildlife non-guarantee.
- Dock access and pickup changes.
- Passenger capacity.
- Alcohol/food policy.
- Child safety/PFD policy.
- Cancellation/refund policy.

Do not publish license, insurance, or compliance claims until confirmed by the business.

---

## 21. Analytics Event Plan

Track:

- `cta_click_request_charter`
- `cta_click_pickup_map`
- `form_start`
- `form_submit_success`
- `form_submit_error`
- `phone_click`
- `email_click`
- `map_marker_click`
- `cruise_card_click`
- `faq_expand`

Avoid tracking sensitive free-text notes.

---

## 22. Image System Requirements

Do not rely on random stock imagery. Either:

1. Use properly licensed public-domain / Creative Commons / paid stock imagery with license documentation, or
2. Use the companion prompt document to generate cohesive, brand-specific images.

Required image categories:

- Hero: *Ulysses* on Currituck Sound at golden hour.
- Boat detail: *Ulysses* docked, showing cabin and shallow-draft trawler form.
- Sunrise cruise: low marsh and quiet water.
- Sunset cruise: soundside warmth and negative space.
- Carova horse viewing: horses distant on shoreline/dunes, viewed from water.
- Dock-and-dine: trawler approaching soundside dock near Duck/Coinjock-style waterfront dining.
- Map/route illustration.
- Safety/detail images: PFDs, dock lines, navigation console, captain checking weather.

All images must include alt text and should not depict unsafe boating, overcrowding, wildlife harassment, or inaccurate passenger capacity.

---

## 23. Agent Build Plan

### Phase 1: Content and design foundation

1. Create project repository.
2. Implement design tokens.
3. Build layout shell and navigation.
4. Create content data files for cruises, locations, and FAQ.
5. Generate image assets or use placeholders from prompt pack.
6. Build homepage.

### Phase 2: Lead funnel

1. Build inquiry form.
2. Add validation.
3. Add email submission.
4. Add confirmation states.
5. Add privacy policy and terms placeholders.
6. Add analytics events.

### Phase 3: Map and SEO

1. Build static map or interactive map.
2. Add accessible list fallback.
3. Add JSON-LD schema.
4. Add metadata for all pages.
5. Add sitemap and robots.txt.

### Phase 4: Detail pages

1. Build cruise detail template.
2. Build *Ulysses* page.
3. Build Safety & FAQ page.
4. Build Dock-and-Dine page.
5. Build Wildlife page.

### Phase 5: QA

1. Accessibility audit.
2. Mobile responsive QA.
3. Form submission testing.
4. SEO metadata validation.
5. Structured data validation.
6. Cross-browser testing.
7. Lighthouse pass.
8. Content review with owner.

---

## 24. Acceptance Criteria

### Design

- Site feels specific to Currituck Sound and Dauntless, not like a generic charter template.
- Colors meet contrast requirements.
- Typography is refined and readable.
- Images are cohesive and region-appropriate.
- CTAs are visible but not aggressive.

### Content

- All cruise types are represented.
- Passenger capacity is consistently stated as up to 6 guests.
- Wildlife viewing is responsible and non-guaranteed.
- Pickup points are clearly labeled as subject to confirmation.
- Boat page accurately describes the Great Harbour TT35.

### Technical

- Site is responsive from 360 px mobile to desktop.
- Inquiry form works and validates input.
- SEO metadata exists for every page.
- JSON-LD validates.
- Map has accessible fallback.
- Site loads quickly with optimized images.

### Operational

- No unverified claims about license, insurance, exact dock permissions, prices, or guaranteed sightings.
- Business can update cruise descriptions, locations, and FAQ without code-heavy changes.
- Future booking/payment integration is possible without redesign.

---

## 25. Owner Confirmation Checklist

Before launch, confirm:

- Exact legal business address or whether to hide public street address.
- Business phone and email.
- Logo preference, if any.
- *Ulysses* actual hull color, trim, registration display, and name placement.
- Captain name, credentials, and biography.
- Insurance/waiver language.
- Exact maximum passenger count and child rules.
- Whether bathroom/head is available to guests.
- Alcohol and food policy.
- Pet policy.
- Accessibility/boarding limitations.
- Exact pickup dock permissions at KOA, Duck, Grandy, Manteo, and any restaurant docks.
- Rates, durations, deposit, cancellation policy.
- Seasonal operating months and hours.
- Whether gift certificates are offered.
- Whether restaurant reservations are guest-managed or Dauntless-assisted.

---

## 26. Reference Sources Used

- Great Harbour TT35 official specifications and product information: https://www.greatharbourtrawlers.com/tt35.html
- Great Harbour TT35 specifications page: https://www.greatharbourtrawlers.com/tt35-specifications.html
- Great Harbour TT35 key features: https://www.greatharbourtrawlers.com/tt35-key-features.html
- Currituck Sound tourism context: https://www.outerbanks.com/currituck-sound.html
- Currituck Sound official tourism context: https://www.currituck.com/currituck-sound.html
- KOA Outer Banks West / Currituck Sound address: https://koa.com/campgrounds/outer-banks-west/
- KOA coordinate reference: https://www.goodsam.com/campgrounds-rv-parks/north-carolina/coinjock/outer-banks-westcurrituck-sound-koa-holiday/cgid-201921559
- Duck coordinate reference: https://www.travelmath.com/cities/Duck,+NC
- Grandy coordinate reference: https://www.travelmath.com/cities/Grandy,+NC
- Manteo coordinate reference: https://www.travelmath.com/cities/Manteo,+NC
- Carova coordinate reference: https://www.topozone.com/north-carolina/currituck-nc/city/carova/
- Corolla Wild Horse Fund FAQ and ordinances: https://www.corollawildhorses.com/corolla-wild-horses-faqs/ and https://www.corollawildhorses.com/currituck-county-ordinances/
- U.S. Coast Guard National Maritime Center charter boat captain information: https://www.dco.uscg.mil/nmc/charter_boat_captain/
- North Carolina Wildlife Resources Commission vessel operator guide: https://www.ncwildlife.gov/vessel-operators-guide/download
- Google Search Central LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Schema.org TouristTrip: https://schema.org/TouristTrip
- Schema.org LocalBusiness: https://schema.org/LocalBusiness
- Schema.org TravelAgency: https://schema.org/TravelAgency
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WCAG contrast minimum understanding: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- Nielsen Norman Group visual design principles: https://www.nngroup.com/articles/principles-visual-design/
- Nielsen Norman Group good visual design: https://www.nngroup.com/articles/good-visual-design/
- Material Design color system overview: https://m3.material.io/styles/color/overview
- Coinjock Marina Restaurant: https://coinjockmarina.com/
- NC Coast Grill & Bar: https://www.nccoastobx.com/
- Outer Banks Dock-and-Dine context: https://outerbanksthisweek.com/blog/outer-banks-dock-and-dine-destinations
