import { ChevronLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HealthScreenProps {
  onNavigate: (screen: string) => void;
}

export const HealthScreen = ({ onNavigate }: HealthScreenProps) => {
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
          Heilsa
        </h1>
      </div>

      <div className="px-6 pt-4">
        {/* Title */}
        <h2 className="text-[28px] font-bold text-gray-900 mb-6">Heilsan mín</h2>

        <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
          Hér finnur þú þín heilsufarsgögn, heilsugæslu og sjúkratryggingar
        </p>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <Button
            variant="outline"
            className="w-full md:w-auto justify-start text-[15px] font-medium text-gray-700 border-gray-300 hover:bg-gray-50 h-12"
          >
            <span className="flex-1 text-left">Bólusetningar</span>
          </Button>

          <Button
            variant="outline"
            className="w-full md:w-auto justify-start text-[15px] font-medium text-gray-700 border-gray-300 hover:bg-gray-50 h-12"
          >
            <span className="flex-1 text-left">Þjálfun</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>

          <Button
            variant="outline"
            className="w-full md:w-auto justify-start text-[15px] font-medium text-gray-700 border-gray-300 hover:bg-gray-50 h-12"
          >
            <span className="flex-1 text-left">Hjálpartæki og næring</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Health Provider */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[20px] font-bold text-gray-900">Heilsugæsla</h3>
              <button className="text-blue-600 text-[15px] font-medium flex items-center">
                Sjá allt
                <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-[13px] text-gray-500 mb-1">Heilsugæsla</p>
              <p className="text-[17px] font-bold text-gray-900 mb-3">
                Heilsugæslan Urðarhvarfi
              </p>

              <p className="text-[13px] text-gray-500 mb-1">Heimilislæknir</p>
              <p className="text-[17px] font-bold text-gray-900">
                Viktor Davíð Sigurðsson
              </p>
            </div>
          </div>

          {/* Legal Status */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[20px] font-bold text-gray-900">Réttindastaða</h3>
              <button className="text-blue-600 text-[15px] font-medium flex items-center">
                Sjá allt
                <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[13px] text-gray-500 mb-1">Sjúkratrygging frá</p>
                  <p className="text-[17px] font-bold text-gray-900">9.6.2005</p>
                </div>
                <div>
                  <p className="text-[13px] text-gray-500 mb-1">Staða</p>
                  <p className="text-[17px] font-bold text-gray-900">Örorkuþegi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Medical History */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[20px] font-bold text-gray-900">Greiðsluþátttaka</h3>
              <button className="text-blue-600 text-[15px] font-medium flex items-center">
                Sjá allt
                <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
