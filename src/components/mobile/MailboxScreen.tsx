import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Mail } from "lucide-react";
import { OrganizationIcon } from "./OrganizationIcon";

interface MailboxScreenProps {
  onNavigate: (screen: string) => void;
}

export const MailboxScreen = ({ onNavigate }: MailboxScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const messages = [
    {
      id: 1,
      sender: "Landspítali",
      subject: "Innheimtubréf frá Landspítalanum",
      date: "13.8.2025",
      icon: "🏥"
    },
    {
      id: 2,
      sender: "Tryggingastofnun",
      subject: "Ný greiðsluáætlun frá 1. september 2025",
      date: "6.8.2025",
      icon: "💰"
    },
    {
      id: 3,
      sender: "Tryggingastofnun", 
      subject: "Greiðslustaðfesting",
      date: "1.8.2025",
      icon: "💰"
    },
    {
      id: 4,
      sender: "Ríkissjóður Íslands",
      subject: "Greiðsluseðill - Skatturinn", 
      date: "28.7.2025",
      icon: "🏛️"
    },
    {
      id: 5,
      sender: "Þjóðskrá",
      subject: "Ákvörðun Þjóðskrár um skráningu lögheimilis...",
      date: "25.7.2025", 
      icon: "📋"
    },
    {
      id: 6,
      sender: "Landspítali", 
      subject: "Innheimtubréf frá Landspítalanum",
      date: "24.7.2025",
      icon: "🏥"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Pósthólf</h1>
          <Button variant="ghost" className="text-primary">
            Velja skjöl
          </Button>
        </div>
        
        {/* Search and Filter */}
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Leita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50"
            />
          </div>
          <Button variant="outline" size="sm" className="px-3">
            <span className="mr-2">Sía</span>
            <Filter className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="px-3">
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-4 space-y-0">
        {/* Messages List */}
        <div className="divide-y divide-border">
          {messages.map((message) => (
            <div
              key={message.id} 
              className="py-4 cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => {}}
            >
              <div className="flex items-start space-x-3">
                <OrganizationIcon organization={message.sender} className="w-11 h-11" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-[15px] text-gray-600">
                      {message.sender}
                    </h3>
                    <span className="text-[15px] text-gray-600">
                      {message.date}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[17px] text-gray-900">
                    {message.subject}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};