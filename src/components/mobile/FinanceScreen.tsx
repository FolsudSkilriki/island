import { ChevronLeft, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FinanceScreenProps {
  onNavigate: (screen: string) => void;
}

export const FinanceScreen = ({ onNavigate }: FinanceScreenProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const financialData = [
    {
      id: "local-fees",
      title: "Þing- og sveitarsjóðsgjöld",
      amount: "206.357 kr.",
      status: "Staða"
    },
    {
      id: "vehicle-fees",
      title: "Bifreiðagjald",
      amount: "268.841 kr.",
      status: "Staða"
    },
    {
      id: "unlicensed-vehicles",
      title: "Gjald v/óskoðaðra ökutækja",
      amount: "77.750 kr.",
      status: "Staða"
    },
    {
      id: "court-fees",
      title: "Dómsektir og sakarkostnaður",
      amount: "345.034 kr.",
      status: "Staða"
    }
  ];

  return (
    <div className="flex-1 bg-white pb-20 min-h-screen">
      {/* Header */}
      <div className="flex items-center px-4 py-4">
        <button
          onClick={() => onNavigate("profile")}
          className="flex items-center text-blue-600 -ml-2"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="text-[17px]">Meira</span>
        </button>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-[17px] font-semibold text-gray-900">
          Fjármál
        </h1>
      </div>

      <div className="px-6 pt-4">
        {/* Title */}
        <h2 className="text-[28px] font-bold text-gray-900 mb-2">Fjármál</h2>

        {/* Subtitle */}
        <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
          Staða við ríkissjóð og stofnanir
        </h3>

        <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
          Hér sérð þú sundurliðun skulda og/eða inneigna hjá ríkissjóði og stofnunum.
        </p>

        {/* Total Amount */}
        <div className="mb-6">
          <p className="text-[13px] text-gray-500 mb-1">Samtals:</p>
          <p className="text-[32px] font-bold text-gray-900">1.497.982 kr.</p>
        </div>

        {/* Analysis Button */}
        <Button
          variant="outline"
          className="w-fit mb-8 text-[15px] font-medium text-gray-700 border-gray-300 hover:bg-gray-50"
        >
          Gera greiðsluáætlun
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>

        {/* Financial Items */}
        <div className="space-y-3">
          {financialData.map((item) => (
            <div
              key={item.id}
              className="bg-blue-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleSection(item.id)}
                className="w-full p-5 flex items-center justify-between hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      expandedSections.includes(item.id) ? "rotate-180" : ""
                    }`}
                  />
                  <div className="text-left">
                    <h4 className="text-[17px] font-semibold text-gray-900">
                      {item.status}
                    </h4>
                  </div>
                </div>
                <p className="text-[17px] font-bold text-gray-900">
                  {item.amount}
                </p>
              </button>

              {expandedSections.includes(item.id) && (
                <div className="px-5 pb-5">
                  <p className="text-[15px] text-gray-700">{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
