import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, ChevronRight, X, Bell, SlidersHorizontal } from "lucide-react";
import { OrganizationIcon } from "./OrganizationIcon";

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
    <div className="flex-1 bg-white overflow-y-auto pb-20">
      {/* Header with icons */}
      <div className="flex items-center justify-end px-4 py-3 space-x-2">
        <Button variant="ghost" size="sm" className="relative p-2">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" />
        </Button>
        <Button variant="ghost" size="sm" className="relative p-2">
          <Bell className="w-5 h-5 text-blue-600" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></div>
        </Button>
      </div>

      {/* Welcome Section */}
      <div className="px-6 mb-6">
        <h1 className="text-[28px] font-bold text-gray-900 mb-6">Hæ Hilmir</h1>
        
        {/* Illustration Cards Row */}
        <div className="flex space-x-3 overflow-x-auto pb-2 mb-4 no-scrollbar">
          {/* Card 1 */}
          <div className="min-w-[280px] bg-gray-50 rounded-2xl p-5 flex items-center relative">
            <Button variant="ghost" size="sm" className="absolute top-3 right-3 p-1 h-auto">
              <X className="w-5 h-5 text-gray-400" />
            </Button>
            <svg viewBox="0 0 120 120" className="w-28 h-28 mr-3" fill="none">
              {/* Person on bench illustration */}
              <circle cx="30" cy="25" r="8" fill="#ec4899" />
              <ellipse cx="30" cy="40" rx="3" ry="8" fill="#9333ea" />
              <path d="M 20 50 Q 30 45 40 50" stroke="#9333ea" strokeWidth="3" fill="none" />
              <rect x="15" y="50" width="30" height="4" rx="2" fill="#9333ea" />
              <rect x="25" y="48" width="4" height="20" fill="#9333ea" />
              <rect x="35" y="48" width="4" height="20" fill="#9333ea" />
              <path d="M 75 35 Q 85 20 95 35" stroke="#9333ea" strokeWidth="3" fill="#9333ea" />
              <circle cx="45" cy="85" r="3" fill="#0061ff" />
              <circle cx="70" cy="95" r="4" fill="#0061ff" />
              <circle cx="20" cy="95" r="2" fill="#9333ea" />
            </svg>
            <p className="text-[13px] text-gray-700 leading-relaxed flex-1">
              Nú sérð þú upplýsingar um ökutæki, fasteignir og fjölskyldu þína í appinu til viðbótar við skjöl og skírteini.
            </p>
          </div>

          {/* Card 2 - Placeholder */}
          <div className="min-w-[280px] bg-gray-50 rounded-2xl p-5 flex items-center justify-center">
            <p className="text-[13px] text-gray-500">Markmið...</p>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-end space-x-2 pr-2">
          <div className="w-8 h-2 bg-pink-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
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
        
        <div className="space-y-0 bg-white divide-y divide-gray-100">
          {mailboxItems.map((item) => (
            <div key={item.id} className="py-4 px-1">
              <div className="flex items-start space-x-3">
                <OrganizationIcon organization={item.sender} className="w-11 h-11" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[13px] text-gray-500">{item.sender}</p>
                    <p className="text-[13px] text-gray-500">{item.date}</p>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-[17px] leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Status */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Staða umsókna</h2>
        
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {applications.map((app) => (
            <div key={app.id} className="p-5">
              <div className="flex items-start space-x-3">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[13px] text-gray-500">{app.date}</p>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[13px] font-semibold rounded-full">
                      {app.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-[17px] mb-1">
                    {app.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 mb-3">
                    {app.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="text-blue-600 font-semibold p-0 h-auto text-[15px]"
                    onClick={() => onNavigate?.('applications')}
                  >
                    Opna umsókn
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};