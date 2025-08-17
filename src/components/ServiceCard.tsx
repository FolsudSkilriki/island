import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  featured?: boolean;
}

export const ServiceCard = ({ title, description, icon, href, featured = false }: ServiceCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-service hover:-translate-y-1 ${
      featured ? 'bg-gradient-card border-primary/20' : 'bg-card'
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className={`p-3 rounded-lg ${
              featured ? 'bg-primary/10 text-primary' : 'bg-accent text-accent-foreground'
            }`}>
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};