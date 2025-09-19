import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Institutional Supply", href: "/institutional" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Textile Import", href: "/products" },
    { name: "School Uniforms", href: "/institutional" },
    { name: "Garment Accessories", href: "/products" },
    { name: "Public Tenders", href: "/institutional" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-12" src={logoFull} alt="Jimp Company Ltd" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-sm leading-6 text-primary-foreground/80">
              Ghana's trusted partner for quality textiles and institutional supplies. 
              Connecting local needs with global markets since our inception.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@jimpcompany.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+233 (0) 24 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary-foreground">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-primary-foreground/20 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <p className="text-xs leading-5 text-primary-foreground/60">
              &copy; {new Date().getFullYear()} Jimp Company Ltd. All rights reserved.
            </p>
            <p className="mt-4 sm:mt-0 text-xs leading-5 text-primary-foreground/60">
              Licensed textile trader and institutional supplier in Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}