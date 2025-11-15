import { ContactChannel } from './ContactChannel';
import { AppointmentModal } from './AppointmentModal';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Channel {
  title: string;
  icon: string;
  items: string[];
}

interface ContactProps {
  title: string;
  subtitle: string;
  channels: Channel[];
  hours: string;
  whatsappPhone?: string;
  selectedPlan?: string | null;
}

export function Contact({ title, subtitle, channels, hours, whatsappPhone, selectedPlan }: ContactProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useScrollAnimation('animate-fade-in-up');

  const handlePhoneClick = (phone: string) => {
    if (whatsappPhone) {
      let message = 'Halo, saya ingin membuat appointment dengan Bona Panggabean Legal.';
      if (selectedPlan) {
        message += ` Saya tertarik dengan paket ${selectedPlan}.`;
      }
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappPhone}?text=${encodedMessage}`, '_blank');
    }
  };

  const handleEmailClick = () => {
    setIsModalOpen(true);
  };

  const updatedChannels = channels.map((channel) => {
    if (channel.icon === 'Phone') {
      return {
        ...channel,
        onClick: () => handlePhoneClick(channel.items[0]),
      };
    }
    if (channel.icon === 'Mail') {
      return {
        ...channel,
        onClick: handleEmailClick,
      };
    }
    return channel;
  });

  return (
    <>
      <section ref={sectionRef} id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-300">{subtitle}</p>
            {selectedPlan && (
              <p className="text-amber-400 text-lg font-semibold mt-4">
                Paket yang Anda pilih: <span className="text-white">{selectedPlan}</span>
              </p>
            )}
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {updatedChannels.map((channel) => (
              <ContactChannel
                key={channel.title}
                title={channel.title}
                icon={channel.icon}
                items={channel.items}
                onClick={(channel as any).onClick}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Jam Operasional</p>
            <div className="text-white text-lg font-medium whitespace-pre-line">
              {hours}
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={selectedPlan} />
    </>
  );
}
