# Yes Sealants website

Astro static site for Yes Sealants (Bradford, West Yorkshire).

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Enquiry form

`src/components/EnquiryForm.astro` posts JSON to the GoHighLevel inbound webhook set as `enquiryWebhook` in `src/data/site.ts`. No API keys are used. Payload fields: `fullName`, `phone`, `postcode`, `houseNumber`, `projectDetails`, `source`, `pageUrl`.

## Other notes

- Site URL is set in `astro.config.mjs` and `src/data/site.ts`; update both if the live domain changes.
- Contact details, locations and navigation live in `src/data/site.ts`.
- Optimised images are generated at build time from `src/assets/images`. Untouched originals are kept in `originals/`.
- `node scripts/generate-icons.mjs` regenerates the favicon, app icons and social share image from the logo.
