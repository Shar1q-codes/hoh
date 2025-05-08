const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholder SVG
const generatePlaceholderSVG = (width, height, text) => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1a1a1a"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#ff3e3e" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`;

// Generate all required placeholder images
const placeholders = [
  { name: 'logo.svg', width: 200, height: 60, text: 'HOH' },
  { name: 'jury-1.jpg', width: 400, height: 500, text: 'Jury 1' },
  { name: 'jury-2.jpg', width: 400, height: 500, text: 'Jury 2' },
  { name: 'jury-3.jpg', width: 400, height: 500, text: 'Jury 3' },
  { name: 'advisory-1.jpg', width: 400, height: 500, text: 'Advisory 1' },
  { name: 'advisory-2.jpg', width: 400, height: 500, text: 'Advisory 2' },
  { name: 'advisory-3.jpg', width: 400, height: 500, text: 'Advisory 3' },
  { name: 'guest-1.jpg', width: 400, height: 500, text: 'Guest 1' },
  { name: 'guest-2.jpg', width: 400, height: 500, text: 'Guest 2' },
  { name: 'guest-3.jpg', width: 400, height: 500, text: 'Guest 3' },
  { name: 'sponsor-1.png', width: 200, height: 200, text: 'Sponsor 1' },
  { name: 'sponsor-2.png', width: 200, height: 200, text: 'Sponsor 2' },
  { name: 'sponsor-3.png', width: 200, height: 200, text: 'Sponsor 3' }
];

placeholders.forEach(({ name, width, height, text }) => {
  const svg = generatePlaceholderSVG(width, height, text);
  fs.writeFileSync(path.join(imagesDir, name), svg);
  console.log(`Generated ${name}`);
}); 