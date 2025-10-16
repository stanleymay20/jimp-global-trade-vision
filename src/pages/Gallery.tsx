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
    src: "/gallery/school-uniform-1.jpg",
    alt: "School uniform collection",
    category: "school",
    title: "School Uniform Collection",
    description: "Premium suiting fabrics for educational institutions"
  },
  {
    id: 2,
    src: "/gallery/nurse-uniform-1.jpg",
    alt: "Nurse uniform fabrics",
    category: "nurse",
    title: "Healthcare Uniforms",
    description: "Professional medical wear materials"
  },
  {
    id: 3,
    src: "/gallery/security-uniform-1.jpg",
    alt: "Security uniform materials",
    category: "security",
    title: "Security Uniforms",
    description: "Durable fabrics for security personnel"
  },
  {
    id: 4,
    src: "/gallery/suiting-fabric-1.jpg",
    alt: "Suiting fabrics from Printex",
    category: "suiting",
    title: "Printex Suiting Fabrics",
    description: "Premium suiting materials in partnership with Printex Ltd"
  },
  // Add more images as needed
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