import { ChevronLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlightsScreenProps {
  onNavigate: (screen: string) => void;
}

export const FlightsScreen = ({ onNavigate }: FlightsScreenProps) => {
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
          Loftbrú
        </h1>
      </div>

      <div className="px-6 pt-4">
        {/* Title */}
        <h2 className="text-[28px] font-bold text-gray-900 mb-6">
          Lægra fargjald með Loftbrúi
        </h2>

        <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
          Hver einstaklingur með lögheimili innan skilgreinds svæðis á rétt á afslátti á sex flugleggium á ári. Með notkun afsláttar með Loftbrú staðfestir þú að hafa lesið notendaskilmála Loftbrúar.
        </p>

        <ul className="space-y-2 mb-6 text-[15px] text-gray-900">
          <li className="flex items-start">
            <span className="text-pink-600 mr-3">•</span>
            <span>Hver afsláttur nemur 40% af flugfargjaldi.</span>
          </li>
          <li className="flex items-start">
            <span className="text-pink-600 mr-3">•</span>
            <span>Kóðinn virkjar afslátt í bókunarvél félagsins.</span>
          </li>
        </ul>

        <Button
          variant="link"
          className="p-0 h-auto text-blue-600 text-[15px] font-medium mb-8 flex items-center"
        >
          Notendaskilmálar
          <ExternalLink className="w-4 h-4 ml-1" />
        </Button>

        {/* Info Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-[17px] font-bold text-gray-900">Enginn réttur</h3>
          </div>

          <p className="text-[15px] text-gray-700 leading-relaxed">
            Einungis íbúar landsbyggðarinnar sem eiga lögheimili fjarri höfuðborgarsvæðinu og eyjum eiga rétt á Loftbrú.
          </p>
        </div>
      </div>
    </div>
  );
};
