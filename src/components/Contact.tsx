import { ContactChannel } from './ContactChannel';

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
}

export function Contact({ title, subtitle, channels, hours }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <ContactChannel
              key={channel.title}
              title={channel.title}
              icon={channel.icon}
              items={channel.items}
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
  );
}
