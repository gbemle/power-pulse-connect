
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, ChartLine, Power } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const Reports = () => {
  const monthlyData = [
    { name: 'Week 1', consumption: 120 },
    { name: 'Week 2', consumption: 180 },
    { name: 'Week 3', consumption: 150 },
    { name: 'Week 4', consumption: 210 },
  ];

  const dailyData = [
    { time: '00:00', usage: 30 },
    { time: '06:00', usage: 45 },
    { time: '12:00', usage: 90 },
    { time: '18:00', usage: 70 },
    { time: '23:59', usage: 40 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <p className="text-muted-foreground">
          View and download your power consumption reports
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
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
                  Download Overview
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Usage</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[200px]" config={{
                  area: {
                    theme: {
                      light: "rgba(147, 51, 234, 0.5)",
                      dark: "rgba(147, 51, 234, 0.3)"
                    }
                  }
                }}>
                  <AreaChart data={dailyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">{payload[0].payload.time}</span>
                              <span className="text-sm text-muted-foreground">Time</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">{payload[0].value} kWh</span>
                              <span className="text-sm text-muted-foreground">Usage</span>
                            </div>
                          </div>
                        </div>
                      );
                    }} />
                    <Area type="monotone" dataKey="usage" stroke="#9333ea" fill="url(#colorUsage)" />
                    <defs>
                      <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Consumption Trend</CardTitle>
              <CardDescription>Power usage over the last month</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]" config={{
                area: {
                  theme: {
                    light: "rgba(147, 51, 234, 0.5)",
                    dark: "rgba(147, 51, 234, 0.3)"
                  }
                }
              }}>
                <AreaChart data={monthlyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{payload[0].payload.name}</span>
                            <span className="text-sm text-muted-foreground">Period</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{payload[0].value} kWh</span>
                            <span className="text-sm text-muted-foreground">Consumption</span>
                          </div>
                        </div>
                      </div>
                    );
                  }} />
                  <Area type="monotone" dataKey="consumption" stroke="#9333ea" fill="url(#colorConsumption)" />
                  <defs>
                    <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
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
                  <ChartLine className="mr-2 h-4 w-4" />
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
