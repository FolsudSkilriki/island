import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LifeEventCardProps {
  title: string;
  description: string;
  services: string[];
  illustration: string;
  color: string;
}

export const LifeEventCard = ({ title, description, services, illustration, color }: LifeEventCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-service hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {description}
            </p>
          </div>
          <div className="ml-4" style={{ color }}>
            <span className="text-4xl">{illustration}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="text-sm text-muted-foreground">
              • {service}
            </div>
          ))}
          {services.length > 3 && (
            <div className="text-sm text-muted-foreground">
              + {services.length - 3} more services
            </div>
          )}
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-primary/5 transition-colors"
        >
          View life event
          <ArrowRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};