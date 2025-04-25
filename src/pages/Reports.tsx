
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, ChartBar, Power } from "lucide-react";

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <p className="text-muted-foreground">
          View and download your power consumption reports
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
            <CardDescription>March 2025</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Power Availability</span>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Power Consumption</span>
                <span className="font-medium">420 kWh</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>Download detailed reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                <div className="flex-1 text-left">
                  <div>Monthly Usage Report</div>
                  <div className="text-xs text-muted-foreground">March 2025</div>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ChartBar className="mr-2 h-4 w-4" />
                <div className="flex-1 text-left">
                  <div>Consumption Analysis</div>
                  <div className="text-xs text-muted-foreground">Q1 2025</div>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Power className="mr-2 h-4 w-4" />
                <div className="flex-1 text-left">
                  <div>Power Outage Report</div>
                  <div className="text-xs text-muted-foreground">Last 30 days</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
