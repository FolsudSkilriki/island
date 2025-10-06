import { Button } from "@/components/ui/button";
import { ChevronRight, Settings } from "lucide-react";

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export const ProfileScreen = ({ onNavigate }: ProfileScreenProps) => {
  const profileSections = [
    { id: "family", title: "Fjölskylda", icon: "👥" },
    { id: "vehicles", title: "Ökutæki", icon: "🚗" },
    { id: "properties", title: "Fasteignir", icon: "🏠" },
    { id: "finance", title: "Fjármál", icon: "📊" },
    { id: "health", title: "Heilsa", icon: "❤️" },
    { id: "flights", title: "Loftbrú", icon: "✈️" },
  ];

  return (
    <div className="flex-1 bg-white pb-20">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[32px] font-bold text-gray-900">Meira</h1>
          <button className="p-2">
            <Settings className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        {/* Profile Card */}
        <div
          className="bg-white border border-gray-200 rounded-2xl p-4 mb-6 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => onNavigate("personal-info")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-lg">HB</span>
              </div>
              <div>
                <h2 className="font-semibold text-[17px] text-gray-900">
                  Hilmir Gauti Bjarnason
                </h2>
                <p className="text-[15px] text-gray-500">090605-3720</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="px-6 grid grid-cols-2 gap-3">
        {profileSections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-4xl">{section.icon}</span>
            <span className="text-[15px] text-gray-700 font-medium">
              {section.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};