// Generates favicon, app icons and the social share image from the logo files.
import sharp from 'sharp';
import { writeFile, rm } from 'node:fs/promises';

const square = 'src/assets/images/logo/yes-sealants.jpg';
const wide = 'src/assets/images/logo/yes-sealants-wide.jpg';
const white = { r: 255, g: 255, b: 255, alpha: 1 };

const trimmed = async (file) => sharp(await sharp(file).trim({ background: '#ffffff', threshold: 40 }).toBuffer());

const icon = async (size, padRatio = 0.08) => {
	const inner = Math.round(size * (1 - padRatio * 2));
	const logo = await (await trimmed(square)).resize(inner, inner, { fit: 'contain', background: white }).toBuffer();
	return sharp({ create: { width: size, height: size, channels: 4, background: white } })
		.composite([{ input: logo, gravity: 'centre' }])
		.png({ compressionLevel: 9 })
		.toBuffer();
};

const outputs = { 'favicon-16x16.png': 16, 'favicon-32x32.png': 32, 'favicon-48x48.png': 48, 'apple-touch-icon.png': 180, 'icon-192.png': 192, 'icon-512.png': 512 };
const buffers = {};
for (const [name, size] of Object.entries(outputs)) {
	buffers[name] = await icon(size, size <= 48 ? 0.02 : 0.08);
	await writeFile(`public/${name}`, buffers[name]);
}

// ICO container with PNG-compressed entries.
const entries = [16, 32, 48].map((size) => ({ size, data: buffers[`favicon-${size}x${size}.png`] }));
const header = Buffer.alloc(6 + entries.length * 16);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(entries.length, 4);
let offset = header.length;
entries.forEach((entry, index) => {
	const at = 6 + index * 16;
	header.writeUInt8(entry.size, at);
	header.writeUInt8(entry.size, at + 1);
	header.writeUInt16LE(1, at + 4);
	header.writeUInt16LE(32, at + 6);
	header.writeUInt32LE(entry.data.length, at + 8);
	header.writeUInt32LE(offset, at + 12);
	offset += entry.data.length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, ...entries.map((entry) => entry.data)]));
await rm('public/favicon.svg', { force: true });

const logo = await (await trimmed(wide)).resize({ width: 820 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: white } })
	.composite([
		{ input: logo, gravity: 'centre' },
		{ input: { create: { width: 1200, height: 14, channels: 4, background: '#232323' } }, top: 616, left: 0 },
	])
	.jpeg({ quality: 88 })
	.toFile('public/og-image.jpg');

console.log('Icons and og-image written to public/');
