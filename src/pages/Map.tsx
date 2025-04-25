
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Battery, AlertCircle, MessageCircle, Clock } from 'lucide-react';

const Map = () => {
  const [activeTab, setActiveTab] = useState('map');

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Power Map</h2>
        <p className="text-muted-foreground">
          View power distribution and outages across your locations
        </p>
      </div>

      <Tabs defaultValue="map" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="map">Interactive Map</TabsTrigger>
          <TabsTrigger value="power-status">Power Status</TabsTrigger>
          <TabsTrigger value="outages">Outage Reports</TabsTrigger>
          <TabsTrigger value="history">Status History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="map" className="space-y-4">
          <div className="border rounded-md overflow-hidden aspect-video bg-muted/30 relative">
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
              <MapPin className="h-10 w-10 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Interactive map will be rendered here</p>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <Button size="sm" variant="secondary">
                <MapPin className="mr-2 h-4 w-4" />
                Mark My Location
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Power Available</CardTitle>
                <CardDescription>20 areas in your region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-power-green" />
                    <span>Ikeja GRA</span>
                    <Badge className="ml-auto bg-power-green border-0">10h+</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-power-green" />
                    <span>Lekki Phase 1</span>
                    <Badge className="ml-auto bg-power-green border-0">8h+</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-power-green" />
                    <span>Victoria Island</span>
                    <Badge className="ml-auto bg-power-green border-0">12h+</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Power Outages</CardTitle>
                <CardDescription>8 areas affected</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span>Surulere</span>
                    <Badge variant="outline" className="ml-auto text-red-500">4h+</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span>Ikorodu</span>
                    <Badge variant="outline" className="ml-auto text-red-500">6h+</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span>Ajah</span>
                    <Badge variant="outline" className="ml-auto text-red-500">2h+</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Scheduled Maintenance</CardTitle>
                <CardDescription>Upcoming power interruptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Yaba - Tomorrow, 9AM-2PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Maryland - Fri, 10AM-1PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Festac - Sat, 8AM-12PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="power-status" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Power Status by Location</CardTitle>
              <CardDescription>Real-time electricity status updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg bg-card/50">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-power-green/20 flex items-center justify-center">
                      <Battery className="h-5 w-5 text-power-green" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-1">Ikeja (Primary Location)</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>GRA, Ikeja, Lagos</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <Badge variant="outline" className="bg-power-green/10 text-power-green border-power-green/20">
                      Power Available
                    </Badge>
                    <span className="text-sm font-medium">18h 42m today</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg bg-card/50">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Battery className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-1">Lekki (Secondary Location)</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>Lekki Phase 1, Lagos</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                      No Power
                    </Badge>
                    <span className="text-sm font-medium">Outage: 2h 15m</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Nearby Areas</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="p-3 border rounded-md flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-power-green"></div>
                    <span className="text-sm">Maryland</span>
                  </div>
                  <div className="p-3 border rounded-md flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-power-green"></div>
                    <span className="text-sm">Opebi</span>
                  </div>
                  <div className="p-3 border rounded-md flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm">Ilupeju</span>
                  </div>
                  <div className="p-3 border rounded-md flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-power-green"></div>
                    <span className="text-sm">Allen Avenue</span>
                  </div>
                  <div className="p-3 border rounded-md flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm">Ojota</span>
                  </div>
                  <div className="p-3 border rounded-md flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-power-green"></div>
                    <span className="text-sm">Magodo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="outages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reported Outages</CardTitle>
              <CardDescription>Recent power issues reported by users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium">Lekki Phase 1</h3>
                        <Badge variant="outline" className="text-red-500">4h 20m</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Complete power outage affecting the entire street
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Reported by 12 users</span>
                        <span>Today, 08:15 AM</span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="secondary" size="sm">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          View on map
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-3.5 w-3.5 mr-1" />
                          Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium">Victoria Island</h3>
                        <Badge variant="outline" className="text-amber-500">Partial</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Low voltage, affecting electronic appliances
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Reported by 5 users</span>
                        <span>Today, 10:30 AM</span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="secondary" size="sm">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          View on map
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-3.5 w-3.5 mr-1" />
                          Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium">Ikorodu</h3>
                        <Badge variant="outline" className="text-red-500">6h 10m</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Complete blackout due to damaged transformer
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Reported by 28 users</span>
                        <span>Yesterday, 6:45 PM</span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="secondary" size="sm">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          View on map
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-3.5 w-3.5 mr-1" />
                          Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Load More Reports
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Power Status History</CardTitle>
              <CardDescription>Recent power supply history for your locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium mb-2">Today</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="mr-4 w-20 text-xs text-muted-foreground">10:42 AM</div>
                      <div className="h-full relative mr-4">
                        <div className="w-3 h-3 rounded-full bg-power-green"></div>
                        <div className="absolute top-3 bottom-0 left-1.5 -ml-px w-[1px] h-8 bg-border"></div>
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-medium">Power restored in Ikeja</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Primary location now has electricity</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 w-20 text-xs text-muted-foreground">08:15 AM</div>
                      <div className="h-full relative mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="absolute top-3 bottom-0 left-1.5 -ml-px w-[1px] h-8 bg-border"></div>
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-medium">Power outage in Lekki</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Secondary location lost electricity</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 w-20 text-xs text-muted-foreground">06:30 AM</div>
                      <div className="h-full relative mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-medium">Power outage in Ikeja</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Primary location lost electricity</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium mb-2">Yesterday</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="mr-4 w-20 text-xs text-muted-foreground">9:15 PM</div>
                      <div className="h-full relative mr-4">
                        <div className="w-3 h-3 rounded-full bg-power-green"></div>
                        <div className="absolute top-3 bottom-0 left-1.5 -ml-px w-[1px] h-8 bg-border"></div>
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-medium">Power restored in Lekki</p>
                        <p className="text-xs text-muted-foreground mt-0.5">After 3 hours of outage</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 w-20 text-xs text-muted-foreground">6:00 PM</div>
                      <div className="h-full relative mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="absolute top-3 bottom-0 left-1.5 -ml-px w-[1px] h-8 bg-border"></div>
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-medium">Power outage in Lekki</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Reported by multiple users in the area</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 w-20 text-xs text-muted-foreground">2:15 PM</div>
                      <div className="h-full relative mr-4">
                        <div className="w-3 h-3 rounded-full bg-power-yellow"></div>
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-medium">Scheduled maintenance announced</p>
                        <p className="text-xs text-muted-foreground mt-0.5">For Ikeja area on Saturday, 8AM-12PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6">
                View Full History
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Map;
