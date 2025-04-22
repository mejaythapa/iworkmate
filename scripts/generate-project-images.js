const fs = require('fs');
const path = require('path');

const colors = [
  ['#4F46E5', '#7C3AED'], // Blue to Purple
  ['#10B981', '#3B82F6'], // Green to Blue
  ['#F59E0B', '#EF4444'], // Yellow to Red
  ['#EC4899', '#8B5CF6'], // Pink to Purple
  ['#06B6D4', '#3B82F6'], // Cyan to Blue
  ['#F97316', '#DB2777'], // Orange to Pink
];

const projectImages = [
  { id: 1, name: 'E-commerce Platform' },
  { id: 2, name: 'Mobile Banking App' },
  { id: 3, name: 'Healthcare Dashboard' },
  { id: 4, name: 'Social Media Platform' },
  { id: 5, name: 'Fitness Tracking App' },
  { id: 6, name: 'Real Estate Platform' },
];

const generateSVG = (name, color1, color2) => `
<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" rx="20" fill="url(#gradient)" />
  <text x="400" y="300" text-anchor="middle" font-family="system-ui" font-size="32" fill="white" font-weight="bold">${name}</text>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" style="stop-color:${color1}"/>
      <stop offset="100%" style="stop-color:${color2}"/>
    </linearGradient>
  </defs>
</svg>
`;

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Generate project images
projectImages.forEach((project, index) => {
  const [color1, color2] = colors[index % colors.length];
  const svg = generateSVG(project.name, color1, color2);
  fs.writeFileSync(path.join(publicDir, `project-${project.id}.svg`), svg);

  // Generate detail images
  for (let i = 1; i <= 3; i++) {
    const detailSvg = generateSVG(
      `${project.name}\nDetail ${i}`,
      color1,
      color2
    );
    fs.writeFileSync(
      path.join(publicDir, `project-${project.id}-detail-${i}.svg`),
      detailSvg
    );
  }
});

console.log('Generated project images successfully!');
