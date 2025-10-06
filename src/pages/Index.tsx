import { useState } from "react";
import { AuthScreen } from "@/components/mobile/AuthScreen";
import { DashboardScreen } from "@/components/mobile/DashboardScreen";
import { CertificatesScreen } from "@/components/mobile/CertificatesScreen";
import { MailboxScreen } from "@/components/mobile/MailboxScreen";
import { ApplicationsScreen } from "@/components/mobile/ApplicationsScreen";
import { ProfileScreen } from "@/components/mobile/ProfileScreen";
import { FamilyScreen } from "@/components/mobile/FamilyScreen";
import { VehicleScreen } from "@/components/mobile/VehicleScreen";
import { PropertiesScreen } from "@/components/mobile/PropertiesScreen";
import { FinanceScreen } from "@/components/mobile/FinanceScreen";
import { HealthScreen } from "@/components/mobile/HealthScreen";
import { FlightsScreen } from "@/components/mobile/FlightsScreen";
import { PersonalInfoScreen } from "@/components/mobile/PersonalInfoScreen";
import { HomeScreen } from "@/components/mobile/HomeScreen";
import { BottomNav } from "@/components/mobile/BottomNav";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<string>("mailbox");
  const [activeTab, setActiveTab] = useState<string>("mailbox");
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);

  const handleNavigate = (screen: string) => {
    if (screen === "personal-info") {
      setShowPersonalInfo(true);
      return;
    }
    setCurrentScreen(screen);
    setActiveTab(screen);
  };

  const handleTabChange = (tab: string) => {
    if (tab === "home") {
      setActiveTab("mailbox");
      setCurrentScreen("home");
      return;
    }
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-sm mx-auto bg-white min-h-screen">
        <AuthScreen onLogin={() => setIsAuthenticated(true)} />
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen relative">
      {/* Status bar simulation */}
      <div className="h-6 bg-white" />
      
      {currentScreen === "home" && (
        <HomeScreen onNavigate={handleNavigate} />
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
      
      {currentScreen === "family" && (
        <FamilyScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "vehicles" && (
        <VehicleScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "properties" && (
        <PropertiesScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "finance" && (
        <FinanceScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "health" && (
        <HealthScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "flights" && (
        <FlightsScreen onNavigate={handleNavigate} />
      )}
      
      {showPersonalInfo && (
        <PersonalInfoScreen 
          onNavigate={handleNavigate} 
          onClose={() => setShowPersonalInfo(false)}
        />
      )}

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Index;
