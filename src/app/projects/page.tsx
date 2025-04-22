import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/animations';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform built with Next.js and Supabase',
    image: '/project-1.jpg',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and user-friendly mobile banking application',
    image: '/project-2.jpg',
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    category: 'UI/UX Design',
    description: 'Intuitive dashboard for healthcare professionals',
    image: '/project-3.jpg',
  },
  {
    id: 4,
    title: 'Social Media Platform',
    category: 'Full Stack Development',
    description: 'Feature-rich social media platform for creators',
    image: '/project-4.jpg',
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description: 'Comprehensive fitness tracking and workout planning app',
    image: '/project-5.jpg',
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Modern real estate listing and management platform',
    image: '/project-6.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Explore our portfolio of successful digital products and solutions
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScaleIn key={project.id} delay={index * 0.1}>
              <Link href={`/projects/${project.id}`}>
                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </Link>
            </ScaleIn>
          ))}
        </div>
      </div>
    </div>
  );
}
