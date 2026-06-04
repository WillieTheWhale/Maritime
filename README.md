# Dauntless Maritime Services Website

Static GitHub Pages site for Dauntless Maritime Services LLC, built from the repository design document.

## Structure

- `index.html` and route folders are the deployable static site.
- `assets/css/styles.css` contains the design system and responsive layout.
- `assets/js/site.js` handles mobile navigation, FAQ accordions, map marker detail states, analytics hooks, and form validation.
- `scripts/generate-site.mjs` is a zero-dependency generator for rebuilding the static pages from shared content.
- `assets/images/` contains generated launch imagery in WebP plus PNG fallbacks.

## Local Preview

```bash
npm run serve
```

Then open `http://localhost:4173`.

## Rebuild Pages

```bash
npm run build
```

The generator writes the HTML route tree, `sitemap.xml`, `robots.txt`, and `.nojekyll`.

## GitHub Pages

This site does not require a framework runtime. `.github/workflows/pages.yml` rebuilds the static pages, copies only the deployable files into `_site`, and publishes that artifact on pushes to `main`.

Before public launch, update:

- `siteUrl` in `scripts/generate-site.mjs`, then run `npm run build`.
- Business phone, email, captain bio, credentials, rates, cancellation terms, child/PFD rules, pet policy, accessibility limits, bathroom availability, and dock permissions.
- Privacy policy wording after choosing the form provider, analytics provider, email provider, and any lead storage tool.

## Inquiry Delivery

The custom inquiry form posts to FormSubmit's AJAX endpoint for `jonathankeffer@hotmail.com` with the fixed email subject `CHARTER INQUIRY`. FormSubmit sends a one-time activation message to that inbox before it delivers submissions; activate it from that message after the site is deployed.

## Image Notes

The current launch imagery is AI-generated from `dauntless_maritime_image_prompt_pack (1).md`, which defines the Currituck Sound art direction, boat description, safety constraints, and negative prompts. Future generated assets should follow that prompt pack. Replace AI imagery with verified photos of `Ulysses` when available. Wildlife imagery intentionally shows horses at a distance and avoids unsafe or intrusive scenes.
