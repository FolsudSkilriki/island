import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Car, Calendar, Wrench } from "lucide-react";

interface VehicleScreenProps {
  onNavigate: (screen: string) => void;
}

export const VehicleScreen = ({ onNavigate }: VehicleScreenProps) => {
  const vehicles = [
    {
      registration: "LV340",
      make: "Toyota",
      model: "Yaris Cross",
      year: "2023",
      status: "Virkt",
      nextInspection: "Desember 2025",
      color: "Hvítur"
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
          <h1 className="text-2xl font-bold">Ökutæki</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Vehicle Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Ökutækjaskrá</h2>
                <p className="text-sm text-muted-foreground">Öll þín ökutæki og tengdar upplýsingar</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Skráð ökutæki</h3>
          {vehicles.map((vehicle, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg">{vehicle.registration}</h4>
                      <p className="text-muted-foreground">{vehicle.make} {vehicle.model}</p>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      {vehicle.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Árgerð:</span>
                      <p className="font-medium">{vehicle.year}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Litur:</span>
                      <p className="font-medium">{vehicle.color}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                    <Wrench className="w-4 h-4 text-muted-foreground" />
                    <div className="text-sm">
                      <span className="text-muted-foreground">Næsta skoðun:</span>
                      <span className="font-medium ml-2">{vehicle.nextInspection}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};