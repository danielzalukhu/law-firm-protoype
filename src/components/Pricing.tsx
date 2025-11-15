import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  onPlanSelect?: (planName: string) => void;
}

export function Pricing({ plans, onPlanSelect }: PricingProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sectionRef = useScrollAnimation('animate-fade-in-up');

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? plans.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === plans.length - 1 ? 0 : prevIndex + 1));
  };

  const PricingCard = ({ plan }: { plan: PricingPlan }) => (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
        plan.highlighted
          ? 'ring-2 ring-amber-600 shadow-2xl'
          : 'bg-white shadow-lg hover:ring-2 hover:ring-amber-400'
      } ${!plan.highlighted && 'bg-white'}`}
    >
      {plan.highlighted && (
        <div className="bg-amber-600 text-white py-2 text-center font-semibold">
          Rekomendasi Populer
        </div>
      )}

      <div className="p-8 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

        <div className="mb-8">
          <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">{plan.price}</span>
          <span className="text-gray-600 ml-2 text-sm font-medium">per bulan</span>
        </div>

        <button
          onClick={() => onPlanSelect?.(plan.name)}
          className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 text-center transform hover:scale-105 ${
            plan.highlighted
              ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-100 text-gray-900 hover:bg-amber-100 hover:text-amber-900 border-2 border-transparent hover:border-amber-400'
          }`}
        >
          Pilih Paket
        </button>

        <div className="space-y-4 flex-grow">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              ) : (
                <div className="w-5 h-5 rounded border border-gray-300 flex-shrink-0 mt-0.5" />
              )}
              <span
                className={`text-sm ${
                  feature.included ? 'text-gray-700' : 'text-gray-400 line-through'
                }`}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="pricing" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Paket Harga</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan hukum Anda
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {plans.map((plan, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <PricingCard plan={plan} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/3 -translate-x-4 p-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all z-10"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/3 translate-x-4 p-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all z-10"
            aria-label="Next plan"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-amber-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to plan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
