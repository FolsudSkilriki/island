import { ArrowLeft, Menu, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showMenu?: boolean;
  showNotifications?: boolean;
  showSettings?: boolean;
}

export const MobileHeader = ({ 
  title = "Ísland.is", 
  showBack = false, 
  onBack, 
  showMenu = false,
  showNotifications = false,
  showSettings = false
}: MobileHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-app-header border-b border-border shadow-app">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center space-x-3">
          {showBack && (
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          {showMenu && (
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          )}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">IS</span>
            </div>
            <h1 className="text-lg font-semibold text-app-header-foreground">{title}</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          {showNotifications && (
            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>
          )}
          {showSettings && (
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};