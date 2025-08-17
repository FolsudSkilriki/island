import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LifeEventCard } from "@/components/LifeEventCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { 
  Mail,
  FileText,
  Shield,
  CreditCard,
  Globe,
  Building
} from "lucide-react";

const Index = () => {
  const lifeEvents = [
    {
      title: "Having a Baby",
      description: "Everything you need when expecting or welcoming a new family member",
      services: [
        "Digital application for Parental Leave",
        "Search Icelandic names", 
        "Child support",
        "Birth registration"
      ],
      illustration: "👶",
      color: "#FFB6C1"
    },
    {
      title: "Getting Older",
      description: "Services and support for seniors and retirement planning",
      services: [
        "Apply for pension",
        "Exercise for 60+",
        "Healthcare benefits",
        "Senior housing"
      ],
      illustration: "👴",
      color: "#98FB98"
    },
    {
      title: "Moving",
      description: "Relocating within Iceland or moving from abroad",
      services: [
        "Moving to Iceland",
        "Address registration",
        "Children's domicile",
        "Residence permits"
      ],
      illustration: "🏠",
      color: "#87CEEB"
    },
    {
      title: "Education",
      description: "From early childhood through higher education",
      services: [
        "School applications",
        "Student loans",
        "University admission",
        "Educational support"
      ],
      illustration: "🎓",
      color: "#DDA0DD"
    },
    {
      title: "Working",
      description: "Employment, benefits, and workplace rights",
      services: [
        "Job search assistance",
        "Unemployment benefits",
        "Work permits",
        "Professional licensing"
      ],
      illustration: "💼",
      color: "#F0E68C"
    },
    {
      title: "Health & Care",
      description: "Healthcare services and medical support",
      services: [
        "Health insurance",
        "Medical appointments",
        "Disability benefits",
        "Mental health support"
      ],
      illustration: "🏥",
      color: "#FFB347"
    }
  ];

  const digitalServices = [
    {
      title: "Digital Mailbox",
      description: "Receive official documents and communications from government institutions securely",
      icon: <Mail className="w-6 h-6" />,
      featured: true
    },
    {
      title: "Digital Certificates",
      description: "Access your digital driver's license, ID, and other official certificates",
      icon: <Shield className="w-6 h-6" />,
      featured: true
    },
    {
      title: "Applications & Forms",
      description: "Submit applications for permits, benefits, and government services online",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Tax Information",
      description: "View tax returns, make payments, and manage your tax affairs",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "Immigration Services", 
      description: "Residence permits, citizenship applications, and immigration support",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Business Services",
      description: "Register companies, manage business licenses, and access commercial services",
      icon: <Building className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Life Events Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Life Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find services organized around major life moments and transitions
            </p>
            <Button variant="outline" className="mt-6">
              See all life events
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeEvents.map((event, index) => (
              <LifeEventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Digital Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access key government services and manage your digital identity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {digitalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Ísland.is App</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Carry the government in your pocket. Access services, view certificates, and stay connected on the go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Download for iOS
              </Button>
              <Button size="lg" variant="secondary">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">IS</span>
                </div>
                <span className="text-xl font-bold text-primary">Ísland.is</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Iceland's official digital government platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Digital Mailbox</li>
                <li>Applications</li>
                <li>Certificates</li>
                <li>Life Events</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Accessibility</li>
                <li>Technical Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Digital Iceland</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Open Source</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Digital Iceland. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;