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
      id: "disability",
      title: "Örorkuskírteini",
      number: "0906053720",
      icon: "🤝",
      bgColor: "bg-[#d4e8dc]",
      textColor: "text-[#1a4d2e]",
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
      bgColor: "bg-[#c5cce8]",
      textColor: "text-[#1e3a8a]",
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
      bgColor: "bg-[#c5cce8]",
      textColor: "text-[#1e3a8a]",
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
      <div className="flex-1 bg-white pb-20">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleBack}
            className="flex items-center space-x-1 -ml-2"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Til baka</span>
          </Button>
        </div>

        {/* Certificate Detail */}
        <div className="p-6 space-y-6">
          <div className={`p-6 rounded-2xl ${selectedCertificate.bgColor}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  {selectedCertificate.id === "disability" && (
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                        <path d="M12 2c-2.5 0-4.5 2-4.5 4.5 0 1.5.7 2.8 1.8 3.6L7 12.5c-.8.8-.8 2.1 0 2.9l2.1 2.1c.4.4 1 .4 1.4 0L12 16l1.5 1.5c.4.4 1 .4 1.4 0l2.1-2.1c.8-.8.8-2.1 0-2.9l-2.3-2.4c1.1-.8 1.8-2.1 1.8-3.6C16.5 4 14.5 2 12 2z" fill="#4ade80"/>
                        <circle cx="12" cy="6.5" r="2" fill="#fff"/>
                        <path d="M8.5 14.5c.8-.8 2.1-.8 2.9 0l.6.6.6-.6c.8-.8 2.1-.8 2.9 0" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}
                  {selectedCertificate.id === "health-card" && (
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                        <rect x="3" y="6" width="18" height="12" rx="2" fill="#3b82f6"/>
                        <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                        <rect x="6" y="4" width="12" height="2" fill="#1e40af"/>
                      </svg>
                    </div>
                  )}
                  {selectedCertificate.id === "passport" && (
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                        <rect x="4" y="2" width="16" height="20" rx="2" fill="#4338ca"/>
                        <rect x="6" y="4" width="12" height="3" fill="#fff" opacity="0.9"/>
                        <rect x="6" y="8" width="8" height="2" fill="#fff" opacity="0.7"/>
                        <rect x="6" y="11" width="10" height="1.5" fill="#fff" opacity="0.5"/>
                        <rect x="6" y="13.5" width="6" height="1.5" fill="#fff" opacity="0.5"/>
                        <circle cx="17" cy="18" r="2" fill="#fbbf24"/>
                      </svg>
                    </div>
                  )}
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
    <div className="flex-1 bg-white pb-20">
      {/* Header */}
      <div className="pt-4 px-6 pb-6">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-[32px] font-bold text-gray-900 leading-tight">Skírteini</h1>
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Certificates List */}
      <div className="px-6 space-y-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className={`p-5 cursor-pointer rounded-2xl transition-all duration-200 ${certificate.bgColor}`}
            onClick={() => handleCertificateClick(certificate)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {certificate.id === "disability" && (
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                        <path d="M12 2c-2.5 0-4.5 2-4.5 4.5 0 1.5.7 2.8 1.8 3.6L7 12.5c-.8.8-.8 2.1 0 2.9l2.1 2.1c.4.4 1 .4 1.4 0L12 16l1.5 1.5c.4.4 1 .4 1.4 0l2.1-2.1c.8-.8.8-2.1 0-2.9l-2.3-2.4c1.1-.8 1.8-2.1 1.8-3.6C16.5 4 14.5 2 12 2z" fill="#4ade80"/>
                        <circle cx="12" cy="6.5" r="2" fill="#fff"/>
                        <path d="M8.5 14.5c.8-.8 2.1-.8 2.9 0l.6.6.6-.6c.8-.8 2.1-.8 2.9 0" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}
                  {certificate.id === "health-card" && (
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                        <rect x="3" y="6" width="18" height="12" rx="2" fill="#3b82f6"/>
                        <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                        <rect x="6" y="4" width="12" height="2" fill="#1e40af"/>
                      </svg>
                    </div>
                  )}
                  {certificate.id === "passport" && (
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                        <rect x="4" y="2" width="16" height="20" rx="2" fill="#4338ca"/>
                        <rect x="6" y="4" width="12" height="3" fill="#fff" opacity="0.9"/>
                        <rect x="6" y="8" width="8" height="2" fill="#fff" opacity="0.7"/>
                        <rect x="6" y="11" width="10" height="1.5" fill="#fff" opacity="0.5"/>
                        <rect x="6" y="13.5" width="6" height="1.5" fill="#fff" opacity="0.5"/>
                        <circle cx="17" cy="18" r="2" fill="#fbbf24"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className={`font-semibold text-[17px] leading-snug mb-1 ${certificate.textColor}`}>
                    {certificate.title}
                  </h3>
                  <p className={`text-[13px] ${certificate.textColor} opacity-80`}>
                    {certificate.id === "passport" ? `Númer vegabréfs: ${certificate.number}` : `Skírteinisnúmer: ${certificate.number}`}
                  </p>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 ${certificate.textColor} opacity-50 flex-shrink-0`} />
            </div>
          </div>
        ))}
      </div>

      {/* Last Updated */}
      <div className="px-6 pt-8 text-center">
        <p className="text-gray-500 text-sm mb-3">
          Síđast uppfært: 18.8.2025
        </p>
        <button className="text-blue-600 font-medium text-[15px] inline-flex items-center gap-2 hover:underline">
          Uppfæra
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};