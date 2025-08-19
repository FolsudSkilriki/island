import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, ChevronRight } from "lucide-react";

interface HomeScreenProps {
  onNavigate?: (screen: string) => void;
}

export const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const mailboxItems = [
    {
      id: 1,
      sender: "Landspítali",
      title: "Innheimtubréf frá Landspítalanum",
      date: "13.8.2025",
      icon: "🏥"
    },
    {
      id: 2,
      sender: "Tryggingastofnun",
      title: "Ný greiðsluaðætlun frá 1. september 2025",
      date: "6.8.2025",
      icon: "💚"
    },
    {
      id: 3,
      sender: "Tryggingastofnun",
      title: "Greiðslustaðfesting",
      date: "1.8.2025",
      icon: "💚"
    }
  ];

  const applications = [
    {
      id: 1,
      title: "Panta númeraplötu - LV340",
      description: "Pöntun á skráningarmerki móttekin",
      date: "9.7.2025",
      status: "Afgreidd",
      icon: "🚗"
    }
  ];

  return (
    <div className="flex-1 bg-background overflow-y-auto pb-20">
      {/* Pagination dots */}
      <div className="flex justify-center py-4 space-x-2">
        <div className="w-8 h-2 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>

      {/* Welcome Section */}
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-6">Hæ Hilmir</h1>
        
        {/* Illustration Card */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
          <div className="flex items-center justify-between">
            <div className="flex-1 pr-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nú sérð þú upplýsingar um ökutæki, fasteignir og fjölskyldu þína í appinu til viðbótar við skjöl og skírteini.
              </p>
            </div>
            <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center">
              <div className="text-3xl">👤</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Latest in Mailbox */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Nýjast í pósthólfinu</h2>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary font-medium p-0 h-auto"
            onClick={() => onNavigate?.('mailbox')}
          >
            Sjá allt <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        <div className="space-y-3">
          {mailboxItems.map((item) => (
            <Card key={item.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">{item.sender}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <h3 className="font-medium text-foreground text-sm leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Status */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Staða umsókna</h2>
        
        <div className="space-y-3">
          {applications.map((app) => (
            <Card key={app.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">{app.date}</p>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {app.status}
                    </span>
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-1">
                    {app.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {app.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary font-medium p-0 h-auto mt-2"
                    onClick={() => onNavigate?.('applications')}
                  >
                    Opna umsókn
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};