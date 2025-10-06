interface OrganizationIconProps {
  organization: string;
  className?: string;
}

export const OrganizationIcon = ({ organization, className = "w-12 h-12" }: OrganizationIconProps) => {
  const iconMap: Record<string, JSX.Element> = {
    "Landspítali": (
      <div className={`${className} rounded-full bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden`}>
        <svg viewBox="0 0 48 48" className="w-full h-full p-1">
          <circle cx="24" cy="24" r="20" fill="#0061ff" />
          <circle cx="24" cy="24" r="16" fill="white" />
          <circle cx="24" cy="24" r="12" fill="#dc2626" />
        </svg>
      </div>
    ),
    "Tryggingastofnun": (
      <div className={`${className} rounded-full bg-[#10b981] flex items-center justify-center p-2`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path 
            d="M24 8C15.2 8 8 15.2 8 24C8 32.8 15.2 40 24 40C32.8 40 40 32.8 40 24C40 15.2 32.8 8 24 8Z" 
            fill="#10b981" 
            stroke="white" 
            strokeWidth="3"
          />
          <path 
            d="M16 24L21 29L32 18" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    "Ríkissjóður Íslands": (
      <div className={`${className} rounded-full bg-white border-2 border-gray-200 flex items-center justify-center p-2`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path 
            d="M24 4L8 14V24C8 33 15 41 24 44C33 41 40 33 40 24V14L24 4Z" 
            fill="#1e40af" 
            stroke="#1e40af"
          />
          <circle cx="24" cy="20" r="6" fill="#dc2626" />
          <rect x="20" y="26" width="8" height="12" fill="#dc2626" />
        </svg>
      </div>
    ),
    "Þjóðskrá": (
      <div className={`${className} rounded-full bg-[#1e3a8a] flex items-center justify-center p-2`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <rect x="12" y="12" width="12" height="12" fill="white" />
          <rect x="26" y="12" width="10" height="12" fill="white" />
          <rect x="12" y="26" width="24" height="10" fill="white" />
        </svg>
      </div>
    ),
  };

  return iconMap[organization] || (
    <div className={`${className} rounded-full bg-gray-200 flex items-center justify-center`}>
      <span className="text-gray-400 text-xs">?</span>
    </div>
  );
};