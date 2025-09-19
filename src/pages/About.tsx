import { Link } from "react-router-dom";
import { Users, Globe, Award, TrendingUp, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const values = [
  {
    name: "Quality Excellence",
    description: "We maintain the highest standards in all our textile products and services, ensuring consistent quality that builds lasting trust.",
    icon: Award,
  },
  {
    name: "Global Partnerships",
    description: "Our international network enables us to source the finest materials while maintaining competitive pricing for our clients.",
    icon: Globe,
  },
  {
    name: "Local Understanding",
    description: "Deep knowledge of Ghana's institutional needs and procurement processes gives us a unique advantage in serving our market.",
    icon: Users,
  },
  {
    name: "Innovative Solutions", 
    description: "We continuously evolve our services to meet changing market demands and deliver value-added solutions to our partners.",
    icon: TrendingUp,
  },
];

const milestones = [
  { year: "2014", event: "Founded Jimp Company Ltd" },
  { year: "2016", event: "Established China sourcing partnerships" },
  { year: "2018", event: "Formed strategic alliance with Printex Ltd" },
  { year: "2020", event: "Expanded institutional supply division" },
  { year: "2022", event: "Achieved 200+ institutional clients" },
  { year: "2024", event: "Pioneering sustainable textile solutions" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building Ghana's Textile Future
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Since our founding, Jimp Company Ltd has been dedicated to bridging the gap between 
              global textile markets and local institutional needs, creating lasting partnerships 
              that drive growth and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Story
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Jimp Company Ltd was founded with a vision to transform Ghana's textile trading landscape. 
                  Recognizing the gap between international textile quality and local accessibility, we set out 
                  to create a bridge that would benefit institutions, schools, and organizations across the country.
                </p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Our journey began with a simple commitment: to provide quality textiles at competitive prices 
                  while maintaining the highest standards of service. Today, we stand as one of Ghana's most 
                  trusted textile trading partners, with a proven track record in both private and public sector procurement.
                </p>
              </div>
              
              <div className="lg:pl-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Company Milestones</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                          {milestone.year.slice(-2)}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{milestone.year}</p>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-subtle py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-accent" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be Ghana's premier textile trading company, delivering exceptional quality products 
                  and services that exceed customer expectations while fostering sustainable growth 
                  through strategic partnerships and innovative solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-accent" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become West Africa's leading textile trading hub, connecting global markets with 
                  local opportunities, driving economic growth, and setting new standards for excellence 
                  in the textile industry across the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {values.map((value) => (
                <Card key={value.name} className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <value.icon className="h-8 w-8 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">{value.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Focus */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Strategic Partnerships Drive Our Success
                </h2>
                <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
                  Our partnership with Printex Ltd exemplifies our commitment to collaborative growth. 
                  Together, we've revolutionized uniform supply for educational institutions across Ghana, 
                  setting new standards for quality and reliability.
                </p>
                <div className="mt-8">
                  <Button variant="cta" asChild>
                    <Link to="/institutional">Explore Our Institutional Solutions</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                  Partnership Benefits
                </h3>
                <ul className="space-y-4">
                  {[
                    "Enhanced quality control processes",
                    "Expanded product range and capabilities", 
                    "Improved delivery timelines",
                    "Competitive pricing advantages",
                    "Technical expertise sharing",
                    "Market reach expansion"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Leadership & Experience
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our leadership team brings decades of combined experience in international trade, 
              textile manufacturing, and institutional procurement across Ghana and West Africa.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Executive Leadership</h3>
                <p className="text-muted-foreground">
                  Seasoned executives with deep industry knowledge and proven track records in textile trading and business development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Operations Team</h3>
                <p className="text-muted-foreground">
                  Skilled professionals managing our supply chain, quality control, and logistics operations across multiple markets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Sales & Support</h3>
                <p className="text-muted-foreground">
                  Dedicated professionals committed to understanding client needs and delivering exceptional customer service experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Partner with Ghana's Textile Trading Leader
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Join the growing list of satisfied institutions and organizations that trust 
              Jimp Company Ltd for their textile and uniform needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Start a Partnership</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}