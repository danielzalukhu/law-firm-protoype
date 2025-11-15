import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TeamMember {
  name: string;
  position: string;
  vision: string;
  photo: string;
}

interface TeamProps {
  ceo: TeamMember;
  lawyers: TeamMember[];
}

export function Team({ ceo, lawyers }: TeamProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [ceo, ...lawyers];
  const sectionRef = useScrollAnimation('animate-fade-in-up');

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-8 bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Profesional Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dipimpin oleh profesional hukum berpengalaman dengan dedikasi penuh terhadap kesuksesan klien
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-square">
                  <img
                    src={items[currentIndex].photo}
                    alt={items[currentIndex].name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-2 inline-block">
                  <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                    {currentIndex === 0 ? 'Pemimpin' : 'Lawyer'}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{items[currentIndex].name}</h3>
                <p className="text-lg text-amber-600 font-semibold mb-6">{items[currentIndex].position}</p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {items[currentIndex].vision}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-amber-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
