import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, CheckCircle, AlertCircle } from "lucide-react";

interface FinanceScreenProps {
  onNavigate: (screen: string) => void;
}

export const FinanceScreen = ({ onNavigate }: FinanceScreenProps) => {
  const finances = [
    {
      institution: "Ríkisskattstjóri",
      status: "Jákvæð",
      amount: "12.450 kr",
      type: "credit",
      description: "Ofgreitt í tekjuskatt"
    },
    {
      institution: "Tryggingastofnun",
      status: "Jákvæð", 
      amount: "0 kr",
      type: "neutral",
      description: "Engin skuld"
    },
    {
      institution: "Innheimtustofnun sveitarfélaga",
      status: "Jákvæð",
      amount: "0 kr", 
      type: "neutral",
      description: "Engin skuld"
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
          <h1 className="text-2xl font-bold">Fjármál</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Finance Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Fjárhagsyfirlit</h2>
                <p className="text-sm text-muted-foreground">Staða við ríkissjóð og stofnanir</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Status */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Staða við stofnanir</h3>
          {finances.map((finance, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium">{finance.institution}</h4>
                      <p className="text-sm text-muted-foreground">{finance.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant="secondary" 
                        className={
                          finance.type === "credit" 
                            ? "bg-success/10 text-success" 
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {finance.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {finance.type === "credit" ? (
                        <CheckCircle className="w-4 h-4 text-success" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-muted-foreground" />
                      )}
                      <span className="text-sm text-muted-foreground">Staða:</span>
                    </div>
                    <span className={`font-semibold ${
                      finance.type === "credit" ? "text-success" : "text-foreground"
                    }`}>
                      {finance.amount}
                    </span>
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