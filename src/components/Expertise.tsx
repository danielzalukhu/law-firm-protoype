import { CheckCircle, ChevronRight } from 'lucide-react';

interface Highlight {
  title: string;
  description: string;
}

interface ExpertiseProps {
  title: string;
  description: string;
  highlights: Highlight[];
  fields: string[];
}

export function Expertise({ title, description, highlights, fields }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bidang Keahlian</h3>
            <div className="space-y-4">
              {fields.map((field) => (
                <div key={field} className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <ChevronRight className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700 font-medium">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
