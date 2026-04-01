import { Link } from "react-router-dom";
import { Globe, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        <div className="col-span-2 sm:col-span-1">
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <Globe className="h-6 w-6 sm:h-7 sm:w-7 text-gold" />
            <span className="text-lg sm:text-xl font-heading font-bold">GLOBAL<span className="text-gold">EXIM</span></span>
          </div>
          <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
            Your trusted partner in international trade. Connecting Indian quality with global markets since 2010.
          </p>
          <div className="flex gap-3">
            {["FB", "IN", "TW", "IG"].map((label, i) => (
              <a key={i} href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors text-[10px] sm:text-xs font-bold">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gold uppercase tracking-wider mb-3 sm:mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            {["Home", "About", "Products", "Certifications", "Contact"].map((item) => (
              <Link key={item} to={`/${item === "Home" ? "" : item.toLowerCase()}`} className="text-xs sm:text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gold uppercase tracking-wider mb-3 sm:mb-4">Products</h4>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            {["Spices", "Rice & Grains", "Fruits & Veg", "Tea & Herbs", "Textiles", "Pulses"].map((item) => (
              <span key={item} className="text-xs sm:text-sm text-primary-foreground/60">{item}</span>
            ))}
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="text-xs sm:text-sm font-semibold text-gold uppercase tracking-wider mb-3 sm:mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm text-primary-foreground/60">123 Trade Center, Mumbai, Maharashtra, India - 400001</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold shrink-0" />
              <span className="text-xs sm:text-sm text-primary-foreground/60">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold shrink-0" />
              <span className="text-xs sm:text-sm text-primary-foreground/60 break-all">info@globalexim.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-[10px] sm:text-xs text-primary-foreground/40">© 2024 GlobalExim. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <span className="text-[10px] sm:text-xs text-primary-foreground/40">Privacy Policy</span>
          <span className="text-[10px] sm:text-xs text-primary-foreground/40">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
