import { Button } from "@/components/ui/button";

interface AuthScreenProps {
  onLogin: () => void;
}

export const AuthScreen = ({ onLogin }: AuthScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative">
      {/* Background illustration dots pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="w-full max-w-sm space-y-8 relative z-10">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="grid grid-cols-3 gap-1 w-12 h-12 mx-auto mb-8">
            <div className="bg-blue-500 rounded-sm"></div>
            <div className="bg-blue-600 rounded-sm"></div>
            <div className="bg-purple-500 rounded-sm"></div>
            <div className="bg-primary rounded-sm col-span-1 row-span-2"></div>
            <div className="bg-pink-500 rounded-sm"></div>
            <div className="bg-red-500 rounded-sm"></div>
            <div className="bg-pink-600 rounded-sm"></div>
            <div className="bg-red-600 rounded-sm"></div>
          </div>
        </div>

        {/* Main text */}
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            Skráðu þig inn í appið<br />
            með rafrænum<br />
            skilríkjum
          </h1>
        </div>

        {/* Login Button */}
        <Button 
          onClick={onLogin}
          className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90"
        >
          Skrá inn
        </Button>

        {/* Bottom links */}
        <div className="flex justify-between text-sm pt-8">
          <Button variant="ghost" className="text-primary p-0 h-auto font-normal">
            English
          </Button>
          <Button variant="ghost" className="text-primary p-0 h-auto font-normal">
            Þarftu aðstoð?
          </Button>
        </div>

        {/* Bottom illustration */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <svg width="200" height="120" viewBox="0 0 200 120" className="text-primary opacity-20">
            {/* Simple illustration shapes */}
            <circle cx="40" cy="80" r="15" fill="currentColor" />
            <rect x="80" y="70" width="30" height="20" rx="3" fill="currentColor" />
            <path d="M130 60 L160 85 L130 90 Z" fill="currentColor" />
            <circle cx="170" cy="75" r="10" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
};