import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Gallery data structure - add your images here
const galleryImages = [
  {
    id: 1,
    src: "/gallery/printex-collection-1.jpg",
    alt: "Printex Maa So Collection - Blue and Orange Dress",
    category: "suiting",
    title: "Printex Maa So Collection",
    description: "Elegant African print dress from our Printex partnership collection"
  },
  {
    id: 2,
    src: "/gallery/printex-collection-2.jpg",
    alt: "Printex Ohemaa Collection - Purple Dress",
    category: "suiting",
    title: "Printex Ohemaa Collection",
    description: "Premium African print fabric showcasing vibrant purple patterns"
  },
  {
    id: 3,
    src: "/gallery/printex-model-1.jpg",
    alt: "Model at Printex building with colorful dress",
    category: "suiting",
    title: "Printex Fashion Collection",
    description: "Stunning African print fashion at Printex headquarters"
  },
  {
    id: 4,
    src: "/gallery/fabric-stack-1.jpg",
    alt: "Stack of colorful African print fabrics",
    category: "suiting",
    title: "African Print Fabric Collection",
    description: "Diverse selection of colorful wax print fabrics"
  },
  {
    id: 5,
    src: "/gallery/african-print-fabric-1.jpg",
    alt: "Traditional African wax print pattern",
    category: "suiting",
    title: "Traditional Wax Print",
    description: "Vibrant multi-colored traditional African fabric patterns"
  },
  {
    id: 6,
    src: "/gallery/african-print-fabric-2.jpg",
    alt: "Colorful African wax print fabric",
    category: "suiting",
    title: "Rainbow Wax Print",
    description: "Bold African print with vibrant rainbow-inspired patterns"
  },
  {
    id: 7,
    src: "/gallery/fashion-african-print-1.jpg",
    alt: "Fashion model in yellow and purple African print",
    category: "suiting",
    title: "African Print Fashion",
    description: "Contemporary African fashion with traditional wax print designs"
  },
  {
    id: 8,
    src: "/gallery/fabric-pink-1.jpg",
    alt: "Pink patterned fabrics",
    category: "suiting",
    title: "Pink Print Fabrics",
    description: "Soft pink African print materials perfect for various occasions"
  },
  {
    id: 9,
    src: "/gallery/fabric-purple-yellow-1.jpg",
    alt: "Purple and yellow patterned fabrics",
    category: "suiting",
    title: "Purple & Yellow Print Collection",
    description: "Bold purple fabric with distinctive yellow pattern accents"
  },
  {
    id: 10,
    src: "/gallery/fabric-colorful-1.jpg",
    alt: "Red, blue and yellow fabric rolls",
    category: "suiting",
    title: "Multi-Color Fabric Rolls",
    description: "Premium quality fabric rolls in vibrant primary colors"
  },
  {
    id: 11,
    src: "/gallery/colorful-fabric-rolls-1.jpg",
    alt: "Assorted colorful fabric rolls",
    category: "suiting",
    title: "Fabric Roll Assortment",
    description: "Diverse collection of colorful fabric materials"
  },
  {
    id: 12,
    src: "/gallery/navy-white-fabric-1.jpg",
    alt: "Navy blue and white suiting fabrics",
    category: "suiting",
    title: "Navy & White Suiting",
    description: "Professional navy blue and white fabric materials"
  },
  {
    id: 13,
    src: "/gallery/fabric-shop-interior-1.jpg",
    alt: "Interior of fabric shop with colorful rolls",
    category: "suiting",
    title: "Our Fabric Selection",
    description: "Wide variety of quality fabrics in our collection"
  },
  {
    id: 14,
    src: "/gallery/fashion-model-pink-1.jpg",
    alt: "Fashion model in pink patterned outfit",
    category: "suiting",
    title: "Casual Wear Fashion",
    description: "Contemporary fashion made from quality African print materials"
  },
  {
    id: 15,
    src: "/gallery/fashion-couple-1.jpg",
    alt: "Couple in elegant black attire",
    category: "suiting",
    title: "Elegant Black Suiting",
    description: "Premium black suiting fabrics for formal occasions"
  },
  {
    id: 16,
    src: "/gallery/school-uniform-group-1.jpg",
    alt: "Group of students in blue school uniforms",
    category: "school",
    title: "School Uniform Collection",
    description: "Quality blue patterned school uniform fabrics"
  },
  {
    id: 17,
    src: "/gallery/school-uniform-student-1.jpg",
    alt: "Student in navy and white school uniform",
    category: "school",
    title: "School Uniform Materials",
    description: "Durable and comfortable school uniform fabrics"
  },
  {
    id: 18,
    src: "/gallery/school-uniform-green-1.jpg",
    alt: "Green patterned school uniform fabric",
    category: "school",
    title: "Green School Uniform Fabric",
    description: "Premium green patterned fabric for educational institutions"
  },
  {
    id: 19,
    src: "/gallery/school-uniform-blue-1.jpg",
    alt: "Blue patterned school uniform fabrics",
    category: "school",
    title: "Blue School Uniform Materials",
    description: "High-quality blue uniform fabrics for schools and institutions"
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "school", label: "School" },
  { id: "nurse", label: "Healthcare" },
  { id: "security", label: "Security" },
  { id: "suiting", label: "Suiting" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Jimp Gallery: Uniforms, Suiting & Printex Excellence
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Explore our extensive collection of institutional uniforms, premium suiting fabrics, 
              and quality textile materials from trusted global sources.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-subtle py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-smooth"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((image) => (
              <Card 
                key={image.id}
                className="group overflow-hidden cursor-pointer shadow-card hover-scale transition-smooth"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover group-hover:scale-110 transition-smooth"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ZoomIn className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2 capitalize">
                      {image.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground mb-1">{image.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <div 
            className="max-w-6xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-xl"
            />
            <div className="bg-background/95 backdrop-blur p-6 rounded-b-xl">
              <Badge variant="secondary" className="mb-2 capitalize">
                {selectedImage.category}
              </Badge>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-muted-foreground">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="hero-gradient py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Interested in Our Products?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
              Request a quote for bulk orders or institutional supply. We're ready to meet your textile needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="cta" size="lg" asChild>
                <a href="/contact">Request Quote</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                <a href="/products">View Products</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}