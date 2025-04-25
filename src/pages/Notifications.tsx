
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, Power, AlertTriangle } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Power Restored",
      description: "Electricity has been restored in your primary location",
      time: "5 minutes ago",
      type: "success"
    },
    {
      id: 2,
      title: "Scheduled Maintenance",
      description: "Planned maintenance in Lekki area tomorrow from 10 AM to 2 PM",
      time: "2 hours ago",
      type: "info"
    },
    {
      id: 3,
      title: "Power Outage Reported",
      description: "Multiple users reported outage in your area",
      time: "1 day ago",
      type: "warning"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
        <p className="text-muted-foreground">
          Stay updated with power-related alerts and information
        </p>
      </div>

      <div className="grid gap-4">
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <CardContent className="flex items-start gap-4 pt-6">
              <div className={`rounded-full p-2 ${
                notification.type === 'success' ? 'bg-power-green/10 text-power-green' :
                notification.type === 'warning' ? 'bg-yellow-500/10 text-yellow-500' :
                'bg-blue-500/10 text-blue-500'
              }`}>
                {notification.type === 'success' ? <Power className="h-4 w-4" /> :
                 notification.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> :
                 <Bell className="h-4 w-4" />}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{notification.title}</p>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{notification.time}</span>
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
