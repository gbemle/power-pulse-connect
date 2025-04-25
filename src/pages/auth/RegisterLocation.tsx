
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegisterLocation = () => {
  const [primaryLocation, setPrimaryLocation] = useState({
    address: '',
    city: '',
    state: '',
    meterNumber: '',
    locationType: 'home',
  });
  
  const [addSecondaryLocation, setAddSecondaryLocation] = useState(false);
  const [secondaryLocation, setSecondaryLocation] = useState({
    address: '',
    city: '',
    state: '',
    meterNumber: '',
    locationType: 'office',
  });
  
  const navigate = useNavigate();

  const handlePrimaryLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPrimaryLocation({
      ...primaryLocation,
      [id.replace('primary-', '')]: value,
    });
  };

  const handleSecondaryLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSecondaryLocation({
      ...secondaryLocation,
      [id.replace('secondary-', '')]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the location info to a backend
    // For now we'll just navigate to the dashboard
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 py-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-power-blue flex items-center justify-center mb-4">
            <span className="text-xl text-white">⚡</span>
          </div>
          <h1 className="text-3xl font-bold">Set Up Your Locations</h1>
          <p className="text-muted-foreground mt-2">Add locations to monitor your power connections</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-power-blue" />
                  <CardTitle>Primary Location (Home)</CardTitle>
                </div>
                <CardDescription>Enter details for your primary location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-address">Address</Label>
                  <Input
                    id="primary-address"
                    value={primaryLocation.address}
                    onChange={handlePrimaryLocationChange}
                    placeholder="Enter your street address"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-city">City</Label>
                    <Input
                      id="primary-city"
                      value={primaryLocation.city}
                      onChange={handlePrimaryLocationChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="primary-state">State</Label>
                    <Select 
                      value={primaryLocation.state}
                      onValueChange={(value) => setPrimaryLocation({...primaryLocation, state: value})}
                    >
                      <SelectTrigger id="primary-state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="kano">Kano</SelectItem>
                        <SelectItem value="ibadan">Ibadan</SelectItem>
                        <SelectItem value="kaduna">Kaduna</SelectItem>
                        <SelectItem value="portHarcourt">Port Harcourt</SelectItem>
                        <SelectItem value="benin">Benin</SelectItem>
                        <SelectItem value="enugu">Enugu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="primary-meterNumber">Meter Number (Optional)</Label>
                  <Input
                    id="primary-meterNumber"
                    value={primaryLocation.meterNumber}
                    onChange={handlePrimaryLocationChange}
                    placeholder="Enter your meter number if available"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Location Type</Label>
                  <Select 
                    value={primaryLocation.locationType}
                    onValueChange={(value) => setPrimaryLocation({...primaryLocation, locationType: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            
            {!addSecondaryLocation ? (
              <div className="flex justify-center">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setAddSecondaryLocation(true)}
                >
                  Add Secondary Location (Optional)
                </Button>
              </div>
            ) : (
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-power-green" />
                      <CardTitle>Secondary Location (Office/Business)</CardTitle>
                    </div>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setAddSecondaryLocation(false)}
                    >
                      Remove
                    </Button>
                  </div>
                  <CardDescription>Enter details for your secondary location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="secondary-address">Address</Label>
                    <Input
                      id="secondary-address"
                      value={secondaryLocation.address}
                      onChange={handleSecondaryLocationChange}
                      placeholder="Enter your street address"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="secondary-city">City</Label>
                      <Input
                        id="secondary-city"
                        value={secondaryLocation.city}
                        onChange={handleSecondaryLocationChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-state">State</Label>
                      <Select 
                        value={secondaryLocation.state}
                        onValueChange={(value) => setSecondaryLocation({...secondaryLocation, state: value})}
                      >
                        <SelectTrigger id="secondary-state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja</SelectItem>
                          <SelectItem value="kano">Kano</SelectItem>
                          <SelectItem value="ibadan">Ibadan</SelectItem>
                          <SelectItem value="kaduna">Kaduna</SelectItem>
                          <SelectItem value="portHarcourt">Port Harcourt</SelectItem>
                          <SelectItem value="benin">Benin</SelectItem>
                          <SelectItem value="enugu">Enugu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="secondary-meterNumber">Meter Number (Optional)</Label>
                    <Input
                      id="secondary-meterNumber"
                      value={secondaryLocation.meterNumber}
                      onChange={handleSecondaryLocationChange}
                      placeholder="Enter your meter number if available"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Location Type</Label>
                    <Select 
                      value={secondaryLocation.locationType}
                      onValueChange={(value) => setSecondaryLocation({...secondaryLocation, locationType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <Button type="submit" size="lg" className="w-full">
              Complete Registration
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterLocation;
