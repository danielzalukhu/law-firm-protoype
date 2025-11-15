import { ServiceCard } from './ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  const sectionRef = useScrollAnimation('animate-fade-in-up');

  return (
    <section ref={sectionRef} id="services" className="py-20 px-6 lg:px-8 bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Hukum Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi hukum komprehensif yang disesuaikan dengan kebutuhan bisnis dan individu Anda
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className={`animate-fade-in-up delay-${(index % 3 + 1) * 100}`}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
