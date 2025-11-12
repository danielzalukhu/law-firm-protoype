import {
  Navigation,
  Hero,
  Services,
  Expertise,
  About,
  Team,
  Pricing,
  Testimonials,
  Contact,
  Footer,
} from './components';
import { siteConfig } from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation
        brandName={siteConfig.brand.name}
        navItems={siteConfig.navigation}
      />

      <Hero
        title={siteConfig.hero.title}
        description={siteConfig.hero.description}
        stats={siteConfig.hero.stats}
      />

      <Services services={siteConfig.services} />

      <Expertise
        title={siteConfig.expertise.title}
        description={siteConfig.expertise.description}
        highlights={siteConfig.expertise.highlights}
        fields={siteConfig.expertise.fields}
      />

      <Team ceo={siteConfig.team.ceo} lawyers={siteConfig.team.lawyers} />

      <Pricing plans={siteConfig.pricing} />

      <Testimonials testimonials={siteConfig.testimonials} />

      <About
        title={siteConfig.about.title}
        paragraphs={siteConfig.about.paragraphs}
      />

      <Contact
        title={siteConfig.contact.title}
        subtitle={siteConfig.contact.subtitle}
        channels={siteConfig.contact.channels}
        hours={siteConfig.contact.hours}
        whatsappPhone={siteConfig.contact.whatsappPhone}
      />

      <Footer
        brandName={siteConfig.brand.name}
        copyright={siteConfig.footer.copyright}
      />
    </div>
  );
}

export default App;
