import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <section className="bg-navy-gradient py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Get In Touch</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm sm:text-base">Ready to start trading? Reach out for inquiries, quotes, or any questions.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-5 sm:mb-6">Send Us an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none text-sm sm:text-base"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 bg-gold-gradient text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity shadow-gold inline-flex items-center justify-center gap-2 disabled:opacity-50 text-sm sm:text-base"
                >
                  <Send className="h-4 w-4" /> {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-5 sm:mb-6">Contact Information</h2>
              <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
                {[
                  { icon: MapPin, label: "Address", value: "123 Trade Center, Nariman Point,\nMumbai, Maharashtra 400001, India" },
                  { icon: Phone, label: "Phone", value: "+91 98765 43210\n+91 22 4567 8900" },
                  { icon: Mail, label: "Email", value: "info@globalexim.com\nexports@globalexim.com" },
                  { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM IST" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-xs sm:text-sm">{item.label}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg overflow-hidden border border-border h-48 sm:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
