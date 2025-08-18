import { useState } from "react";
import { DashboardScreen } from "@/components/mobile/DashboardScreen";
import { CertificatesScreen } from "@/components/mobile/CertificatesScreen";
import { MailboxScreen } from "@/components/mobile/MailboxScreen";
import { ApplicationsScreen } from "@/components/mobile/ApplicationsScreen";
import { ProfileScreen } from "@/components/mobile/ProfileScreen";
import { BottomNav } from "@/components/mobile/BottomNav";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<string>("mailbox");
  const [activeTab, setActiveTab] = useState<string>("mailbox");

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    setActiveTab(screen);
  };

  const handleTabChange = (tab: string) => {
    if (tab === "center") return; // Skip center logo
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  // Force mobile-first responsive layout
  return (
    <div className="max-w-sm mx-auto bg-background min-h-screen relative">
      {/* Status bar simulation */}
      <div className="h-6 bg-background" />
      
      {/* Welcome/Onboarding Carousel */}
      {currentScreen === "onboarding" && (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" className="text-primary">
                  <circle cx="40" cy="40" r="30" fill="currentColor" opacity="0.1" />
                  <path d="M35 45 L40 50 L50 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-navy-800">Hæ Hilmir</h2>
              <p className="text-muted-foreground text-center px-4">
                Nú sérð þú upplýsingar um ökutæki, fasteignir og fjölskyldu þína í appinu til viðbótar við skjöl og skírteini.
              </p>
            </div>
            
            {/* Carousel dots */}
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            
            <div className="space-y-4 w-full">
              <h3 className="text-lg font-semibold">Nýjast í pósthólfinu</h3>
              <div className="text-left space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg">🏥</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Landspítali</p>
                    <p className="text-sm font-semibold">Innheimtubréf frá Landspítalanum</p>
                    <p className="text-xs text-muted-foreground">13.8.2025</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Staða umsókna</h3>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">9.7.2025</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Afgreidd</span>
                  </div>
                  <h4 className="font-medium">Panta númeraplötu - LV340</h4>
                  <p className="text-sm text-muted-foreground">Pöntun á skráningarmerki móttekin</p>
                  <Button variant="link" className="p-0 h-auto text-primary text-sm mt-2">
                    Opna umsókn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {currentScreen === "mailbox" && (
        <MailboxScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "certificates" && (
        <CertificatesScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === "applications" && (
        <ApplicationsScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "profile" && (
        <ProfileScreen onNavigate={handleNavigate} />
      )}

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Index;