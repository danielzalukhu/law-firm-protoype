import { Scale } from 'lucide-react';

interface NavigationProps {
  brandName: string;
  navItems: Array<{ label: string; href: string }>;
}

export function Navigation({ brandName, navItems }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Scale className="w-8 h-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">{brandName}</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:block bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
