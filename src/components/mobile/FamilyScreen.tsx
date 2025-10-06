import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface FamilyScreenProps {
  onNavigate: (screen: string) => void;
}

export const FamilyScreen = ({ onNavigate }: FamilyScreenProps) => {
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
          Fjölskylda
        </h1>
      </div>

      {/* Illustration and Message */}
      <div className="flex flex-col items-center justify-center px-8 mt-32">
        {/* SVG Illustration */}
        <svg
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
          className="mb-8"
        >
          {/* Family illustration with purple/pink colors matching Island.is style */}
          <circle cx="50" cy="80" r="30" fill="#E8D5F2" />
          <ellipse cx="50" cy="130" rx="35" ry="50" fill="#C5A8E0" />
          
          <circle cx="125" cy="60" r="25" fill="#F2C9E0" />
          <rect x="100" y="85" width="50" height="60" rx="10" fill="#E08FB8" />
          
          <circle cx="200" cy="90" r="28" fill="#D1A3C3" />
          <ellipse cx="200" cy="140" rx="32" ry="48" fill="#B87FA5" />
          
          <path d="M 40 200 Q 125 180 210 200" stroke="#9D6EB8" strokeWidth="3" fill="none" strokeDasharray="5,5" />
          <circle cx="80" cy="200" r="4" fill="#6B4F9D" />
          <circle cx="170" cy="200" r="4" fill="#6B4F9D" />
        </svg>

        <h2 className="text-[22px] font-bold text-gray-900 mb-4 text-center">
          Fjölskyldu upplýsingar
        </h2>
        <p className="text-[15px] text-gray-600 text-center leading-relaxed">
          Hér munu birtast upplýsingar um fjölskyldu þína frá Þjóðskrá.
        </p>
      </div>
    </div>
  );
};
