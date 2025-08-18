import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, FileText } from "lucide-react";

interface ApplicationsScreenProps {
  onNavigate: (screen: string) => void;
}

export const ApplicationsScreen = ({ onNavigate }: ApplicationsScreenProps) => {
  const pendingApplications = [
    {
      id: "LV340",
      title: "Panta númeraplötu - LV340",
      description: "Pöntun á skráningarmerki móttekin",
      date: "9.7.2025",
      status: "Afgreidd",
      icon: "🚗"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
        <h1 className="text-2xl font-bold">Umsóknir</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Pending Applications */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Afgreiddar umsóknir</h2>
          
          {pendingApplications.map((application) => (
            <Card key={application.id} className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-sm">{application.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{application.date}</span>
                      </div>
                      <h3 className="font-medium text-base mb-1">{application.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{application.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                          {application.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-3 text-primary border-primary"
                  onClick={() => {}}
                >
                  Opna umsókn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state for other applications */}
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">Engar fleiri umsóknir</h3>
          <p className="text-muted-foreground text-sm">
            Þú hefur engar aðrar umsóknir í gangi eins og er.
          </p>
        </div>
      </div>
    </div>
  );
};