import { useState } from "react";
import { AuthScreen } from "@/components/mobile/AuthScreen";
import { DashboardScreen } from "@/components/mobile/DashboardScreen";
import { CertificatesScreen } from "@/components/mobile/CertificatesScreen";
import { MailboxScreen } from "@/components/mobile/MailboxScreen";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<string>("auth");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen("dashboard");
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  // Force mobile-first responsive layout
  return (
    <div className="max-w-sm mx-auto bg-background min-h-screen relative">
      {/* Status bar simulation */}
      <div className="h-6 bg-background" />
      
      {currentScreen === "auth" && (
        <AuthScreen onLogin={handleLogin} />
      )}
      
      {currentScreen === "dashboard" && (
        <DashboardScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "certificates" && (
        <CertificatesScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === "mailbox" && (
        <MailboxScreen onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default Index;