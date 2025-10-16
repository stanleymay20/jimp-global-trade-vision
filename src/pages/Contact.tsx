import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contactInfo = [
  {
    name: "Email",
    value: "jimpcoltd@yahoo.com",
    href: "mailto:jimpcoltd@yahoo.com",
    icon: Mail,
    description: "General inquiries and support"
  },
  {
    name: "Phone",
    value: "+233244402497",
    href: "tel:+233244402497",
    icon: Phone,
    description: "Direct line for urgent matters"
  },
  {
    name: "WhatsApp",
    value: "+233 244 402 497",
    href: "https://wa.me/233244402497",
    icon: MessageSquare,
    description: "Quick messaging and quotes"
  },
  {
    name: "Location",
    value: "Kumasi, Ghana",
    href: "https://www.google.com/maps/place/Jimp+Company+Ltd./@6.6949352,-1.6225193,17z",
    icon: MapPin,
    description: "Head office and warehouse"
  }
];

const inquiryTypes = [
  "General Information",
  "Product Catalog Request",
  "Institutional RFQ",
  "Bulk Order Inquiry",
  "Partnership Opportunity",
  "Technical Support",
  "Tender Information"
];

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
    urgency: "normal"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success("Your inquiry has been submitted successfully! We'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: "",
      urgency: "normal"
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Ready to discuss your textile needs? Our team is here to provide expert guidance, 
              competitive quotes, and tailored solutions for your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Multiple Ways to Reach Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose the communication method that works best for you. We're committed to responding promptly to all inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((contact) => (
              <Card key={contact.name} className="shadow-card text-center hover:shadow-elegant transition-smooth">
                <CardContent className="p-8">
                  <contact.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                  <a 
                    href={contact.href}
                    className="text-accent hover:text-accent/80 font-medium transition-smooth"
                    target={contact.name === "WhatsApp" ? "_blank" : "_self"}
                    rel={contact.name === "WhatsApp" ? "noopener noreferrer" : ""}
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="bg-subtle py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Send className="h-6 w-6 text-accent" />
                    Send Us Your Inquiry
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with detailed information and pricing.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="company">Company/Institution</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your organization name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+233 24 123 4567"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General inquiry</SelectItem>
                            <SelectItem value="normal">Normal - Standard response</SelectItem>
                            <SelectItem value="high">High - Urgent matter</SelectItem>
                            <SelectItem value="critical">Critical - Immediate attention</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief description of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please provide details about your textile requirements, quantities, timelines, and any specific questions you have..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar Information */}
            <div className="space-y-8">
              
              {/* Business Hours */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-accent" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-sm text-accent font-medium">
                      Emergency contacts available 24/7 for existing institutional clients
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://wa.me/233244402497" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+233244402497">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:jimpcoltd@yahoo.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Response Time */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Response Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">General Inquiries</span>
                      <span className="font-medium">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RFQ Submissions</span>
                      <span className="font-medium">48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Technical Support</span>
                      <span className="font-medium">4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Urgent Matters</span>
                      <span className="font-medium">2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Visit Our Kumasi Location
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our head office and main warehouse are strategically located in Suame, Kumasi for easy access 
              and efficient distribution across Ghana.
            </p>
          </div>
          
          <Card className="shadow-elegant overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7021486255889!2d-1.6225193!3d6.6949352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96b60ae7693d%3A0x160eb89cd1d7a1d1!2sJimp%20Company%20Ltd.!5e0!3m2!1sen!2sgh!4v1692200181234!5m2!1sen!2sgh"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jimp Company Ltd Location Map"
            />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Jimp Company Ltd</h3>
                  <p className="text-muted-foreground">P.O. Box SE 858, Suame - Kumasi, Ghana</p>
                  <Button variant="outline" size="sm" className="mt-4" asChild>
                    <a 
                      href="https://www.google.com/maps/place/Jimp+Company+Ltd./@6.6949352,-1.6225193,17z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}