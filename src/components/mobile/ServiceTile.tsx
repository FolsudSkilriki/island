import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ServiceTileProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  badge?: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

export const ServiceTile = ({ 
  title, 
  description, 
  icon, 
  badge, 
  href, 
  onClick, 
  external = false 
}: ServiceTileProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-card active:scale-[0.98]"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="p-3 rounded-xl bg-accent">
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm leading-tight">{title}</h3>
              {description && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {description}
                </p>
              )}
              {badge && (
                <span className="inline-block mt-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                  {badge}
                </span>
              )}
            </div>
          </div>
          <div className="ml-2">
            {external ? (
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};