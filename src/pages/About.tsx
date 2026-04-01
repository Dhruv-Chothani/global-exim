import { Target, Eye, Globe, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import globalNetworkImg from "@/assets/global-network.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To bridge the gap between Indian producers and global buyers by delivering premium quality products with unmatched reliability and service excellence." },
  { icon: Eye, title: "Our Vision", desc: "To become the most trusted Indian export house recognized globally for quality, transparency, and sustainable trade practices." },
  { icon: Globe, title: "Global Reach", desc: "With active trade partnerships in over 40 countries, we serve markets across the Middle East, Europe, Africa, South-East Asia, and the Americas." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every shipment undergoes rigorous quality checks. We maintain ISO 9001:2015 standards and comply with international food safety regulations." },
];

const stats = [
  { value: "14+", label: "Years of Experience" },
  { value: "40+", label: "Countries Served" },
  { value: "500+", label: "Products Exported" },
  { value: "1000+", label: "Satisfied Clients" },
];

const About = () => (
  <div className="min-h-screen pt-16 sm:pt-20">
    <section className="bg-navy-gradient py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">About Us</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6">
            Your Reliable Partner in<br /><span className="text-gradient-gold">International Trade</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-sm sm:text-lg">
            Founded in 2010, GlobalExim has grown from a small trading firm to one of India's most trusted export companies.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-10 sm:py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gold">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">Our Story</h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>GlobalExim was established with a singular vision — to showcase the finest Indian products on the global stage. Starting with spices and agricultural commodities, we have expanded our portfolio to include rice, pulses, textiles, tea, fresh produce, and more.</p>
              <p>Our deep-rooted relationships with farmers, processors, and manufacturers across India give us a unique advantage in sourcing the highest quality products at competitive prices. We work directly with the source, eliminating middlemen and ensuring fair trade practices.</p>
              <p>Today, we are proud to serve importers, distributors, and businesses in over 40 countries, with a reputation built on trust, transparency, and timely delivery.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-14 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {values.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-lg p-5 sm:p-8 shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-xl overflow-hidden">
            <img src={globalNetworkImg} alt="Global trade network map" loading="lazy" className="w-full h-48 sm:h-64 md:h-80 object-cover" width={1200} height={600} />
          </div>
          <p className="text-center text-muted-foreground mt-4 sm:mt-6 text-xs sm:text-base">Our global trade network spanning 40+ countries across 5 continents</p>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
