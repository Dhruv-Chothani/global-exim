import spicesImg from "@/assets/spices-category.jpg";
import riceImg from "@/assets/rice-category.jpg";
import fruitsImg from "@/assets/fruits-vegetables.jpg";
import teaImg from "@/assets/tea-herbs.jpg";
import textilesImg from "@/assets/textiles-category.jpg";
import pulsesImg from "@/assets/pulses-category.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  images: string[];
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  { id: "spices", name: "Spices", image: spicesImg, description: "Premium quality Indian spices sourced directly from farms" },
  { id: "rice", name: "Rice & Grains", image: riceImg, description: "Finest Basmati and non-Basmati rice varieties" },
  { id: "fruits-vegetables", name: "Fruits & Vegetables", image: fruitsImg, description: "Fresh export-quality produce from Indian farms" },
  { id: "tea-herbs", name: "Tea & Herbs", image: teaImg, description: "Aromatic teas and medicinal herbs" },
  { id: "textiles", name: "Textiles", image: textilesImg, description: "Traditional and modern Indian textiles" },
  { id: "pulses", name: "Pulses & Lentils", image: pulsesImg, description: "High-protein pulses and lentils" },
];

export const products: Product[] = [
  // Spices
  { id: "turmeric", name: "Turmeric Powder", description: "Premium Alleppey turmeric with high curcumin content. Sourced from farms in Andhra Pradesh and Tamil Nadu. Known for its vibrant golden color and strong flavor profile.", categoryId: "spices", images: [spicesImg], specifications: { "Curcumin Content": "3-5%", "Moisture": "<10%", "Origin": "Andhra Pradesh, India", "Packaging": "25kg / 50kg bags" } },
  { id: "red-chili", name: "Red Chili Powder", description: "High-quality Guntur red chili powder with rich color and heat. Available in various SHU levels for different market requirements.", categoryId: "spices", images: [spicesImg], specifications: { "SHU Range": "15,000 - 30,000", "Moisture": "<10%", "Origin": "Guntur, India", "Packaging": "25kg bags" } },
  { id: "cumin", name: "Cumin Seeds", description: "Singapore/Europe quality cumin seeds with strong aroma. Machine cleaned and sortex processed for export standards.", categoryId: "spices", images: [spicesImg], specifications: { "Purity": "99%+", "Origin": "Gujarat, India", "Packaging": "25kg jute bags" } },
  { id: "cardamom", name: "Green Cardamom", description: "Bold green cardamom from Kerala plantations. Premium 8mm+ grade with intense aroma.", categoryId: "spices", images: [spicesImg], specifications: { "Grade": "8mm Bold", "Origin": "Kerala, India" } },
  // Rice
  { id: "basmati-1121", name: "1121 Basmati Rice", description: "Extra-long grain 1121 Basmati rice, known for exceptional length after cooking. The most exported Basmati variety from India.", categoryId: "rice", images: [riceImg], specifications: { "Grain Length": "8.35mm+", "Moisture": "<12.5%", "Broken": "<2%", "Packaging": "10/25/50kg" } },
  { id: "sella-rice", name: "Sella Basmati Rice", description: "Parboiled (Sella) Basmati rice with golden hue. Retains nutrients better and offers non-sticky cooking texture.", categoryId: "rice", images: [riceImg], specifications: { "Type": "Parboiled", "Length": "7.5mm+", "Packaging": "25/50kg bags" } },
  { id: "non-basmati", name: "IR-64 Non-Basmati Rice", description: "Popular non-Basmati variety for bulk exports. Affordable and widely consumed across Africa and Middle East.", categoryId: "rice", images: [riceImg], specifications: { "Broken": "5% / 25% / 100%", "Origin": "Andhra Pradesh" } },
  // Fruits & Vegetables
  { id: "onions", name: "Fresh Red Onions", description: "Export-quality Nashik red onions known for their pungency and long shelf life. Available year-round with consistent supply chain.", categoryId: "fruits-vegetables", images: [fruitsImg], specifications: { "Size": "45-65mm", "Origin": "Nashik, Maharashtra", "Shelf Life": "60+ days" } },
  { id: "mangoes", name: "Alphonso Mangoes", description: "The king of mangoes — premium Alphonso (Hapus) mangoes from Ratnagiri. Seasonal export April-June.", categoryId: "fruits-vegetables", images: [fruitsImg], specifications: { "Season": "April - June", "Origin": "Ratnagiri, Maharashtra" } },
  { id: "potatoes", name: "Fresh Potatoes", description: "Premium quality potatoes suitable for table purpose and processing. Consistent sizing and quality.", categoryId: "fruits-vegetables", images: [fruitsImg] },
  // Tea & Herbs
  { id: "assam-tea", name: "Assam CTC Tea", description: "Strong and malty CTC tea from Assam gardens. Popular in Middle East and CIS countries for its bold liquor.", categoryId: "tea-herbs", images: [teaImg], specifications: { "Type": "CTC", "Origin": "Assam, India", "Grade": "BP/BOP/BOPSM" } },
  { id: "darjeeling-tea", name: "Darjeeling Tea", description: "The champagne of teas — premium Darjeeling orthodox tea with muscatel flavor. GI-tagged product.", categoryId: "tea-herbs", images: [teaImg] },
  // Textiles
  { id: "cotton-fabric", name: "Cotton Fabric", description: "100% Indian cotton fabric in various weaves. Suitable for garment manufacturing and home textiles.", categoryId: "textiles", images: [textilesImg] },
  { id: "silk-fabric", name: "Silk & Blended Fabrics", description: "Premium Banarasi and Kanchipuram silk fabrics. Also available in silk-cotton and silk-polyester blends.", categoryId: "textiles", images: [textilesImg] },
  // Pulses
  { id: "chickpeas", name: "Chickpeas (Kabuli Chana)", description: "Large caliber Kabuli chickpeas, machine cleaned and sortex processed. 8mm, 9mm, 10mm, 12mm sizes available.", categoryId: "pulses", images: [pulsesImg], specifications: { "Size": "8mm - 12mm", "Moisture": "<14%", "Packaging": "25/50kg PP bags" } },
  { id: "red-lentils", name: "Red Lentils (Masoor Dal)", description: "Football type and split red lentils. One of India's major pulse export products.", categoryId: "pulses", images: [pulsesImg] },
  { id: "green-mung", name: "Green Mung Beans", description: "Premium green mung beans, hand-picked and machine cleaned for export quality.", categoryId: "pulses", images: [pulsesImg] },
];

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.categoryId === categoryId);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getCategoryById = (id: string) =>
  categories.find((c) => c.id === id);
