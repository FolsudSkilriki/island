import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { Menu, Globe } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card shadow-card">
      <div className="container mx-auto px-4 py-4">
        {/* Top bar with language and menu */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-primary font-semibold">
              <Globe className="w-4 h-4 mr-1" />
              English
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Logo and main navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IS</span>
              </div>
              <span className="text-xl font-bold text-primary">Ísland.is</span>
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl">
            <SearchInput 
              placeholder="Search all of Iceland's public services..."
              className="w-full"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">
              Get the App
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};