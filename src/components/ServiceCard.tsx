import { Scale, FileText, Award, Users } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Scale: <Scale className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
      <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform">
        {iconMap[icon]}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
