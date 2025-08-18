import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronRight, RefreshCw, CheckCircle, Car } from "lucide-react";
import { useState } from "react";

interface CertificatesScreenProps {
  onNavigate: (screen: string) => void;
}

export const CertificatesScreen = ({ onNavigate }: CertificatesScreenProps) => {
  const [currentView, setCurrentView] = useState<string>("main");
  
  const certificates = [
    {
      id: "disability-cert",
      title: "Örorkuskírteini", 
      number: "Skírteinsnúmer: 0906053720",
      bgColor: "bg-gradient-to-br from-green-200 to-green-300",
      textColor: "text-gray-800",
      icon: "🤝"
    },
    {
      id: "european-health",
      title: "Evrópska sjúkratryggingakortið",
      number: "Skírteinsnúmer: 80352000010000917127", 
      bgColor: "bg-gradient-to-br from-blue-200 to-blue-300",
      textColor: "text-gray-800",
      icon: "🏥"
    },
    {
      id: "passport",
      title: "Vegabréf",
      number: "Númer vegabréfs: A3756901",
      bgColor: "bg-gradient-to-br from-blue-200 to-indigo-200", 
      textColor: "text-gray-800",
      icon: "📘"
    }
  ];

  const driverLicenseDetails = {
    name: "Tristan Sikora",
    kennitala: "200907-2050",
    issuer: "Ríkislögregustjóri",
    issueDate: "20.09.2024",
    expiryDate: "20.09.2027",
    categories: [{ type: "B", dates: "20.09.2027 - 20.09.2024" }]
  };

  const disabilityCertDetails = {
    name: "Hilmir Gauti Bjarnason", 
    issuer: "Tryggingastofnun",
    expiryDate: "01.07.2072"
  };

  if (currentView === "driver-license") {
    return (
      <div className="min-h-screen bg-background pb-20">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setCurrentView("main")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold">Skírteini</h1>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Driver License Card */}
          <Card className="bg-gradient-to-br from-pink-200 to-purple-200 border-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">Ökuréttindin þín</h2>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Í gildi</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Síðast uppfært: 12:33 - 18.8.2025</p>
                </div>
                <div className="w-16 h-16 bg-gray-300 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600 text-xs">
                    Photo
                  </div>
                </div>
              </div>
              
              {/* Barcode */}
              <div className="w-full h-20 bg-white rounded-lg border-2 border-teal-400 flex items-center justify-center mb-4">
                <div className="text-xs text-gray-500">|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</div>
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="space-y-4">
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Útgáfudagur</span>
              <p className="font-semibold text-lg">{driverLicenseDetails.issueDate}</p>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Gildir til</span>
              <p className="font-semibold text-lg">{driverLicenseDetails.expiryDate}</p>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Réttindaflokkar</span>
              <div className="mt-2 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-6 bg-gray-800 text-white text-sm font-bold flex items-center justify-center rounded">
                    B
                  </div>
                  <Car className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <div className="mt-2 text-sm">
                <span className="text-gray-500">Lokadagur</span>
                <span className="font-medium ml-8">Útgáfudagur</span>
                <p className="text-sm">{driverLicenseDetails.categories[0].dates}</p>
              </div>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Skírteinsnúmer</span>
              <p className="font-semibold text-lg">37321371</p>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Fullt nafn</span>
              <p className="font-semibold text-lg">{driverLicenseDetails.name}</p>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Kennitala</span>
              <p className="font-semibold text-lg">{driverLicenseDetails.kennitala}</p>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Útgefandi</span>
              <p className="font-semibold text-lg">{driverLicenseDetails.issuer}</p>
            </div>
            <div className="py-3">
              <span className="text-sm text-gray-500">Útgáfudagur</span>
              <p className="font-semibold text-lg">{driverLicenseDetails.issueDate}</p>
            </div>
            <div className="py-3">
              <span className="text-sm text-gray-500">Gildir til</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === "disability-cert") {
    return (
      <div className="min-h-screen bg-background pb-20">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setCurrentView("main")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold">Skírteini</h1>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Disability Certificate Card */}
          <Card className="bg-gradient-to-br from-green-100 to-green-200 border-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">Örorkuskírteini þitt</h2>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Í gildi</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Síðast uppfært: 12:33 - 18.8.2025</p>
                </div>
                <div className="w-12 h-12 text-green-600">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              
              {/* Barcode */}
              <div className="w-full h-20 bg-white rounded-lg border-2 border-teal-400 flex items-center justify-center mb-4">
                <div className="text-xs text-gray-500">|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</div>
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="space-y-4">
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Fullt nafn</span>
              <p className="font-semibold text-lg">{disabilityCertDetails.name}</p>
            </div>
            <div className="py-3 border-b border-gray-200">
              <span className="text-sm text-gray-500">Útgefandi</span>
              <p className="font-semibold text-lg">{disabilityCertDetails.issuer}</p>
            </div>
            <div className="py-3">
              <span className="text-sm text-gray-500">Gildir til</span>
              <p className="font-semibold text-lg">{disabilityCertDetails.expiryDate}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main certificates screen
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Skírteini</h1>
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded" />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Loading spinner */}
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>

        {/* Certificates List */}
        <div className="space-y-4">
          {certificates.map((cert) => (
            <Card 
              key={cert.id} 
              className={`${cert.bgColor} border-0 cursor-pointer`}
              onClick={() => setCurrentView(cert.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="text-2xl">
                      {cert.icon === "🤝" && (
                        <div className="w-8 h-8 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                      )}
                      {cert.icon === "🏥" && (
                        <div className="w-8 h-8 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600" fill="currentColor">
                            <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6h5v2h2V6h1V4H4v2zm0 4h5v2H4v-2zm0 4h5v2H4v-2z"/>
                          </svg>
                        </div>
                      )}
                      {cert.icon === "📘" && (
                        <div className="w-8 h-8 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-700" fill="currentColor">
                            <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-base font-semibold ${cert.textColor} mb-1`}>
                        {cert.title}
                      </h3>
                      <p className={`text-sm ${cert.textColor} opacity-75`}>
                        {cert.number}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${cert.textColor} opacity-60`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Síðast uppfært: 18.8.2025</p>
          <Button variant="link" className="text-blue-500 mt-2 p-0">
            <RefreshCw className="w-4 h-4 mr-2" />
            Uppfæra
          </Button>
        </div>
      </div>
    </div>
  );
};