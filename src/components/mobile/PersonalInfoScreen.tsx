import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PersonalInfoScreenProps {
  onNavigate: (screen: string) => void;
  onClose?: () => void;
}

export const PersonalInfoScreen = ({ onNavigate, onClose }: PersonalInfoScreenProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 animate-in fade-in" onClick={onClose}>
      <div 
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with handle */}
        <div className="bg-gray-200 h-1 w-24 mx-auto mt-3 rounded-full" />
        
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div />
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        <div className="px-6 pb-8">
          <h1 className="text-[28px] font-bold text-gray-900 mb-6">
            Persónuupplýsingar
          </h1>

          {/* National Registry Banner */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-center justify-between">
            <span className="text-[15px] text-gray-700">
              Þín skráning í Þjóðskrá Íslands
            </span>
            <button>
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Personal Information Sections */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="text-[13px] text-gray-500 mb-1 block">
                Fullt nafn
              </label>
              <p className="text-[17px] text-gray-900 font-semibold">
                Hilmir Gauti Bjarnason
              </p>
            </div>

            {/* Split row - Kennitala and Birth Place */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[13px] text-gray-500 mb-1 block">
                  Kennitala
                </label>
                <p className="text-[17px] text-gray-900 font-semibold">
                  090605-3720
                </p>
              </div>
              <div>
                <label className="text-[13px] text-gray-500 mb-1 block">
                  Fæðingarstaður
                </label>
                <p className="text-[17px] text-gray-900 font-semibold">
                  Fjarðabyggð
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <label className="text-[13px] text-gray-500 mb-1 block">
                Lögheimili
              </label>
              <p className="text-[17px] text-gray-900 font-semibold">
                Ótilgreint, 220 Hafnarfjörður
              </p>
            </div>

            {/* Split row - Gender and Marital Status */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
              <div>
                <label className="text-[13px] text-gray-500 mb-1 block">Kyn</label>
                <p className="text-[17px] text-gray-900 font-semibold">Karl</p>
              </div>
              <div>
                <label className="text-[13px] text-gray-500 mb-1 block">
                  Hjúskaparstaða
                </label>
                <p className="text-[17px] text-gray-900 font-semibold">Ógiftur</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <label className="text-[13px] text-gray-500 mb-1 block">
                Ríkisfang
              </label>
              <p className="text-[17px] text-gray-900 font-semibold">Ísland</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <label className="text-[13px] text-gray-500 mb-1 block">
                Trú- eða lífsskoðunarfélag
              </label>
              <p className="text-[17px] text-gray-900 font-semibold">
                Fríkirkjan í Reykjavík
              </p>
            </div>
          </div>

          {/* Settings Button */}
          <div className="mt-8">
            <Button
              variant="outline"
              className="w-full justify-center text-blue-600 border-blue-600 hover:bg-blue-50 h-12 text-[15px] font-medium"
            >
              Fara í stillingar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};