import { FadeIn, ScaleIn } from '@/components/animations';

const services = [
  {
    title: 'Product Strategy',
    description:
      'We help define your product vision and create a roadmap for success',
    icon: '🎯',
    details: [
      'Market Research & Analysis',
      'Product Definition',
      'User Journey Mapping',
      'Feature Prioritization',
      'Go-to-Market Strategy',
    ],
  },
  {
    title: 'UI/UX Design',
    description:
      'Create beautiful and intuitive user experiences that delight your customers',
    icon: '🎨',
    details: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'Design Systems',
      'Usability Testing',
    ],
  },
  {
    title: 'Development',
    description:
      'Build robust and scalable applications using modern technologies',
    icon: '💻',
    details: [
      'Frontend Development',
      'Backend Development',
      'Mobile App Development',
      'API Integration',
      'Database Design',
    ],
  },
  {
    title: 'Quality Assurance',
    description: 'Ensure your product meets the highest quality standards',
    icon: '✅',
    details: [
      'Manual Testing',
      'Automated Testing',
      'Performance Testing',
      'Security Testing',
      'Cross-browser Testing',
    ],
  },
  {
    title: 'Launch & Support',
    description: 'Successfully launch your product and provide ongoing support',
    icon: '🚀',
    details: [
      'Deployment Strategy',
      'Performance Monitoring',
      'Technical Support',
      'Maintenance',
      'Updates & Patches',
    ],
  },
  {
    title: 'Analytics & Growth',
    description: 'Track performance and optimize for continuous growth',
    icon: '📈',
    details: [
      'Performance Analytics',
      'User Behavior Analysis',
      'Conversion Optimization',
      'A/B Testing',
      'Growth Strategy',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business
            succeed in the digital world
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ScaleIn key={service.title} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center text-gray-700"
                    >
                      <span className="mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </div>
  );
}
