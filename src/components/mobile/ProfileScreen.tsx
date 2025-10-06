import { Button } from "@/components/ui/button";
import { ChevronRight, Settings, Users, Car, Home, BarChart3, Heart, Plane } from "lucide-react";

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export const ProfileScreen = ({ onNavigate }: ProfileScreenProps) => {
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
        <button
          onClick={() => onNavigate("family")}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-gray-50 transition-colors"
        >
          <Users className="w-10 h-10 text-blue-600" />
          <span className="text-[17px] text-gray-900 font-medium">Fjölskylda</span>
        </button>

        <button
          onClick={() => onNavigate("vehicles")}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-gray-50 transition-colors"
        >
          <Car className="w-10 h-10 text-blue-600" />
          <span className="text-[17px] text-gray-900 font-medium">Ökutæki</span>
        </button>

        <button
          onClick={() => onNavigate("properties")}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-gray-50 transition-colors"
        >
          <Home className="w-10 h-10 text-blue-600" />
          <span className="text-[17px] text-gray-900 font-medium">Fasteignir</span>
        </button>

        <button
          onClick={() => onNavigate("finance")}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-gray-50 transition-colors"
        >
          <BarChart3 className="w-10 h-10 text-blue-600" />
          <span className="text-[17px] text-gray-900 font-medium">Fjármál</span>
        </button>

        <button
          onClick={() => onNavigate("health")}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-gray-50 transition-colors"
        >
          <Heart className="w-10 h-10 text-blue-600" />
          <span className="text-[17px] text-gray-900 font-medium">Heilsa</span>
        </button>

        <button
          onClick={() => onNavigate("flights")}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:bg-gray-50 transition-colors"
        >
          <Plane className="w-10 h-10 text-blue-600" />
          <span className="text-[17px] text-gray-900 font-medium">Loftbrú</span>
        </button>
      </div>
    </div>
  );
};