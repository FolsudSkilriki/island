import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users } from "lucide-react";

interface FamilyScreenProps {
  onNavigate: (screen: string) => void;
}

export const FamilyScreen = ({ onNavigate }: FamilyScreenProps) => {
  const familyMembers = [
    {
      name: "Sigríður Helga Björnsdóttir",
      relation: "Maki",
      kennitala: "050680-2239"
    },
    {
      name: "Elín Björk Hilmisdóttir",
      relation: "Barn",
      kennitala: "161210-3340"
    },
    {
      name: "Björn Óli Hilmisson",
      relation: "Barn", 
      kennitala: "280814-2479"
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
          <h1 className="text-2xl font-bold">Fjölskylda</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Family Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Fjölskylduupplýsingar</h2>
                <p className="text-sm text-muted-foreground">Upplýsingar frá Þjóðskrá</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Hér munu birtast upplýsingar um fjölskyldu þína frá Þjóðskrá.
            </p>
          </CardContent>
        </Card>

        {/* Family Members */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Fjölskyldumeðlimir</h3>
          {familyMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h4 className="font-medium">{member.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{member.relation}</span>
                    <span className="text-sm font-mono">{member.kennitala}</span>
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