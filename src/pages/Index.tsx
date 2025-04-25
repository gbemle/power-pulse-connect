
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Battery, AlertCircle, ChartBar, CreditCard, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [powerProgress, setPowerProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setPowerProgress(78), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome to Power Pulse Connect</h2>
        <p className="text-muted-foreground">
          Monitor and manage your power connections across locations
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Today's Power Status</CardTitle>
            <CardDescription>Your primary location: Ikeja</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Power supply today</span>
                <Badge variant="outline" className="bg-power-green/10 text-power-green border-power-green/20">
                  Active
                </Badge>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Power availability</span>
                  <span className="font-medium">{powerProgress}%</span>
                </div>
                <Progress value={powerProgress} className="h-2" />
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1.5">
                    <Battery className="w-3.5 h-3.5" />
                    <span>Total hours today</span>
                  </span>
                  <span className="font-medium">18h 42m</span>
                </div>
              </div>
              
              <div className="pt-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/map">
                    <MapPin className="mr-2 h-4 w-4" />
                    View on map
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Secondary Location</CardTitle>
            <CardDescription>Office location: Lekki</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Power supply today</span>
                <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                  Outage
                </Badge>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Power availability</span>
                  <span className="font-medium">32%</span>
                </div>
                <Progress value={32} className="h-2" />
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1.5">
                    <Battery className="w-3.5 h-3.5" />
                    <span>Total hours today</span>
                  </span>
                  <span className="font-medium">7h 40m</span>
                </div>
              </div>
              
              <div className="pt-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/report">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Report Outage
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
            <CardDescription>Power status updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-power-green"></div>
                <div>
                  <p className="text-sm font-medium">Power restored in Ikeja</p>
                  <p className="text-xs text-muted-foreground">Today, 10:42 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-red-500"></div>
                <div>
                  <p className="text-sm font-medium">Power outage reported in Lekki</p>
                  <p className="text-xs text-muted-foreground">Today, 8:15 AM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-power-yellow"></div>
                <div>
                  <p className="text-sm font-medium">Scheduled maintenance in Ikeja</p>
                  <p className="text-xs text-muted-foreground">Yesterday, 6:30 PM</p>
                </div>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/notifications">View all activities</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Power Consumption Analysis</CardTitle>
            <CardDescription>Monthly electricity usage report</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-muted/30 rounded-md">
              <div className="flex flex-col items-center gap-2">
                <ChartBar className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Consumption data visualization will appear here</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button variant="outline" className="ml-auto">Download Report</Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
            <CardDescription>Common tasks and reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/report">
                <AlertCircle className="mr-2 h-4 w-4" />
                Report Power Outage
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/payments">
                <CreditCard className="mr-2 h-4 w-4" />
                Pay Bill
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/messages">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/profile/locations">
                <MapPin className="mr-2 h-4 w-4" />
                Update Locations
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
