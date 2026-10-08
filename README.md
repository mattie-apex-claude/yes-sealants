# Yes Sealants website

Astro static site for Yes Sealants (Bradford, West Yorkshire).

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Enquiry form

The form posts JSON to `PUBLIC_ENQUIRY_ENDPOINT` (see `.env.example`), e.g. a Formspree form that forwards to yessealants@gmail.com. The endpoint is public by design and holds no credentials. Set it in the hosting provider's environment before building.

## Other notes

- Site URL is set in `astro.config.mjs` and `src/data/site.ts`; update both if the live domain changes.
- Contact details, locations and navigation live in `src/data/site.ts`.
- Optimised images are generated at build time from `src/assets/images`. Untouched originals are kept in `originals/`.
- `node scripts/generate-icons.mjs` regenerates the favicon, app icons and social share image from the logo.
