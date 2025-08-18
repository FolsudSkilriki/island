import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, FileText, Calendar, Pill } from "lucide-react";

interface HealthScreenProps {
  onNavigate: (screen: string) => void;
}

export const HealthScreen = ({ onNavigate }: HealthScreenProps) => {
  const healthServices = [
    {
      title: "Læknaskýrslur",
      description: "Aðgangur að þínum læknaskýrslum",
      icon: <FileText className="w-5 h-5" />,
      status: "Virkt"
    },
    {
      title: "Tímabókanir",
      description: "Bóka tíma hjá heilbrigðisþjónustu",
      icon: <Calendar className="w-5 h-5" />,
      status: "Virkt"
    },
    {
      title: "Lyfjagreiðslur",
      description: "Yfirlit yfir lyfjagreiðslur",
      icon: <Pill className="w-5 h-5" />,
      status: "Virkt"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onNavigate("profile")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Heilsa</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Health Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Heilsan mín</h2>
                <p className="text-sm text-muted-foreground">Heilsufarsupplýsingar og þjónusta</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Heilbrigðisþjónusta</h3>
          {healthServices.map((service, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    {service.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Nýleg virkni</h3>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">
                Engin nýleg virkni í heilbrigðisþjónustu
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};