import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Smartphone, 
  Shield, 
  CreditCard, 
  Eye, 
  EyeOff,
  ChevronRight 
} from "lucide-react";

interface AuthScreenProps {
  onLogin: () => void;
}

export const AuthScreen = ({ onLogin }: AuthScreenProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [kennitala, setKennitala] = useState("");
  const [password, setPassword] = useState("");

  const authMethods = [
    {
      title: "Island.is Electronic ID",
      description: "Secure identification with biometric authentication",
      icon: <Shield className="w-6 h-6 text-primary" />,
      recommended: true
    },
    {
      title: "Mobile App Authentication", 
      description: "Use another device to authenticate",
      icon: <Smartphone className="w-6 h-6 text-accent-foreground" />
    },
    {
      title: "Digital Certificate",
      description: "Smart card or USB certificate",
      icon: <CreditCard className="w-6 h-6 text-accent-foreground" />
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-8">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 rounded bg-primary-foreground flex items-center justify-center">
              <span className="text-primary font-bold text-sm">IS</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Ísland.is</h1>
          <p className="text-primary-foreground/90">
            Secure access to all government services
          </p>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-6">
        {/* Quick Login */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="kennitala">National ID (Kennitala)</Label>
              <Input
                id="kennitala"
                placeholder="000000-0000"
                value={kennitala}
                onChange={(e) => setKennitala(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <Button 
              className="w-full" 
              onClick={onLogin}
              disabled={!kennitala || !password}
            >
              Login
            </Button>
          </CardContent>
        </Card>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or choose authentication method
            </span>
          </div>
        </div>

        {/* Authentication Methods */}
        <div className="space-y-3">
          {authMethods.map((method, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-card transition-shadow"
              onClick={() => {
                if (method.recommended) onLogin();
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {method.icon}
                    <div>
                      <h3 className="font-medium text-sm">
                        {method.title}
                        {method.recommended && (
                          <span className="ml-2 px-2 py-1 text-xs bg-success/10 text-success rounded-full">
                            Recommended
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Links */}
        <div className="text-center space-y-2 text-sm text-muted-foreground">
          <Button variant="link" className="text-xs">
            Forgot password?
          </Button>
          <br />
          <Button variant="link" className="text-xs">
            Need help with authentication?
          </Button>
        </div>
      </div>
    </div>
  );
};