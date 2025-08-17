import { useState } from "react";
import { MobileHeader } from "./MobileHeader";
import { BottomNav } from "./BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  CreditCard, 
  Shield, 
  Download, 
  ExternalLink,
  Plus,
  Wallet,
  Calendar,
  CheckCircle
} from "lucide-react";

interface CertificatesScreenProps {
  onNavigate: (screen: string) => void;
}

export const CertificatesScreen = ({ onNavigate }: CertificatesScreenProps) => {
  const [activeTab, setActiveTab] = useState("certificates");

  const certificates = [
    {
      title: "Driver's License",
      type: "Driving Certificate",
      status: "Active",
      expires: "Valid until Dec 2026",
      icon: <Car className="w-6 h-6 text-primary" />,
      canAddToWallet: true,
      inWallet: false,
      lastUpdated: "Updated 2 hours ago"
    },
    {
      title: "National ID Card",
      type: "Identity Certificate", 
      status: "Active",
      expires: "Valid until Mar 2028",
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      canAddToWallet: true,
      inWallet: true,
      lastUpdated: "Updated yesterday"
    },
    {
      title: "Digital Certificate",
      type: "Electronic ID",
      status: "Active", 
      expires: "Valid until Jun 2025",
      icon: <Shield className="w-6 h-6 text-primary" />,
      canAddToWallet: false,
      inWallet: false,
      lastUpdated: "Updated 1 week ago"
    }
  ];

  const handleAddToWallet = (certTitle: string) => {
    // Simulate adding to wallet
    console.log(`Adding ${certTitle} to Apple Wallet`);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader 
        title="Digital Certificates"
        showBack={true}
        onBack={() => onNavigate("dashboard")}
      />
      
      <div className="p-4 space-y-6">
        {/* Header Info */}
        <Card className="bg-accent">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">Your Digital Certificates</h2>
                <p className="text-xs text-muted-foreground">
                  Securely stored and verified by the Icelandic government
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificates List */}
        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <Card key={index} className="shadow-card">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent">
                      {cert.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{cert.type}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={cert.status === "Active" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Validity:</span>
                  <span>{cert.expires}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last updated:</span>
                  <span>{cert.lastUpdated}</span>
                </div>

                {cert.inWallet && (
                  <div className="flex items-center space-x-2 p-3 bg-success/10 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm text-success font-medium">
                      Added to Apple Wallet
                    </span>
                  </div>
                )}
                
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  
                  {cert.canAddToWallet && !cert.inWallet && (
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleAddToWallet(cert.title)}
                    >
                      <Wallet className="w-4 h-4 mr-2" />
                      Add to Wallet
                    </Button>
                  )}
                  
                  {cert.inWallet && (
                    <Button variant="secondary" size="sm" className="flex-1">
                      <Wallet className="w-4 h-4 mr-2" />
                      In Wallet
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Certificate */}
        <Card className="border-2 border-dashed border-border cursor-pointer hover:bg-accent/50 transition-colors">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Request New Certificate</h3>
              <p className="text-sm text-muted-foreground">
                Apply for additional digital certificates
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3 text-sm">About Digital Certificates</h3>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>• Digital certificates are legally valid in Iceland</p>
              <p>• They can be used for identification and signing</p>
              <p>• Adding to Apple Wallet allows offline access</p>
              <p>• All certificates are encrypted and secure</p>
            </div>
            <Button variant="link" size="sm" className="mt-2 text-xs p-0 h-auto">
              Learn more about digital certificates
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={(tab) => {
        setActiveTab(tab);
        if (tab !== "certificates") onNavigate("dashboard");
      }} />
    </div>
  );
};