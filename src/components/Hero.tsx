import { ChevronRight, Award, Users, FileText, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Stat {
  label: string;
  value: string;
}

interface HeroProps {
  title: string;
  description: string;
  stats: Stat[];
}

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-10 h-10 text-amber-600 mb-3" />,
  Users: <Users className="w-10 h-10 text-amber-600 mb-3" />,
  FileText: <FileText className="w-10 h-10 text-amber-600 mb-3" />,
  CheckCircle: <CheckCircle className="w-10 h-10 text-amber-600 mb-3" />,
};

export function Hero({ title, description, stats }: HeroProps) {
  const sectionRef = useScrollAnimation('animate-fade-in-up');
  const statsRef = useScrollAnimation('animate-scale-in');

  return (
    <section ref={sectionRef} className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Hubungi Kami <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all font-medium text-lg"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
          <div ref={statsRef} className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className={`bg-white p-6 rounded-xl shadow-md animate-fade-in-up delay-${(index + 1) * 100}`}>
                    {iconMap.Award}
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
