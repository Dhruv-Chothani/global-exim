import { Shield, Award, FileCheck, Leaf, Globe, CheckCircle, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const certs = [
  { icon: Leaf, title: "APEDA", desc: "Registered with Agricultural and Processed Food Products Export Development Authority for agricultural exports." },
  { icon: Shield, title: "FSSAI", desc: "Food Safety and Standards Authority of India certified, ensuring compliance with national food safety standards." },
  { icon: Award, title: "Spices Board", desc: "Registered exporter with the Spices Board of India, authorized for premium spice exports." },
  { icon: FileCheck, title: "ISO 9001:2015", desc: "International Organization for Standardization certified quality management system across all operations." },
  { icon: Globe, title: "FIEO", desc: "Member of Federation of Indian Export Organisations, India's apex body for export promotion." },
  { icon: CheckCircle, title: "Halal Certified", desc: "Halal certification for food products, enabling exports to Islamic markets worldwide." },
];

const docs = [
  { title: "Phytosanitary Certificate", desc: "Issued by plant quarantine authorities certifying that products are free from pests and diseases." },
  { title: "Certificate of Origin", desc: "Official document certifying the country of origin of exported goods." },
  { title: "Lab Analysis Reports", desc: "Third-party laboratory testing reports for quality, purity, and safety parameters." },
  { title: "Bill of Lading", desc: "Transport document issued by the carrier confirming receipt of goods for shipment." },
  { title: "Commercial Invoice", desc: "Detailed invoice with product descriptions, quantities, and agreed trade terms." },
  { title: "Fumigation Certificate", desc: "Certificate confirming fumigation treatment as per importing country's requirements." },
];

const Certifications = () => (
  <div className="min-h-screen pt-16 sm:pt-20">
    <section className="bg-navy-gradient py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Trust & Compliance</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4">
            Our <span className="text-gradient-gold">Certifications</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm sm:text-base">We maintain the highest standards of quality and compliance to ensure our products meet global regulatory requirements.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {certs.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <div className="bg-card rounded-lg p-5 sm:p-8 shadow-sm border border-border hover:border-gold/30 transition-colors h-full">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 sm:mb-5">
                  <cert.icon className="h-5 w-5 sm:h-7 sm:w-7 text-gold" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-2 sm:mb-3">{cert.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{cert.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-10 sm:py-16 bg-gold/5 border-y border-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-gold mx-auto mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground mb-3 sm:mb-4">100% Compliance Guaranteed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Every shipment from GlobalExim is backed by complete documentation and compliance with international trade regulations. We ensure all products meet the importing country's standards and regulatory requirements, giving you complete peace of mind.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Documentation</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">Export Documents We Provide</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {docs.map((doc, i) => (
            <AnimatedSection key={doc.title} delay={i * 0.08}>
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-card rounded-lg border border-border">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{doc.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{doc.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Certifications;
