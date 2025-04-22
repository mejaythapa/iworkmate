'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/animations';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="text-left">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
                  Building Amazing Digital Products
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re a team of passionate developers, designers, and
                  strategists who love creating beautiful, functional websites.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our mission is to help businesses grow their online presence
                  with modern, responsive websites that look great on any
                  device.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/hero-mockup.svg"
                  alt="Digital Products Mockup"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Services
              </h2>
              <p className="text-gray-600 text-lg">
                We offer end-to-end solutions for digital product development
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Product Strategy',
                description:
                  'We help define your product vision and create a roadmap for success',
                icon: '🎯',
              },
              {
                title: 'UI/UX Design',
                description:
                  'Create beautiful and intuitive user experiences that delight your customers',
                icon: '🎨',
              },
              {
                title: 'Development',
                description:
                  'Build robust and scalable applications using modern technologies',
                icon: '💻',
              },
              {
                title: 'Quality Assurance',
                description:
                  'Ensure your product meets the highest quality standards',
                icon: '✅',
              },
              {
                title: 'Launch & Support',
                description:
                  'Successfully launch your product and provide ongoing support',
                icon: '🚀',
              },
              {
                title: 'Analytics & Growth',
                description:
                  'Track performance and optimize for continuous growth',
                icon: '📈',
              },
            ].map((service, index) => (
              <ScaleIn key={service.title} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Process
              </h2>
              <p className="text-gray-600 text-lg">
                A proven approach to delivering successful digital products
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your business goals and user needs',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating intuitive and engaging user experiences',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building robust and scalable solutions',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Launching and iterating based on feedback',
              },
            ].map((phase, index) => (
              <FadeIn key={phase.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-xl mb-3">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Start Your Project
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to bring your digital product to life? Let&apos;s talk
                about your project.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
