import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plane, Percent, Calendar, MapPin } from "lucide-react";

interface FlightsScreenProps {
  onNavigate: (screen: string) => void;
}

export const FlightsScreen = ({ onNavigate }: FlightsScreenProps) => {
  const discountInfo = {
    remainingFlights: 4,
    totalFlights: 6,
    validUntil: "31. desember 2025"
  };

  const recentFlights = [
    {
      route: "Reykjavík → Akureyri",
      date: "15. ágúst 2024",
      discount: "50%",
      status: "Notað"
    },
    {
      route: "Akureyri → Reykjavík", 
      date: "18. ágúst 2024",
      discount: "50%",
      status: "Notað"
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
          <h1 className="text-2xl font-bold">Loftbrú</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Flight Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Loftbrú afsláttur</h2>
                <p className="text-sm text-muted-foreground">Lægra fargjald með Loftbrúi</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Discount Status */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Afslátturinn þinn</h3>
                <Badge className="bg-primary text-primary-foreground">
                  50% afsláttur
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{discountInfo.remainingFlights}</div>
                  <div className="text-sm text-muted-foreground">Eftir af {discountInfo.totalFlights}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">Gildir til</div>
                  <div className="text-sm text-muted-foreground">{discountInfo.validUntil}</div>
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ 
                    width: `${((discountInfo.totalFlights - discountInfo.remainingFlights) / discountInfo.totalFlights) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Flights */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Nýlegar ferðir</h3>
          {recentFlights.map((flight, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{flight.route}</span>
                    </div>
                    <Badge variant="outline" className="text-success border-success">
                      {flight.status}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{flight.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Percent className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">{flight.discount} afsláttur</span>
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