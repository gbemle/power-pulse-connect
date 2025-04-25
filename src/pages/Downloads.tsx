
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Clock } from "lucide-react";

const Downloads = () => {
  const documents = [
    {
      id: 1,
      title: "Power Supply Agreement",
      description: "Terms and conditions for power supply",
      type: "PDF",
      size: "2.4 MB",
      date: "Added 2 days ago"
    },
    {
      id: 2,
      title: "Safety Guidelines",
      description: "Electrical safety guidelines for consumers",
      type: "PDF",
      size: "1.8 MB",
      date: "Added 1 week ago"
    },
    {
      id: 3,
      title: "Billing Structure",
      description: "Detailed explanation of billing components",
      type: "PDF",
      size: "3.1 MB",
      date: "Added 2 weeks ago"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Downloads</h2>
        <p className="text-muted-foreground">
          Access and download important documents and forms
        </p>
      </div>

      <div className="grid gap-4">
        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardContent className="flex items-start gap-4 pt-6">
              <div className="rounded-lg bg-primary/10 p-2">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.description}
                    </p>
                  </div>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant="secondary">{doc.type}</Badge>
                  <span className="text-sm text-muted-foreground">{doc.size}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {doc.date}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
