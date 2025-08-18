import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, Search } from "lucide-react";

interface PropertiesScreenProps {
  onNavigate: (screen: string) => void;
}

export const PropertiesScreen = ({ onNavigate }: PropertiesScreenProps) => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onNavigate("profile")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Fasteignir</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Properties Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Fasteignaskrá</h2>
                <p className="text-sm text-muted-foreground">Yfirlit yfir fasteignir</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Empty State */}
        <Card>
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Engar fasteignir fundust</h3>
            <p className="text-muted-foreground text-sm">
              Engar fasteignir finnast fyrir notanda í fasteignaskrá.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};