import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";

const Products = () => (
  <div className="min-h-screen pt-16 sm:pt-20">
    <section className="bg-navy-gradient py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Our Products</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4">
            Premium Export <span className="text-gradient-gold">Categories</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm sm:text-base">Explore our diverse range of high-quality Indian products ready for global markets.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.id} delay={i * 0.1}>
              <Link to={`/products/${cat.id}`} className="group block rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48 sm:h-60 overflow-hidden">
                  <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-lg sm:text-xl font-heading font-bold text-primary-foreground">{cat.name}</h3>
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-between gap-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">{cat.description}</p>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
