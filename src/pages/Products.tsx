import { Link } from "react-router-dom";
import { ShoppingBag, Globe, Scissors, Shirt, Package, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const productCategories = [
  {
    name: "Imported Textile Materials",
    description: "Premium fabrics sourced globally for diverse applications",
    icon: Globe,
    badge: "International Quality",
    products: [
      "Cotton fabrics (various weights and finishes)",
      "Polyester and poly-cotton blends", 
      "Denim and canvas materials",
      "Specialty fabrics for uniforms",
      "Printed and plain textiles",
      "Waterproof and technical fabrics"
    ],
    features: ["Quality tested", "Competitive pricing", "Bulk quantities", "Custom specifications"]
  },
  {
    name: "Garment Accessories",
    description: "Complete range of sewing and garment construction accessories",
    icon: Scissors,
    badge: "Complete Solutions",
    products: [
      "Buttons (plastic, metal, wooden)",
      "Zippers and fasteners",
      "Thread and sewing supplies",
      "Elastic and trims",
      "Labels and tags",
      "Interfacing materials"
    ],
    features: ["Wide variety", "Durable quality", "Color matching", "Volume discounts"]
  },
  {
    name: "Suiting Fabrics (Printex Partnership)",
    description: "Premium suiting materials through our Printex Ltd collaboration",
    icon: Shirt,
    badge: "Printex Quality",
    products: [
      "School uniform fabrics",
      "Corporate suiting materials",
      "Government uniform textiles",
      "Institutional dress codes",
      "Custom color matching",
      "Flame-retardant options"
    ],
    features: ["Printex certified", "Institutional pricing", "Guaranteed quality", "Timely delivery"]
  }
];

const qualityStandards = [
  "ISO 9001 Quality Management",
  "OEKO-TEX Standard 100",
  "Color fastness testing",
  "Shrinkage control",
  "Durability certification",
  "Environmental compliance"
];

const sourcing = [
  {
    region: "China",
    specialties: ["Cotton fabrics", "Technical textiles", "Garment accessories"],
    advantage: "Cost-effective, high-volume production"
  },
  {
    region: "India", 
    specialties: ["Natural fibers", "Traditional textiles", "Organic materials"],
    advantage: "Quality craftsmanship, sustainable options"
  },
  {
    region: "Turkey",
    specialties: ["Premium fabrics", "Luxury textiles", "Technical materials"],
    advantage: "European quality standards, innovation"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Quality Textiles & Accessories
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Comprehensive range of imported fabrics, garment accessories, and suiting materials 
              sourced from trusted global partners and delivered with Ghanaian reliability.
            </p>
            <div className="mt-10">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Request Product Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Product Range
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From premium imported textiles to specialized institutional solutions, 
              we offer everything you need for your textile and garment requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {productCategories.map((category) => (
              <Card key={category.name} className="shadow-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <category.icon className="h-8 w-8 text-accent" />
                    <Badge variant="secondary">{category.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Products Include:</h4>
                      <ul className="space-y-2">
                        {category.products.map((product, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Package className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">Request Pricing</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="bg-subtle py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                International Quality Standards
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Every product we import meets rigorous international quality standards. 
                Our quality control processes ensure that all materials are tested and 
                certified before reaching our customers.
              </p>
              <div className="mt-8">
                <Button variant="default" asChild>
                  <Link to="/contact">Download Quality Certificates</Link>
                </Button>
              </div>
            </div>
            
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-accent" />
                  Quality Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {qualityStandards.map((standard, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{standard}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Sourcing */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Global Sourcing Network
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our established relationships with manufacturers across key textile regions 
              ensure we can source the right materials at the right prices for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {sourcing.map((source) => (
              <Card key={source.region} className="shadow-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle>{source.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Specialties:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {source.specialties.map((specialty, index) => (
                          <li key={index}>• {specialty}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Advantage:</h4>
                      <p className="text-sm text-muted-foreground">{source.advantage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Focus */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Specialized Institutional Products
                </h2>
                <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
                  Through our partnership with Printex Ltd, we offer specialized products 
                  designed specifically for institutional use. From school uniforms to 
                  government textiles, we understand the unique requirements of institutional buyers.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button variant="cta" asChild>
                    <Link to="/institutional">Institutional Solutions</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                  Institutional Benefits
                </h3>
                <ul className="space-y-4">
                  {[
                    "Volume pricing for bulk orders",
                    "Custom color matching services", 
                    "Compliance with institutional standards",
                    "Flexible payment terms",
                    "Dedicated account management",
                    "Priority delivery scheduling"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <ShoppingBag className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Source Quality Textiles?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Get access to our complete product catalog and pricing information. 
              Our team is ready to help you find the perfect materials for your project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Request Catalog & Pricing</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">Learn About Our Quality</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}