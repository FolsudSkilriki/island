import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useState } from "react";

interface Certificate {
  id: string;
  title: string;
  number: string;
  icon: string;
  bgColor: string;
  textColor: string;
  details?: {
    fullName?: string;
    birthDate?: string;
    issueDate?: string;
    expiryDate?: string;
    additionalInfo?: string[];
  };
}

interface CertificatesScreenProps {
  onNavigate?: (screen: string) => void;
}

export const CertificatesScreen = ({ onNavigate }: CertificatesScreenProps) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: "driving-license",
      title: "Ökuskírteini",
      number: "37321371",
      icon: "🏛️",
      bgColor: "bg-pink-100",
      textColor: "text-pink-800",
      details: {
        fullName: "Tristan Sikora",
        birthDate: "07.09.2009",
        issueDate: "20.09.2024",
        expiryDate: "20.09.2027",
        additionalInfo: [
          "Kennitala: 200907-2050",
          "Útgefandi: Ríkislögreglustjóri",
          "Réttindaflokkar: B (bifreiðar)",
          "Í gildi"
        ]
      }
    },
    {
      id: "disability",
      title: "Örorkuskírteini",
      number: "0906053720",
      icon: "🤝",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      details: {
        fullName: "Hilmir Gauti Bjarnason",
        birthDate: "05.06.1990",
        issueDate: "15.03.2023",
        expiryDate: "31.12.2025",
        additionalInfo: [
          "Örorkumat: 75%",
          "Gildir fyrir öll sveitarfélög",
          "Endurnýja þarf fyrir 31.12.2025"
        ]
      }
    },
    {
      id: "health-card",
      title: "Evrópska sjúkratryggingarkortiđ",
      number: "80352000010000917127",
      icon: "🏥",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      details: {
        fullName: "Hilmir Gauti Bjarnason",
        birthDate: "05.06.1990",
        issueDate: "01.01.2023",
        expiryDate: "31.12.2025",
        additionalInfo: [
          "Gildir í öllum ESB löndum",
          "Neyðarmeðferð tryggð",
          "Sýna skal við læknismeðferð"
        ]
      }
    },
    {
      id: "passport",
      title: "Vegabréf",  
      number: "A3756901",
      icon: "📘",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
      details: {
        fullName: "Hilmir Gauti Bjarnason",
        birthDate: "05.06.1990",
        issueDate: "16.08.2023",
        expiryDate: "15.08.2028",
        additionalInfo: [
          "Íslenskt vegabréf",
          "Gilt til ferðalaga um allan heim",
          "Geyma skal örugglega"
        ]
      }
    }
  ];

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleBack = () => {
    setSelectedCertificate(null);
  };

  if (selectedCertificate) {
    return (
      <div className="flex-1 bg-background pb-20">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleBack}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Til baka</span>
          </Button>
        </div>

        {/* Certificate Detail */}
        <div className="p-6 space-y-6">
          <div className={`p-6 rounded-2xl ${selectedCertificate.bgColor}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">
                  {selectedCertificate.icon}
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${selectedCertificate.textColor}`}>
                    {selectedCertificate.title}
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className={`text-sm ${selectedCertificate.textColor} opacity-70`}>Skírteinisnúmer</p>
                <p className={`text-lg font-mono font-semibold ${selectedCertificate.textColor}`}>
                  {selectedCertificate.number}
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          {selectedCertificate.details && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Upplýsingar</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Fullt nafn</span>
                  <span className="font-medium">{selectedCertificate.details.fullName}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Fæðingardagur</span>
                  <span className="font-medium">{selectedCertificate.details.birthDate}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Útgáfudagur</span>
                  <span className="font-medium">{selectedCertificate.details.issueDate}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Gildistími</span>
                  <span className="font-medium">{selectedCertificate.details.expiryDate}</span>
                </div>
              </div>

              {selectedCertificate.details.additionalInfo && (
                <div className="mt-6">
                  <h4 className="font-medium text-foreground mb-3">Aðrar upplýsingar</h4>
                  <ul className="space-y-2">
                    {selectedCertificate.details.additionalInfo.map((info, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-background pb-20">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-3xl font-bold text-foreground">Skírteini</h1>
      </div>

      {/* Certificates List */}
      <div className="px-6 space-y-4">
        {certificates.map((certificate) => (
          <Card
            key={certificate.id}
            className={`p-5 cursor-pointer hover:shadow-lg transition-all duration-200 ${certificate.bgColor} border-0 shadow-sm`}
            onClick={() => handleCertificateClick(certificate)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">
                  {certificate.icon}
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${certificate.textColor}`}>
                    {certificate.title}
                  </h3>
                  <p className={`text-sm ${certificate.textColor} opacity-75 font-medium`}>
                    Skírteinisnúmer: {certificate.number}
                  </p>
                </div>
              </div>
              <ChevronRight className={`w-6 h-6 ${certificate.textColor} opacity-60`} />
            </div>
          </Card>
        ))}
      </div>

      {/* Last Updated */}
      <div className="px-6 pt-8 text-center">
        <p className="text-muted-foreground mb-4">
          Síđast uppfært: 19.8.2025
        </p>
        <Button variant="ghost" className="text-primary font-medium">
          Uppfæra <RotateCcw className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};