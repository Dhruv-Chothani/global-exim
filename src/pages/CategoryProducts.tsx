import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProductsByCategory, getCategoryById } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";

const CategoryProducts = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || "");
  const products = getProductsByCategory(categoryId || "");

  if (!category) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Category Not Found</h1>
          <Link to="/products" className="text-gold hover:underline">← Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <section className="relative h-48 sm:h-60 md:h-72 overflow-hidden">
        <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Link to="/products" className="text-gold hover:underline text-xs sm:text-sm flex items-center gap-1 mb-2 sm:mb-4">
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> All Categories
          </Link>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground">{category.name}</h1>
          <p className="text-primary-foreground/70 mt-1 sm:mt-2 text-xs sm:text-base">{category.description}</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <Link to={`/product/${product.id}`} className="group block rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-all">
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img src={product.images[0]} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground mb-1.5 sm:mb-2">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2 sm:mb-3">{product.description}</p>
                    <span className="text-gold text-xs sm:text-sm font-semibold inline-flex items-center gap-1 group-hover:underline">
                      View Details <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryProducts;
