
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
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    disco: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      disco: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would register with a backend
    // For now we'll just navigate to the second step of registration
    navigate('/auth/register-location');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 py-8">
      <div className="w-full max-w-lg space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-power-blue flex items-center justify-center mb-4">
            <span className="text-xl text-white">⚡</span>
          </div>
          <h1 className="text-3xl font-bold">Power Pulse Connect</h1>
          <p className="text-muted-foreground mt-2">Create your account to get started</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
            <CardDescription>Enter your details to register</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="disco">Select Distribution Company (DisCo)</Label>
                <Select onValueChange={handleSelectChange} value={formData.disco}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a DisCo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="ibadan">Ibadan</SelectItem>
                    <SelectItem value="ikeja">Ikeja</SelectItem>
                    <SelectItem value="eko">Eko</SelectItem>
                    <SelectItem value="kaduna">Kaduna</SelectItem>
                    <SelectItem value="kano">Kano</SelectItem>
                    <SelectItem value="yola">Yola</SelectItem>
                    <SelectItem value="enugu">Enugu</SelectItem>
                    <SelectItem value="portHarcourt">Port Harcourt</SelectItem>
                    <SelectItem value="benin">Benin</SelectItem>
                    <SelectItem value="jos">Jos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full">
                Continue
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{' '}
                <Link to="/auth/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
