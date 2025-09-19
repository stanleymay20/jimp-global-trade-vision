import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import headerBanner from "@/assets/header-banner.jpeg";

const services = [
  {
    name: "Textile Import",
    description: "Premium fabrics and materials sourced globally, specializing in quality textiles from China and other international markets.",
    icon: Globe,
  },
  {
    name: "Institutional Supply",
    description: "Comprehensive uniform solutions for schools, ministries, and organizations across Ghana in partnership with Printex Ltd.",
    icon: Users,
  },
  {
    name: "Public Tenders",
    description: "Experienced participation in government procurement processes with a proven track record of successful tender wins.",
    icon: Award,
  },
];

const stats = [
  { id: 1, name: "Years of Experience", value: "10+" },
  { id: 2, name: "Institutions Served", value: "200+" },
  { id: 3, name: "Products Imported", value: "1000+" },
  { id: 4, name: "Successful Tenders", value: "50+" },
];

const trustBadges = [
  "AGOA Compliant",
  "Printex Partnership",
  "ISO Quality Standards",
  "Government Approved Supplier",
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-20"
            src={headerBanner}
            alt="Jimp Company Operations"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Ghana's Premier
              <span className="block text-accent">Textile Trading Partner</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Connecting local institutions with global textile markets. From premium fabric imports 
              to comprehensive uniform solutions, we deliver quality that builds trust.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-muted-foreground mb-8">Trusted by institutions across Ghana</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center justify-center">
                  <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-card">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">{badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comprehensive Trading Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From international sourcing to local delivery, we provide end-to-end textile trading services 
              that meet the highest standards of quality and reliability.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    <service.icon className="h-5 w-5 flex-none text-accent" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-subtle py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Proven Track Record
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Our numbers speak to our commitment to excellence and growth
              </p>
            </div>
            
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-background p-8 shadow-card">
                  <dt className="text-sm font-semibold leading-6 text-muted-foreground">{stat.name}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Strategic Partnership with Printex Ltd
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Our collaboration with Printex Ltd strengthens our position as a leading supplier 
                  of suiting fabrics for educational institutions across Ghana. This partnership 
                  ensures consistent quality and reliable delivery for all institutional needs.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Button variant="default" asChild>
                    <Link to="/institutional">View Institutional Solutions</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/about">About Our Partnerships</Link>
                  </Button>
                </div>
              </div>
              
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <TrendingUp className="h-8 w-8 text-accent" />
                    <h3 className="text-xl font-semibold">Partnership Benefits</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Guaranteed fabric quality standards",
                      "Streamlined procurement processes",
                      "Competitive institutional pricing", 
                      "Reliable delivery schedules",
                      "Technical support and consultation"
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
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

      {/* CTA Section */}
      <section className="hero-gradient">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary/10 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Partner with Ghana's Textile Trading Leader?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
              From single orders to large institutional contracts, we're equipped to meet your textile needs with international quality and local reliability.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}