import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-600 mb-6">
            I'm a creative developer with a passion for building beautiful and
            functional web applications. With over 5 years of experience in the
            industry, I've worked on various projects ranging from e-commerce
            platforms to mobile applications.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            My expertise includes modern web technologies like React, Next.js,
            and TypeScript, as well as mobile development with React Native. I
            believe in creating user-centered designs that are both visually
            appealing and highly functional.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Skills</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Tools</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
