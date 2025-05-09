import { FadeIn } from '@/components/animations';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center text-white mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Have a project in mind? Let&apos;s discuss how we can help bring
              your vision to life.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re always excited to hear about new projects and
              opportunities.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto mt-20 grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">hello@company.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
