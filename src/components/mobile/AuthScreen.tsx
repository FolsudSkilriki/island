import { useState } from "react";

interface AuthScreenProps {
  onLogin: () => void;
}

export const AuthScreen = ({ onLogin }: AuthScreenProps) => {
  const [pin, setPin] = useState("");
  const maxLength = 4;

  const handleNumberClick = (num: string) => {
    if (pin.length < maxLength) {
      const newPin = pin + num;
      setPin(newPin);
      
      // Auto-authenticate when PIN is complete
      if (newPin.length === maxLength) {
        setTimeout(() => {
          onLogin();
        }, 300);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const numbers = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["biometric", "0", "delete"]
  ];

  return (
    <div className="flex-1 bg-white flex flex-col items-center justify-center p-6 min-h-screen">
      {/* Logo */}
      <div className="mb-8">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="24" cy="24" r="8" fill="#0061FF" />
          <circle cx="48" cy="24" r="8" fill="#6B4FBB" />
          <circle cx="72" cy="24" r="8" fill="#9D3F9D" />
          <rect x="16" y="40" width="16" height="32" fill="#0061FF" />
          <circle cx="48" cy="56" r="8" fill="#EE3D8F" />
          <circle cx="72" cy="56" r="8" fill="#ED1C65" />
          <circle cx="48" cy="80" r="8" fill="#EE3D8F" />
          <circle cx="72" cy="80" r="8" fill="#ED1C65" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-[20px] font-semibold text-gray-900 mb-8">
        Sláðu inn 4 tölustafa PIN
      </h1>

      {/* PIN dots */}
      <div className="flex space-x-4 mb-12">
        {[...Array(maxLength)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i < pin.length ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Number pad */}
      <div className="w-full max-w-sm">
        {numbers.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6 mb-6">
            {row.map((item) => {
              if (item === "biometric") {
                return (
                  <button
                    key={item}
                    className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-2xl font-light"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="6" height="6" rx="1" />
                      <rect x="9" y="5" width="6" height="6" rx="1" />
                      <rect x="15" y="11" width="6" height="6" rx="1" />
                    </svg>
                  </button>
                );
              }
              
              if (item === "delete") {
                return (
                  <button
                    key={item}
                    onClick={handleDelete}
                    className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-600"
                    >
                      <path d="M7 7l10 10M7 17L17 7" />
                    </svg>
                  </button>
                );
              }

              return (
                <button
                  key={item}
                  onClick={() => handleNumberClick(item)}
                  className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <span className="text-blue-600 text-3xl font-light">
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};