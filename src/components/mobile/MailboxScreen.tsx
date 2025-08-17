import { useState } from "react";
import { MobileHeader } from "./MobileHeader";
import { BottomNav } from "./BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Search, 
  Filter, 
  Paperclip, 
  Calendar,
  Building2,
  AlertCircle,
  Archive,
  Star,
  MoreVertical
} from "lucide-react";

interface MailboxScreenProps {
  onNavigate: (screen: string) => void;
}

export const MailboxScreen = ({ onNavigate }: MailboxScreenProps) => {
  const [activeTab, setActiveTab] = useState("mailbox");
  const [searchQuery, setSearchQuery] = useState("");

  const messages = [
    {
      id: 1,
      from: "Tax Authority (RSK)",
      subject: "Tax Return 2024 - Action Required",
      preview: "Your tax return for 2024 requires your attention. Please review and confirm...",
      date: "Today, 14:30",
      isNew: true,
      hasAttachment: true,
      priority: "high",
      category: "tax"
    },
    {
      id: 2,
      from: "Directorate of Immigration",
      subject: "Residence Permit Renewal Reminder",
      preview: "This is a reminder that your residence permit expires in 60 days...",
      date: "Yesterday, 09:15",
      isNew: true,
      hasAttachment: false,
      priority: "medium",
      category: "immigration"
    },
    {
      id: 3,
      from: "Social Insurance Administration",
      subject: "Child Benefits Payment Notification",
      preview: "Your child benefits payment has been processed for December 2024...",
      date: "Dec 15, 16:45",
      isNew: false,
      hasAttachment: true,
      priority: "low",
      category: "benefits"
    },
    {
      id: 4,
      from: "District Commissioner",
      subject: "Digital Certificate Renewal Available",
      preview: "Your digital certificate is eligible for renewal. You can now...",
      date: "Dec 14, 11:20",
      isNew: false,
      hasAttachment: false,
      priority: "medium",
      category: "certificates"
    },
    {
      id: 5,
      from: "Ministry of Health",
      subject: "Health Insurance Card Updated",
      preview: "Your health insurance information has been updated in our system...",
      date: "Dec 12, 08:30",
      isNew: false,
      hasAttachment: false,
      priority: "low",
      category: "health"
    }
  ];

  const filteredMessages = messages.filter(message =>
    message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const newMessagesCount = messages.filter(msg => msg.isNew).length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-error";
      case "medium": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "tax": return "💰";
      case "immigration": return "🛂";
      case "benefits": return "👨‍👩‍👧‍👦";
      case "certificates": return "📄";
      case "health": return "🏥";
      default: return "📧";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader 
        title="Digital Mailbox"
        showBack={true}
        onBack={() => onNavigate("dashboard")}
      />
      
      <div className="p-4 space-y-4">
        {/* Header Stats */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Secure Mailbox</h2>
                <p className="text-sm text-primary-foreground/90">
                  {newMessagesCount} new messages • {messages.length} total
                </p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-1" />
                <Badge variant="secondary" className="text-xs">
                  Encrypted
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="default">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages List */}
        <div className="space-y-3">
          {filteredMessages.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-medium mb-2">No messages found</h3>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search query
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredMessages.map((message) => (
              <Card 
                key={message.id} 
                className={`cursor-pointer transition-all duration-200 hover:shadow-card ${
                  message.isNew ? 'border-primary/20 bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    {/* Category Icon */}
                    <div className="text-2xl mt-1">
                      {getCategoryIcon(message.category)}
                    </div>
                    
                    {/* Message Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-medium text-sm ${message.isNew ? 'text-foreground' : 'text-foreground'}`}>
                          {message.from}
                        </h3>
                        <div className="flex items-center space-x-1">
                          {message.hasAttachment && (
                            <Paperclip className="w-3 h-3 text-muted-foreground" />
                          )}
                          <AlertCircle className={`w-3 h-3 ${getPriorityColor(message.priority)}`} />
                        </div>
                      </div>
                      
                      <h4 className={`text-sm mb-1 ${message.isNew ? 'font-semibold' : 'font-medium'}`}>
                        {message.subject}
                        {message.isNew && (
                          <Badge variant="default" className="ml-2 text-xs">New</Badge>
                        )}
                      </h4>
                      
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                        {message.preview}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {message.date}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <Archive className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <Star className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <MoreVertical className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Help Info */}
        <Card className="border-2 border-dashed border-border">
          <CardContent className="p-4">
            <div className="text-center">
              <Building2 className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <h3 className="font-medium text-sm mb-1">Secure Government Communications</h3>
              <p className="text-xs text-muted-foreground">
                All messages are encrypted and legally binding. 
                Check regularly for important updates.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={(tab) => {
        setActiveTab(tab);
        if (tab !== "mailbox") onNavigate("dashboard");
      }} />
    </div>
  );
};