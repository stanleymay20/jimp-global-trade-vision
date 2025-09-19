import { Link } from "react-router-dom";
import { GraduationCap, Building, Award, Users, CheckCircle, Target, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  {
    name: "School Uniform Programs",
    description: "Complete uniform solutions for educational institutions across Ghana",
    icon: GraduationCap,
    badge: "Educational Focus",
    features: [
      "Custom color matching to school requirements",
      "Durable fabrics for daily school use",
      "Age-appropriate sizing and cuts",
      "Competitive institutional pricing",
      "Bulk order management",
      "Quality consistency across batches"
    ]
  },
  {
    name: "Government & Ministry Supply",
    description: "Specialized textile solutions for government institutions and ministries",
    icon: Building,
    badge: "Government Approved",
    features: [
      "Compliance with government specifications",
      "Tender participation and management",
      "Security clearance and documentation",
      "Large-scale delivery capabilities",
      "Professional service standards",
      "Flexible payment arrangements"
    ]
  },
  {
    name: "Corporate Uniforms",
    description: "Professional uniform solutions for corporate and organizational clients",
    icon: Users,
    badge: "Corporate Solutions",
    features: [
      "Brand-aligned color schemes",
      "Professional fabric selections",
      "Corporate volume discounts",
      "Consistent quality standards",
      "Timely delivery schedules",
      "Account management support"
    ]
  }
];

const successStories = [
  {
    client: "KNUST (Kwame Nkrumah University of Science and Technology)",
    project: "Student Uniform Supply Contract",
    scope: "Supplied premium uniform fabrics for over 15,000 students",
    impact: "99% client satisfaction rate, 3-year contract renewal",
    year: "2022-2024"
  },
  {
    client: "Ghana Education Service",
    project: "Regional School Uniform Initiative",
    scope: "Uniform materials for 50+ schools in Greater Accra Region",
    impact: "Improved uniform quality standards across participating schools",
    year: "2023"
  },
  {
    client: "Ministry of Health",
    project: "Medical Facility Textile Supply",
    scope: "Specialized fabrics for healthcare worker uniforms",
    impact: "Enhanced workplace safety and professional appearance",
    year: "2024"
  }
];

const tenderAdvantages = [
  "Proven track record in public procurement",
  "Competitive pricing with quality assurance",
  "Reliable delivery timelines",
  "Complete documentation and compliance",
  "Post-delivery support and warranty",
  "Flexible contract terms"
];

const institutionalBenefits = [
  {
    title: "Volume Pricing",
    description: "Significant cost savings for large institutional orders",
    icon: TrendingUp
  },
  {
    title: "Quality Assurance", 
    description: "Consistent quality standards across all product batches",
    icon: Award
  },
  {
    title: "Dedicated Support",
    description: "Assigned account managers for institutional clients",
    icon: Users
  },
  {
    title: "Flexible Terms",
    description: "Payment and delivery terms tailored to institutional needs",
    icon: FileText
  }
];

export default function Institutional() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Institutional Excellence</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Trusted Institutional Supply Partner
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              From schools to government ministries, we provide comprehensive textile solutions 
              that meet institutional standards, budgets, and timelines with unwavering reliability.
            </p>
            <div className="mt-10">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Submit Institutional RFQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comprehensive Institutional Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Specialized services designed to meet the unique needs of educational institutions, 
              government organizations, and corporate clients across Ghana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="shadow-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                    <Badge variant="secondary">{service.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Service Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">Request Information</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-subtle py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Proven Success Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our track record speaks for itself. Here are some of our notable institutional partnerships 
              and successful project deliveries across Ghana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{story.year}</Badge>
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{story.client}</CardTitle>
                  <p className="text-sm font-semibold text-accent">{story.project}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Project Scope:</h4>
                      <p className="text-sm text-muted-foreground">{story.scope}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Impact:</h4>
                      <p className="text-sm text-muted-foreground">{story.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Printex Partnership Highlight */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Strategic Partnership</Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Printex Ltd Partnership Excellence
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Our strategic partnership with Printex Ltd enhances our institutional supply capabilities, 
                  providing access to premium suiting fabrics and specialized institutional textiles 
                  that meet the highest quality standards.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button variant="default" asChild>
                    <Link to="/about">Learn About Partnership</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/products">View Printex Products</Link>
                  </Button>
                </div>
              </div>
              
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-accent" />
                    Partnership Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Access to Printex's premium fabric collections",
                      "Enhanced quality control and testing",
                      "Specialized institutional product lines",
                      "Competitive partnership pricing",
                      "Technical support and consultation",
                      "Priority production scheduling"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tender & Procurement */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Public Tender Excellence
                </h2>
                <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
                  With extensive experience in public procurement processes, we understand the 
                  complexities of government tenders and institutional purchasing requirements. 
                  Our track record demonstrates consistent success in competitive bidding environments.
                </p>
                <div className="mt-8">
                  <Button variant="cta" asChild>
                    <Link to="/contact">Tender Inquiry</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                  Our Tender Advantages
                </h3>
                <ul className="space-y-4">
                  {tenderAdvantages.map((advantage, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/90">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Benefits */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Institutions Choose Jimp Company
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We understand the unique challenges faced by institutional buyers and have developed 
              specialized services to address these needs effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {institutionalBenefits.map((benefit) => (
              <Card key={benefit.title} className="shadow-card text-center">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-subtle py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Institutional Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A streamlined approach designed to make institutional procurement simple and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "RFQ Submission", description: "Submit your requirements through our institutional portal or direct contact" },
              { step: "2", title: "Proposal Development", description: "Our team develops a comprehensive proposal with pricing and timelines" },
              { step: "3", title: "Agreement & Planning", description: "Contract finalization and detailed project planning with your team" },
              { step: "4", title: "Delivery & Support", description: "Professional delivery with ongoing support and quality assurance" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Partner with Ghana's Institutional Leader?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Join the growing list of satisfied institutions that trust Jimp Company Ltd 
              for their textile and uniform needs. Let's discuss your requirements today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Submit RFQ</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}