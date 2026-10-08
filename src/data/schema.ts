import { locations, site } from './site';
import { services } from './siteContent';

export const businessSchema = (description: string) => ({
	'@context': 'https://schema.org',
	'@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
	'@id': `${site.url}/#business`,
	name: site.name,
	url: site.url,
	image: `${site.url}/og-image.jpg`,
	logo: `${site.url}/icon-512.png`,
	description,
	telephone: site.phoneIntl,
	email: site.email,
	foundingDate: '2025',
	address: {
		'@type': 'PostalAddress',
		addressLocality: site.base,
		addressRegion: site.region,
		addressCountry: 'GB',
	},
	areaServed: [
		{ '@type': 'AdministrativeArea', name: site.region },
		...locations.map((name) => ({ '@type': 'City', name })),
	],
	sameAs: [site.facebook, site.instagram],
	contactPoint: [{
		'@type': 'ContactPoint',
		contactType: 'customer service',
		telephone: site.phoneIntl,
		email: site.email,
		areaServed: 'GB',
		availableLanguage: 'English',
	}],
	makesOffer: services.map((service) => ({
		'@type': 'Offer',
		itemOffered: {
			'@type': 'Service',
			name: service.title,
			description: service.text,
			url: `${site.url}/services#${service.slug}`,
			areaServed: { '@type': 'AdministrativeArea', name: site.region },
		},
	})),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: `${site.url}${item.path}`,
	})),
});
