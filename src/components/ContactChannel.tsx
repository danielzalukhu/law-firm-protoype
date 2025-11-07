import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactChannelProps {
  title: string;
  icon: string;
  items: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone className="w-10 h-10 text-amber-400 mb-4" />,
  Mail: <Mail className="w-10 h-10 text-amber-400 mb-4" />,
  MapPin: <MapPin className="w-10 h-10 text-amber-400 mb-4" />,
};

export function ContactChannel({ title, icon, items }: ContactChannelProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
      {iconMap[icon]}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      {items.map((item, index) => (
        <p key={index} className="text-gray-300 mb-2 last:mb-0">
          {item}
        </p>
      ))}
    </div>
  );
}
