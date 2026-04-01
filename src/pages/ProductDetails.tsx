import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { getProductById, getCategoryById } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || "");
  const category = product ? getCategoryById(product.categoryId) : null;

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-gold hover:underline">← Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="bg-muted/50 py-3 sm:py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
            <span>/</span>
            {category && (
              <>
                <Link to={`/products/${category.id}`} className="hover:text-gold transition-colors">{category.name}</Link>
                <span>/</span>
              </>
            )}
            <span className="text-foreground truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="rounded-lg overflow-hidden bg-card shadow-md">
                <img src={product.images[0]} alt={product.name} className="w-full h-56 sm:h-72 md:h-80 lg:h-[480px] object-cover" />
              </div>

              <div>
                <Link to={`/products/${product.categoryId}`} className="text-gold hover:underline text-xs sm:text-sm flex items-center gap-1 mb-3 sm:mb-4">
                  <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Back to {category?.name}
                </Link>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">{product.name}</h1>
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{product.description}</p>

                {product.specifications && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground mb-3 sm:mb-4">Specifications</h3>
                    <div className="bg-muted/50 rounded-lg overflow-hidden">
                      {Object.entries(product.specifications).map(([key, value], i) => (
                        <div key={key} className={`flex justify-between px-3 sm:px-5 py-2.5 sm:py-3 gap-2 ${i % 2 === 0 ? "bg-card" : ""}`}>
                          <span className="text-xs sm:text-sm font-medium text-foreground">{key}</span>
                          <span className="text-xs sm:text-sm text-muted-foreground text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 sm:p-6 text-center">
                  <p className="text-foreground font-medium mb-2 sm:mb-3 text-sm sm:text-base">Interested in this product?</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Contact us for pricing, samples, and custom requirements.</p>
                  <Link to="/contact" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gold-gradient text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity shadow-gold inline-flex items-center gap-2 text-sm">
                    <MessageSquare className="h-4 w-4" /> Send Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
