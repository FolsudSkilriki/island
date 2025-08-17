import { useState } from "react";
import { MobileHeader } from "./MobileHeader";
import { BottomNav } from "./BottomNav";
import { ServiceTile } from "./ServiceTile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Shield, 
  FileText, 
  CreditCard, 
  Car, 
  Home,
  Baby,
  GraduationCap,
  Heart,
  Briefcase,
  Users,
  Globe,
  Plus,
  Bell
} from "lucide-react";

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

export const DashboardScreen = ({ onNavigate }: DashboardScreenProps) => {
  const [activeTab, setActiveTab] = useState("home");

  const quickServices = [
    {
      title: "Digital Mailbox",
      description: "3 new messages",
      icon: <Mail className="w-6 h-6 text-primary" />,
      badge: "3",
      screen: "mailbox"
    },
    {
      title: "Digital Certificates",
      description: "Driver's license, ID cards",
      icon: <Shield className="w-6 h-6 text-primary" />,
      screen: "certificates"
    },
    {
      title: "Applications",
      description: "Submit forms and requests",
      icon: <FileText className="w-6 h-6 text-primary" />,
      screen: "applications"
    },
    {
      title: "Tax Information",
      description: "View tax returns and payments",
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      screen: "tax"
    }
  ];

  const lifeEvents = [
    {
      title: "Having a Baby",
      icon: <Baby className="w-5 h-5" />,
      services: "4 services"
    },
    {
      title: "Moving",
      icon: <Home className="w-5 h-5" />,
      services: "6 services"
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-5 h-5" />,
      services: "8 services"
    },
    {
      title: "Working",
      icon: <Briefcase className="w-5 h-5" />,
      services: "5 services"
    }
  ];

  const recentActivity = [
    {
      title: "Digital driver's license updated",
      time: "2 hours ago",
      type: "certificate"
    },
    {
      title: "New message from Tax Authority",
      time: "1 day ago",
      type: "message"
    },
    {
      title: "Parental leave application submitted",
      time: "3 days ago", 
      type: "application"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader 
        title="Good morning, Jón"
        showNotifications={true}
        showSettings={true}
      />
      
      <div className="p-4 space-y-6">
        {/* Welcome Card */}
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1">Welcome back!</h2>
                <p className="text-primary-foreground/90 text-sm">
                  You have 3 new messages and 1 pending application
                </p>
              </div>
              <div className="relative">
                <Bell className="w-8 h-8 text-primary-foreground/80" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Services</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickServices.map((service, index) => (
              <ServiceTile
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                badge={service.badge}
                onClick={() => onNavigate(service.screen)}
              />
            ))}
          </div>
        </div>

        {/* Life Events */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Life Events</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {lifeEvents.map((event, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-card transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent">
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">{event.services}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <Card>
            <CardContent className="p-0">
              {recentActivity.map((activity, index) => (
                <div key={index} className={`p-4 ${index !== recentActivity.length - 1 ? 'border-b border-border' : ''}`}>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-accent mt-1">
                      {activity.type === 'certificate' && <Shield className="w-4 h-4" />}
                      {activity.type === 'message' && <Mail className="w-4 h-4" />}
                      {activity.type === 'application' && <FileText className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};