import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, User, ExternalLink } from "lucide-react";

interface PersonalInfoScreenProps {
  onNavigate: (screen: string) => void;
}

export const PersonalInfoScreen = ({ onNavigate }: PersonalInfoScreenProps) => {
  const userInfo = {
    name: "Hilmir Gauti Bjarnason",
    kennitala: "090605-3720",
    initials: "HB",
    birthPlace: "Fjarðabyggð",
    address: "Ótilgreint, 220 Hafnarfjörður",
    gender: "Karl",
    maritalStatus: "Ógiftur",
    nationality: "Ísland",
    religion: "Frírirkjan í Reykjavík"
  };

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
          <h1 className="text-2xl font-bold">Persónuupplýsingar</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* User Profile Header */}
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
            </div>
          </CardContent>
        </Card>

        {/* Personal Information Details */}
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <span className="text-sm text-muted-foreground">Fullt nafn</span>
                <span className="font-medium">{userInfo.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <span className="text-sm text-muted-foreground">Kennitala</span>
                <span className="font-medium">{userInfo.kennitala}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <span className="text-sm text-muted-foreground">Fæðingarstaður</span>
                <span className="font-medium">{userInfo.birthPlace}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <span className="text-sm text-muted-foreground">Lögheimili</span>
                <span className="font-medium">{userInfo.address}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <span className="text-sm text-muted-foreground">Kyn</span>
                <span className="font-medium">{userInfo.gender}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <span className="text-sm text-muted-foreground">Hjúskaparstaða</span>
                <span className="font-medium">{userInfo.maritalStatus}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-muted">
                <span className="text-sm text-muted-foreground">Ríkisfang</span>
                <span className="font-medium">{userInfo.nationality}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-muted-foreground">Trú- eða lífsskoðunarfélag</span>
                <span className="font-medium">{userInfo.religion}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Button */}
        <Card>
          <CardContent className="p-4">
            <Button 
              variant="outline" 
              className="w-full text-primary border-primary hover:bg-primary/5"
            >
              Fara í stillingar
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};