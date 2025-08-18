import { Mail, CreditCard, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const BottomNav = ({ activeTab = "mailbox", onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: "mailbox", icon: Mail, label: "Pósthólf" },
    { id: "certificates", icon: CreditCard, label: "Skírteini" },
    { id: "center", icon: null, label: "" }, // Center logo
    { id: "applications", icon: FileText, label: "Umsóknir" },
    { id: "profile", icon: User, label: "Meira" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-app-header border-t border-border shadow-lg z-50">
      <div className="flex items-center py-2 px-2">
        {tabs.map((tab, index) => {
          if (tab.id === "center") {
            // Center logo
            return (
              <div key={tab.id} className="flex-1 flex justify-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-0.5 w-7 h-7">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></div>
                    <div className="w-1.5 h-3 bg-primary rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-purple-700 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
            );
          }

          const Icon = tab.icon!;
          const isActive = activeTab === tab.id;
          return (
            <div key={tab.id} className="flex-1 relative">
              <Button
                variant="ghost"
                size="sm"
                className={`w-full flex flex-col items-center space-y-1 h-auto py-2 px-2 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => onTabChange?.(tab.id)}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
                <span className="text-xs font-medium">{tab.label}</span>
              </Button>
              {tab.id === "mailbox" && (
                <div className="absolute top-1 right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">153</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};