import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import { X, CheckCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface WaitlistFormProps {
  children: React.ReactNode;
}

export function WaitlistForm({ children }: WaitlistFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "",
    role: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.occupation.trim()) {
      newErrors.occupation = "Occupation is required";
    }
    
    if (!formData.role) {
      newErrors.role = "Please select your role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // REMOVED duplicate line, using the one at the top
      const response = await fetch(`${API_URL}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      console.log("Waitlist form submitted successfully:", data);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setFormData({ name: "", email: "", occupation: "", role: "" });
      }, 3000);

    } catch (error: any) {
      console.error("Error submitting waitlist form:", error);
      
      if (error.message.includes('already on the waitlist')) {
        setErrors({ email: "This email is already registered" });
      } else {
        setErrors({ submit: error.message || "Failed to submit. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setFormData({ name: "", email: "", occupation: "", role: "" });
    setErrors({});
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-0 p-0 gap-0">
        <DialogTitle className="sr-only">Join the Waitlist</DialogTitle>
        <DialogDescription className="sr-only">
          Sign up to be notified when Jam'a launches and get early access to our AI-powered event planning platform.
        </DialogDescription>
        <Card className="border-0 shadow-2xl rounded-2xl">
          <CardHeader className="pb-4 relative">
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
            </button>
            <CardTitle 
              className="text-2xl text-center mb-2"
              style={{ color: "#9CAF88" }}
            >
              Join the Waitlist
            </CardTitle>
            <p className="text-center text-gray-600 text-sm">
              Be the first to know when Jam'a launches and get early access to our AI-powered event planning platform.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    {errors.submit}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled={isLoading}
                    className={`rounded-xl border-2 px-4 py-3 ${
                      errors.name 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 focus:border-[#9CAF88]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={isLoading}
                    className={`rounded-xl border-2 px-4 py-3 ${
                      errors.email 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 focus:border-[#9CAF88]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation" className="text-sm font-medium text-gray-900">
                    Occupation <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="occupation"
                    placeholder="What do you do professionally?"
                    value={formData.occupation}
                    onChange={(e) => handleInputChange("occupation", e.target.value)}
                    disabled={isLoading}
                    className={`rounded-xl border-2 px-4 py-3 ${
                      errors.occupation 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 focus:border-[#9CAF88]"
                    }`}
                  />
                  {errors.occupation && (
                    <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-900">
                    I am interested in Jam'a as a: <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.role}
                    onValueChange={(value: string) => handleInputChange("role", value)}
                    disabled={isLoading}
                    className="grid grid-cols-1 gap-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem 
                        value="event-planner" 
                        id="event-planner"
                        disabled={isLoading}
                        className="border-2 border-gray-300"
                        style={{
                          backgroundColor: formData.role === "event-planner" ? "#9CAF88" : "transparent"
                        }}
                      />
                      <Label 
                        htmlFor="event-planner" 
                        className="text-sm font-normal text-gray-700 cursor-pointer"
                      >
                        Event Planner - I want to plan events using Jam'a
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem 
                        value="vendor" 
                        id="vendor"
                        disabled={isLoading}
                        className="border-2 border-gray-300"
                        style={{
                          backgroundColor: formData.role === "vendor" ? "#9CAF88" : "transparent"
                        }}
                      />
                      <Label 
                        htmlFor="vendor" 
                        className="text-sm font-normal text-gray-700 cursor-pointer"
                      >
                        Vendor - I want to offer my services through Jam'a
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.role && (
                    <p className="text-red-500 text-xs mt-1">{errors.role}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full text-white rounded-full px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all mt-6 disabled:opacity-50"
                  style={{ backgroundColor: "#F88379" }}
                >
                  {isLoading ? "Submitting..." : "Submit & Join Waitlist"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                  style={{ backgroundColor: "#9CAF88" }}
                >
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Welcome to the Waitlist!
                </h3>
                <p className="text-gray-600 text-sm max-w-sm mx-auto">
                  Thank you for joining! We'll keep you updated on our progress and notify you as soon as Jam'a is ready for launch.
                </p>
                <p className="text-xs text-gray-500">
                  This dialog will close automatically in a few seconds...
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
