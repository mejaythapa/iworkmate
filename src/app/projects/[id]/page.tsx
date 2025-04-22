import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations';
import { notFound } from 'next/navigation';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform built with Next.js and Supabase',
    fullDescription: `Our team developed a comprehensive e-commerce solution that helps businesses sell their products online. The platform features a modern design, fast performance, and seamless user experience.

Key Features:
• Product catalog with advanced filtering
• Shopping cart and checkout process
• User authentication and profiles
• Order management system
• Admin dashboard
• Analytics and reporting

Technologies Used:
• Next.js for frontend and API routes
• Supabase for backend and authentication
• TailwindCSS for styling
• Stripe for payment processing
• Vercel for deployment`,
    image: '/project-1.svg',
    gallery: [
      '/project-1-detail-1.svg',
      '/project-1-detail-2.svg',
      '/project-1-detail-3.svg',
    ],
  },
  // Add other projects here...
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <span className="mr-2">←</span>
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-blue-600 font-medium mb-6">
                {project.category}
              </p>
              <div className="prose prose-lg max-w-none">
                {project.fullDescription
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph.includes('•')
                        ? paragraph.split('\n').map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))
                        : paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {project.gallery && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
