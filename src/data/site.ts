export const site = {
	name: 'Yes Sealants',
	url: 'https://yessealants.co.uk',
	base: 'Bradford',
	region: 'West Yorkshire',
	phoneDisplay: '+44 7950 586517',
	phoneHref: 'tel:+447950586517',
	phoneIntl: '+447950586517',
	whatsappHref: 'https://wa.me/447950586517',
	email: 'yessealants@gmail.com',
	emailHref: 'mailto:yessealants@gmail.com',
	facebook: 'https://www.facebook.com/people/Yes-Sealants/61568970945036/',
	instagram: 'https://www.instagram.com/yes_sealants/',
	areaLine: 'Based in Bradford, covering West Yorkshire and surrounding areas.',
	outOfAreaLine: 'Not near us? Get in touch and we’ll see if we can help.',
	// Set PUBLIC_ENQUIRY_ENDPOINT (e.g. a Formspree form URL that forwards to the email above).
	enquiryEndpoint: (import.meta.env.PUBLIC_ENQUIRY_ENDPOINT as string | undefined) ?? '',
};

export const locations = [
	'Bradford', 'Leeds', 'Wakefield', 'Huddersfield', 'Halifax', 'Keighley', 'Shipley', 'Bingley', 'Ilkley',
	'Pudsey', 'Morley', 'Dewsbury', 'Batley', 'Brighouse', 'Cleckheaton', 'Otley', 'Horsforth', 'Guiseley',
];

export const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/#quality' },
	{ label: 'Services', href: '/services' },
	{ label: 'Our work', href: '/our-work' },
	{ label: 'Areas covered', href: '/areas-we-cover' },
];
