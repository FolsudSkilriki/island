import { ChevronLeft } from "lucide-react";

interface PropertiesScreenProps {
  onNavigate: (screen: string) => void;
}

export const PropertiesScreen = ({ onNavigate }: PropertiesScreenProps) => {
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
          Fasteignir
        </h1>
      </div>

      {/* Illustration and Message */}
      <div className="flex flex-col items-center justify-center px-8 mt-32">
        {/* SVG Illustration */}
        <svg
          width="250"
          height="200"
          viewBox="0 0 250 200"
          fill="none"
          className="mb-8"
        >
          {/* Abstract property/architecture illustration */}
          <rect x="50" y="80" width="60" height="80" rx="4" stroke="#6B4F9D" strokeWidth="2" fill="none" />
          <rect x="140" y="60" width="70" height="100" rx="4" stroke="#6B4F9D" strokeWidth="2" fill="none" />
          
          <path d="M 50 80 L 80 50 L 110 80" stroke="#E08FB8" strokeWidth="2" fill="none" />
          <path d="M 140 60 L 175 30 L 210 60" stroke="#E08FB8" strokeWidth="2" fill="none" />
          
          <rect x="70" y="110" width="20" height="30" fill="#C5A8E0" rx="2" />
          <rect x="160" y="100" width="25" height="35" fill="#D1A3C3" rx="2" />
          
          <circle cx="175" cy="120" r="15" fill="#F2C9E0" />
          <circle cx="80" cy="90" r="12" fill="#E8D5F2" />
          
          <circle cx="220" cy="150" r="5" fill="#6B4F9D" />
          <circle cx="30" cy="130" r="4" fill="#9D6EB8" />
        </svg>

        <h2 className="text-[22px] font-bold text-gray-900 mb-4 text-center">
          Engar fasteignir finnast fyrir notanda
        </h2>
        <p className="text-[15px] text-gray-600 text-center leading-relaxed">
          Fasteignir sem skráðar eru á þig munu birtast hér.
        </p>
      </div>
    </div>
  );
};
