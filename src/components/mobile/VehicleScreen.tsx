import { ChevronLeft, ChevronRight } from "lucide-react";

interface VehicleScreenProps {
  onNavigate: (screen: string) => void;
}

export const VehicleScreen = ({ onNavigate }: VehicleScreenProps) => {
  const vehicles = [
    {
      make: "AUDI A6",
      color: "Blár - KR597",
      inspection: "Næsta skoðun 1.7.2023",
      status: "warning"
    },
    {
      make: "CHEVROLET LACETTI",
      color: "Hvítur - IMV65",
      inspection: "Næsta skoðun 1.5.2024",
      status: "warning"
    },
    {
      make: "CITROEN C5",
      color: "Ljósbrúnn - KX272",
      inspection: "Næsta skoðun 1.2.2024",
      status: "warning"
    },
    {
      make: "MERCEDES BENZ E",
      color: "Ljósbrúnn - LV340",
      inspection: "",
      status: "ok"
    },
    {
      make: "VOLKSWAGEN VENTO GL",
      color: "Ljósgrár - NF358",
      inspection: "",
      status: "ok"
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
          Ökutæki
        </h1>
      </div>

      {/* Vehicle List */}
      <div className="px-6 pt-4 space-y-3">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[17px] font-semibold text-gray-900">
                {vehicle.make}
              </h3>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-[15px] text-gray-600 mb-2">{vehicle.color}</p>
            {vehicle.inspection && (
              <div className="flex items-center mt-3 bg-pink-50 border border-pink-200 rounded-lg px-3 py-2">
                <svg
                  className="w-5 h-5 text-pink-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[13px] text-pink-700 font-medium">
                  {vehicle.inspection}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
