# Yes Sealants website

Astro static site for Yes Sealants (Bradford, West Yorkshire).

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Enquiry form

`src/components/EnquiryForm.astro` posts the form to this site's `/api/website-enquiry` route (`functions/api/website-enquiry.ts`, a Cloudflare Pages Function). That route adds the private connection secret and sends the enquiry to ApexFlow CRM, where it lands in the pipeline as a New enquiry. Each enquiry carries a `submission_id`, so retries never create duplicates.

Cloudflare Pages settings (Settings, Variables and Secrets, Production), both shown once by Apex Admin's Connect website button:

| Name | Value |
| --- | --- |
| `APEX_WEBSITE_ID` | The website connection ID |
| `APEX_WEBSITE_SECRET` | The 64 character connection secret (type: Secret) |

`enquiryWebhook` in `src/data/site.ts` (GoHighLevel) is no longer used by the form.

## Other notes

- Site URL is set in `astro.config.mjs` and `src/data/site.ts`; update both if the live domain changes.
- Contact details, locations and navigation live in `src/data/site.ts`.
- Optimised images are generated at build time from `src/assets/images`. Untouched originals are kept in `originals/`.
- `node scripts/generate-icons.mjs` regenerates the favicon, app icons and social share image from the logo.
