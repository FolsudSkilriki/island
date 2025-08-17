import { SearchInput } from "@/components/ui/search-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Shield, FileText, Users } from "lucide-react";

export const HeroSection = () => {
  const quickServices = [
    { icon: <Mail className="w-5 h-5" />, label: "Digital Mailbox", featured: true },
    { icon: <Shield className="w-5 h-5" />, label: "Digital Certificates" },
    { icon: <FileText className="w-5 h-5" />, label: "Applications" },
    { icon: <Users className="w-5 h-5" />, label: "Immigration" },
  ];

  return (
    <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            All of Iceland's public services in one place
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-primary-foreground/90">
            Access government services, apply for benefits, manage documents, and more
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <SearchInput 
              placeholder="Search Ísland.is"
              className="h-14 text-base bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {quickServices.map((service, index) => (
              <Button
                key={index}
                variant="secondary"
                className={`h-auto py-4 px-4 flex-col space-y-2 ${
                  service.featured 
                    ? 'bg-white text-primary hover:bg-white/90' 
                    : 'bg-white/10 text-primary-foreground hover:bg-white/20 border-white/20'
                }`}
              >
                {service.icon}
                <span className="text-sm font-medium">{service.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};