import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Truck, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-trade.jpg";
import globalNetworkImg from "@/assets/global-network.jpg";
import { categories } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";

const whyChooseUs = [
  { icon: Shield, title: "Quality Assured", desc: "Rigorous quality checks at every stage of sourcing and packaging" },
  { icon: Globe, title: "Global Network", desc: "Exporting to 40+ countries across 5 continents" },
  { icon: Truck, title: "Reliable Logistics", desc: "End-to-end supply chain management with on-time delivery" },
  { icon: Award, title: "Certified Excellence", desc: "APEDA, FSSAI, ISO 9001:2015, Halal certified operations" },
];

const certBadges = ["APEDA", "FSSAI", "ISO 9001", "FIEO", "Spices Board", "Halal"];

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    {/* Hero */}
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Global trade port" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-gold font-medium tracking-[0.15em] sm:tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">Established 2010 · India</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-4 sm:mb-6">
            Your Trusted<br /><span className="text-gradient-gold">Global Trade Partner</span>
          </h1>
          <p className="text-primary-foreground/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Premium Indian commodities delivered worldwide with uncompromising quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link to="/products" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gold-gradient text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity shadow-gold flex items-center justify-center gap-2 text-sm sm:text-base">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="px-6 sm:px-8 py-3.5 sm:py-4 border border-gold/40 text-primary-foreground font-semibold rounded-md hover:bg-gold/10 transition-colors flex items-center justify-center text-sm sm:text-base">
              Request Quote
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* About Preview */}
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">About Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Bridging Indian Excellence with Global Markets
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              With over a decade of experience in international trade, GlobalExim has established itself as a premier export house specializing in agricultural commodities, spices, textiles, and more. We work directly with farmers and manufacturers across India to deliver the finest quality products to businesses worldwide.
            </p>
            <Link to="/about" className="text-gold font-semibold hover:underline inline-flex items-center gap-2 text-sm sm:text-base">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Product Categories */}
    <section className="py-14 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Our Products</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">Featured Categories</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.id} delay={i * 0.1}>
              <Link to={`/products/${cat.id}`} className="group block rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors" />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground mb-1">{cat.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link to="/products" className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm sm:text-base">
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Certifications Preview */}
    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Trust & Quality</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">Our Certifications</h2>
          </div>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
          {certBadges.map((badge, i) => (
            <AnimatedSection key={badge} delay={i * 0.05}>
              <div className="px-4 sm:px-6 py-2.5 sm:py-3 border border-gold/30 rounded-full bg-card flex items-center gap-2">
                <CheckCircle className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-gold" />
                <span className="text-xs sm:text-sm font-medium text-foreground">{badge}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link to="/certifications" className="text-gold font-semibold hover:underline inline-flex items-center gap-2 text-sm">
            View All Certifications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-14 sm:py-20 bg-navy-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground">The GlobalExim Advantage</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseUs.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-5 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 sm:h-7 sm:w-7 text-gold" />
                </div>
                <h3 className="text-sm sm:text-lg font-heading font-semibold text-primary-foreground mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-primary-foreground/60">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Global Network */}
    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-xl overflow-hidden relative">
            <img src={globalNetworkImg} alt="Global trade network" loading="lazy" className="w-full h-52 sm:h-64 md:h-96 object-cover" width={1200} height={600} />
            <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
              <div className="text-center px-4 sm:px-6">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2 sm:mb-4">Exporting to 40+ Countries</h2>
                <p className="text-primary-foreground/70 max-w-xl mx-auto mb-4 sm:mb-6 text-xs sm:text-base">From India to the world — our logistics network ensures timely delivery across the Middle East, Europe, Africa, Asia, and Americas.</p>
                <Link to="/contact" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gold-gradient text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-gold text-sm">
                  Start Trading <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">Ready to Source Premium Indian Products?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">Get in touch with our trade experts for competitive quotes and customized solutions.</p>
          <Link to="/contact" className="px-8 sm:px-10 py-3.5 sm:py-4 bg-gold-gradient text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity shadow-gold inline-flex items-center gap-2 text-sm sm:text-base">
            Contact Us Today <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Index;
