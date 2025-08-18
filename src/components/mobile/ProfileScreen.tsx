import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, ChevronRight, ExternalLink, Users, Car, Home as HomeIcon, BarChart3, Heart, Plane } from "lucide-react";

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export const ProfileScreen = ({ onNavigate }: ProfileScreenProps) => {
  const userInfo = {
    name: "Hilmir Gauti Bjarnason",
    kennitala: "090605-3720",
    initials: "HB"
  };

  const serviceCategories = [
    {
      id: "family",
      title: "Fjölskylda",
      icon: <Users className="w-6 h-6 text-primary" />,
      description: "Hér munu birtast upplýsingar um fjölskyldu þína frá Þjóðskrá."
    },
    {
      id: "vehicles", 
      title: "Ökutæki",
      icon: <Car className="w-6 h-6 text-primary" />,
      description: "Öll þín ökutæki og tengdar upplýsingar."
    },
    {
      id: "properties",
      title: "Fasteignir", 
      icon: <HomeIcon className="w-6 h-6 text-primary" />,
      description: "Engar fasteignir finnast fyrir notanda"
    },
    {
      id: "finance",
      title: "Fjármál",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      description: "Staða við ríkissjóð og stofnanir"
    },
    {
      id: "health",
      title: "Heilsa",
      icon: <Heart className="w-6 h-6 text-primary" />,
      description: "Heilsan mín - upplýsingar og þjónusta"
    },
    {
      id: "flights",
      title: "Loftbrú", 
      icon: <Plane className="w-6 h-6 text-primary" />,
      description: "Lægra fargjald með Loftbrúi"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Meira</h1>
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* User Profile Card */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">{userInfo.initials}</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground">{userInfo.name}</h2>
                <p className="text-muted-foreground">{userInfo.kennitala}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-2 gap-4">
          {serviceCategories.map((category) => (
            <Card 
              key={category.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onNavigate(category.id)}
            >
              <CardContent className="p-4 text-center">
                <div className="flex justify-center mb-3">
                  {category.icon}
                </div>
                <h3 className="font-medium text-base">{category.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Persónuupplýsingar</h3>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Fullt nafn</span>
                  <span className="font-medium">{userInfo.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Kennitala</span>
                  <span className="font-medium">{userInfo.kennitala}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Fæðingarstaður</span>
                  <span className="font-medium">Fjarðabyggð</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Lögheimili</span>
                  <span className="font-medium">Ótilgreint, 220 Hafnarfjörður</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Kyn</span>
                  <span className="font-medium">Karl</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Hjúskaparstaða</span>
                  <span className="font-medium">Ógiftur</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ríkisfang</span>
                  <span className="font-medium">Ísland</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Trú- eða lífsskoðunarfélag</span>
                  <span className="font-medium">Frírirkjan í Reykjavík</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4 text-primary border-primary"
              >
                Fara í stillingar
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};