import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Battery, AlertCircle, MessageCircle, Clock, Navigation, Power, Compass } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Locations data
const powerLocations = {
  available: [
    { name: "Ikeja GRA", hours: "10h+", lat: 6.5758, lng: 3.3573 },
    { name: "Lekki Phase 1", hours: "8h+", lat: 6.4698, lng: 3.5852 },
    { name: "Victoria Island", hours: "12h+", lat: 6.4281, lng: 3.4208 },
    { name: "Maryland", hours: "5h+", lat: 6.5712, lng: 3.3705 },
    { name: "Opebi", hours: "7h+", lat: 6.5888, lng: 3.3596 },
    { name: "Allen Avenue", hours: "9h+", lat: 6.6011, lng: 3.3572 },
    { name: "Magodo", hours: "6h+", lat: 6.6167, lng: 3.3819 }
  ],
  outages: [
    { name: "Surulere", hours: "4h+", lat: 6.5059, lng: 3.3509 },
    { name: "Ikorodu", hours: "6h+", lat: 6.6194, lng: 3.5105 },
    { name: "Ajah", hours: "2h+", lat: 6.4698, lng: 3.5683 },
    { name: "Ilupeju", hours: "3h+", lat: 6.5526, lng: 3.3573 },
    { name: "Ojota", hours: "5h+", lat: 6.5830, lng: 3.3778 }
  ],
  maintenance: [
    { name: "Yaba", time: "Tomorrow, 9AM-2PM", lat: 6.5172, lng: 3.3855 },
    { name: "Maryland", time: "Fri, 10AM-1PM", lat: 6.5712, lng: 3.3705 },
    { name: "Festac", time: "Sat, 8AM-12PM", lat: 6.4698, lng: 3.2683 }
  ]
};

const Map = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSubmitted, setTokenSubmitted] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setTokenSubmitted(true);
      toast.success("Mapbox token added", {
        description: "Map will be loaded with your token"
      });
    } else {
      toast.error("Please enter a valid token");
    }
  };

  useEffect(() => {
    if (!tokenSubmitted || !mapContainer.current) return;

    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [3.3792, 6.5244], // Lagos coordinates
        zoom: 10
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        setMapLoaded(true);

        // Add markers for available power
        powerLocations.available.forEach(location => {
          const el = document.createElement('div');
          el.className = 'power-marker available';
          el.innerHTML = '<div class="w-4 h-4 rounded-full bg-green-500"></div>';
          
          new mapboxgl.Marker({ element: el })
            .setLngLat([location.lng, location.lat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h3>${location.name}</h3><p>Power Available: ${location.hours}</p>`)
            )
            .addTo(map.current!);
        });

        // Add markers for outages
        powerLocations.outages.forEach(location => {
          const el = document.createElement('div');
          el.className = 'power-marker outage';
          el.innerHTML = '<div class="w-4 h-4 rounded-full bg-red-500"></div>';
          
          new mapboxgl.Marker({ element: el })
            .setLngLat([location.lng, location.lat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h3>${location.name}</h3><p>Outage Duration: ${location.hours}</p>`)
            )
            .addTo(map.current!);
        });

        // Add markers for maintenance
        powerLocations.maintenance.forEach(location => {
          const el = document.createElement('div');
          el.className = 'power-marker maintenance';
          el.innerHTML = '<div class="w-4 h-4 rounded-full bg-amber-500"></div>';
          
          new mapboxgl.Marker({ element: el })
            .setLngLat([location.lng, location.lat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h3>${location.name}</h3><p>Maintenance: ${location.time}</p>`)
            )
            .addTo(map.current!);
        });
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      toast.error("Failed to load map", {
        description: "Please check your Mapbox token and try again"
      });
      setTokenSubmitted(false);
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [tokenSubmitted, mapboxToken]);

  const handleLocateMe = () => {
    if (!map.current || !mapLoaded) return;
    
    if (navigator.geolocation) {
      toast.info("Finding your location...");
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          map.current!.flyTo({
            center: [longitude, latitude],
            zoom: 14,
            essential: true
          });

          // Add user location marker
          const el = document.createElement('div');
          el.className = 'user-marker';
          el.innerHTML = '<div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"><span class="text-white text-xs">YOU</span></div>';

          new mapboxgl.Marker({ element: el })
            .setLngLat([longitude, latitude])
            .addTo(map.current!);
          
          toast.success("Location found", {
            description: "Map centered to your current location"
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          toast.error("Could not find your location", {
            description: "Please allow location access and try again"
          });
        }
      );
    } else {
      toast.error("Geolocation not supported by your browser");
    }
  };

  const handleReportOutage = () => {
    toast.info("Reporting outage...", {
      description: "We've received your outage report and will investigate."
    });
  };

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
          {!tokenSubmitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Map Configuration</CardTitle>
                <CardDescription>Enter your Mapbox token to view the interactive map</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTokenSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="mapbox-token" className="text-sm font-medium">Mapbox Token</label>
                    <Input 
                      id="mapbox-token"
                      type="text"
                      placeholder="Enter your Mapbox public token"
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://mapbox.com/</a>
                    </p>
                  </div>
                  <Button type="submit">Load Map</Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="border rounded-md overflow-hidden aspect-video bg-muted/30 relative">
              <style>{`
                .mapboxgl-ctrl-logo, .mapboxgl-ctrl-attrib {
                  display: none !important;
                }
                .power-marker, .user-marker {
                  cursor: pointer;
                }
              `}</style>
              <div ref={mapContainer} className="absolute inset-0" />
              
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-card/90 backdrop-blur-sm p-2 rounded-md shadow-sm">
                  <h3 className="text-sm font-medium mb-2">Legend</h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs">Power Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-xs">Power Outage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-xs">Scheduled Maintenance</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button size="sm" variant="secondary" onClick={handleReportOutage}>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Report Outage
                </Button>
                <Button size="sm" variant="secondary" onClick={handleLocateMe}>
                  <Navigation className="mr-2 h-4 w-4" />
                  Mark My Location
                </Button>
              </div>
            </div>
          )}
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Power Available</CardTitle>
                <CardDescription>20 areas in your region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {powerLocations.available.slice(0, 3).map(location => (
                    <div key={location.name} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-power-green" />
                      <span>{location.name}</span>
                      <Badge className="ml-auto bg-power-green border-0">{location.hours}</Badge>
                    </div>
                  ))}
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
                  {powerLocations.outages.slice(0, 3).map(location => (
                    <div key={location.name} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-500" />
                      <span>{location.name}</span>
                      <Badge variant="outline" className="ml-auto text-red-500">{location.hours}</Badge>
                    </div>
                  ))}
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
                  {powerLocations.maintenance.map(location => (
                    <div key={location.name} className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span>{location.name} - {location.time}</span>
                    </div>
                  ))}
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
