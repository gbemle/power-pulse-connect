
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  MapPin, 
  Upload, 
  FileText, 
  MessageCircle, 
  Search,
  ChevronDown,
  AlertCircle,
  Check,
  X
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Admin = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        <p className="text-muted-foreground">
          Manage users, locations, and system settings
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <CardDescription>All registered accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">2,845</div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="text-power-green">↑ 12%</span> from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
            <CardDescription>Monitored power points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3,721</div>
              <div className="p-2 bg-power-green/10 rounded-full">
                <MapPin className="h-4 w-4 text-power-green" />
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="text-power-green">↑ 8%</span> from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
            <CardDescription>PDF documents created</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">1,254</div>
              <div className="p-2 bg-amber-500/10 rounded-full">
                <FileText className="h-4 w-4 text-amber-500" />
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="text-power-green">↑ 24%</span> from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Chat Sessions</CardTitle>
            <CardDescription>Customer support chats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">43</div>
              <div className="p-2 bg-blue-500/10 rounded-full">
                <MessageCircle className="h-4 w-4 text-blue-500" />
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="text-red-500">↓ 3%</span> from last month
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="uploads">Data Uploads</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>View and manage registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search users..." className="pl-8" />
                </div>
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>DisCo</TableHead>
                      <TableHead>Locations</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3, 4, 5].map((row) => (
                      <TableRow key={row}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="" />
                              <AvatarFallback className="bg-primary/20">
                                {row === 1 ? "JD" : row === 2 ? "AM" : row === 3 ? "TS" : row === 4 ? "RK" : "MB"}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">
                                {row === 1 ? "John Doe" : row === 2 ? "Alice Miller" : row === 3 ? "Tom Smith" : row === 4 ? "Rebecca King" : "Michael Brown"}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {row === 1 ? "john.doe@example.com" : row === 2 ? "alice.m@example.com" : row === 3 ? "tom.smith@example.com" : row === 4 ? "rebecca@example.com" : "m.brown@example.com"}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {row === 1 ? "Ikeja" : row === 2 ? "Abuja" : row === 3 ? "Eko" : row === 4 ? "Ibadan" : "Kano"}
                        </TableCell>
                        <TableCell>{row === 3 ? "1" : "2"}</TableCell>
                        <TableCell>
                          <Badge variant={row === 3 ? "outline" : "secondary"} className={row === 3 ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : ""}>
                            {row === 3 ? "Pending" : "Active"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit user</DropdownMenuItem>
                              <DropdownMenuItem>Send message</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-500">Delete user</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="locations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Location Management</CardTitle>
              <CardDescription>View and manage power locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search locations..." className="pl-8" />
                </div>
                <Button>
                  <MapPin className="mr-2 h-4 w-4" />
                  Add Location
                </Button>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Location</TableHead>
                      <TableHead>DisCo</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Power Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3, 4, 5].map((row) => (
                      <TableRow key={row}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-muted">
                              <MapPin className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                {row === 1 ? "Ikeja GRA" : row === 2 ? "Lekki Phase 1" : row === 3 ? "Surulere" : row === 4 ? "Victoria Island" : "Ikoyi"}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {row === 1 ? "Lagos State" : row === 2 ? "Lagos State" : row === 3 ? "Lagos State" : row === 4 ? "Lagos State" : "Lagos State"}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {row === 1 ? "Ikeja" : row === 2 ? "Eko" : row === 3 ? "Ikeja" : row === 4 ? "Eko" : "Eko"}
                        </TableCell>
                        <TableCell>{row === 1 ? "245" : row === 2 ? "312" : row === 3 ? "189" : row === 4 ? "278" : "203"}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            row === 1 || row === 4 ? "bg-power-green/10 text-power-green border-power-green/20" :
                            row === 3 ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                            "bg-red-500/10 text-red-500 border-red-500/20"
                          }>
                            {row === 1 || row === 4 ? "Available" : row === 3 ? "Partial" : "Outage"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View on map</DropdownMenuItem>
                              <DropdownMenuItem>Update status</DropdownMenuItem>
                              <DropdownMenuItem>View reports</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-500">Remove location</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Requests</CardTitle>
              <CardDescription>Manage token requests and information updates</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="token" className="space-y-4">
                <TabsList className="mb-4">
                  <TabsTrigger value="token">Token Requests</TabsTrigger>
                  <TabsTrigger value="info">Information Updates</TabsTrigger>
                  <TabsTrigger value="complaints">Complaints</TabsTrigger>
                </TabsList>
                
                <TabsContent value="token" className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Meter Number</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[1, 2, 3].map((row) => (
                          <TableRow key={row}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="" />
                                  <AvatarFallback className="bg-primary/20">
                                    {row === 1 ? "JD" : row === 2 ? "AM" : "TS"}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium">
                                    {row === 1 ? "John Doe" : row === 2 ? "Alice Miller" : "Tom Smith"}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {row === 1 ? "john.doe@example.com" : row === 2 ? "alice.m@example.com" : "tom.smith@example.com"}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {row === 1 ? "54372819" : row === 2 ? "67394021" : "38192456"}
                            </TableCell>
                            <TableCell>
                              {row === 1 ? "₦5,000" : row === 2 ? "₦10,000" : "₦3,500"}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className={
                                row === 1 ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                                row === 2 ? "bg-power-green/10 text-power-green border-power-green/20" :
                                "bg-red-500/10 text-red-500 border-red-500/20"
                              }>
                                {row === 1 ? "Pending" : row === 2 ? "Completed" : "Failed"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                {row === 1 && (
                                  <>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                      <Check className="h-4 w-4 text-power-green" />
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                      <X className="h-4 w-4 text-red-500" />
                                    </Button>
                                  </>
                                )}
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="info" className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Update Type</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[1, 2, 3].map((row) => (
                          <TableRow key={row}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="" />
                                  <AvatarFallback className="bg-primary/20">
                                    {row === 1 ? "RK" : row === 2 ? "MB" : "JD"}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium">
                                    {row === 1 ? "Rebecca King" : row === 2 ? "Michael Brown" : "John Doe"}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {row === 1 ? "Address Change" : row === 2 ? "Phone Number Update" : "Email Change"}
                            </TableCell>
                            <TableCell>
                              {row === 1 ? "Today, 10:30 AM" : row === 2 ? "Yesterday, 3:15 PM" : "2 days ago"}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className={
                                row === 1 ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                                row === 2 ? "bg-power-green/10 text-power-green border-power-green/20" :
                                "bg-power-green/10 text-power-green border-power-green/20"
                              }>
                                {row === 1 ? "Pending" : row === 2 ? "Approved" : "Approved"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                {row === 1 && (
                                  <>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                      <Check className="h-4 w-4 text-power-green" />
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                      <X className="h-4 w-4 text-red-500" />
                                    </Button>
                                  </>
                                )}
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="complaints" className="space-y-4">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Issue Type</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[1, 2, 3, 4].map((row) => (
                          <TableRow key={row}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="" />
                                  <AvatarFallback className="bg-primary/20">
                                    {row === 1 ? "JD" : row === 2 ? "AM" : row === 3 ? "TS" : "RK"}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium">
                                    {row === 1 ? "John Doe" : row === 2 ? "Alice Miller" : row === 3 ? "Tom Smith" : "Rebecca King"}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {row === 1 ? "Power Outage" : row === 2 ? "Low Voltage" : row === 3 ? "Damaged Equipment" : "Billing Issue"}
                            </TableCell>
                            <TableCell>
                              {row === 1 ? "Lekki Phase 1" : row === 2 ? "Victoria Island" : row === 3 ? "Ikeja GRA" : "Surulere"}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className={
                                row === 1 ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                                row === 2 ? "bg-power-green/10 text-power-green border-power-green/20" :
                                row === 3 ? "bg-red-500/10 text-red-500 border-red-500/20" :
                                "bg-amber-500/10 text-amber-500 border-amber-500/20"
                              }>
                                {row === 1 ? "In Progress" : row === 2 ? "Resolved" : row === 3 ? "Escalated" : "In Progress"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  Reply
                                </Button>
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="uploads" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Uploads</CardTitle>
              <CardDescription>Upload datasets for report generation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg">
                  <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">Upload New Dataset</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Drag and drop your data file here, or click to browse
                  </p>
                  <Button>
                    Select File
                  </Button>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Dataset</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Uploaded By</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[1, 2, 3, 4].map((row) => (
                        <TableRow key={row}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-muted">
                                <FileText className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">
                                  {row === 1 ? "Power_Distribution_Q2_2024.xlsx" : 
                                   row === 2 ? "Customer_Consumption_Data_May.csv" : 
                                   row === 3 ? "Outage_Reports_April.csv" : 
                                   "Generation_Statistics_2024.xlsx"}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {row === 1 ? "Distribution Data" : row === 2 ? "Consumption Data" : row === 3 ? "Outage Reports" : "Generation Statistics"}
                          </TableCell>
                          <TableCell>
                            {row === 1 ? "Admin User" : row === 2 ? "Data Analyst" : row === 3 ? "System Manager" : "Admin User"}
                          </TableCell>
                          <TableCell>
                            {row === 1 ? "Today, 9:30 AM" : row === 2 ? "Yesterday, 4:15 PM" : row === 3 ? "3 days ago" : "Last week"}
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <ChevronDown className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Download</DropdownMenuItem>
                                <DropdownMenuItem>Generate Report</DropdownMenuItem>
                                <DropdownMenuItem>Share</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
