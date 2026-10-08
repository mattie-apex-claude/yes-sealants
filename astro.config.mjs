// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Replace if the live domain differs; used for canonical URLs, sitemap and schema.
	site: 'https://yessealants.co.uk',
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Manrope',
			cssVariable: '--font-manrope',
			weights: [400, 500, 600, 700, 800],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Arial', 'sans-serif'],
		},
	],
});
