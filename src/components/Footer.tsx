import { Scale } from 'lucide-react';

interface FooterProps {
  brandName: string;
  copyright: string;
}

export function Footer({ brandName, copyright }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Scale className="w-6 h-6 text-amber-400" />
          <span className="text-xl font-bold text-white">{brandName}</span>
        </div>
        <p className="text-sm">
          &copy; {copyright}
        </p>
      </div>
    </footer>
  );
}
