
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bell, 
  Settings, 
  Menu, 
  Search,
  MessageCircle
} from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        <SidebarTrigger>
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
        
        <div className="ml-4 flex items-center space-x-4 lg:space-x-6">
          <div className="hidden md:flex">
            <h2 className="text-lg font-semibold text-power-blue">Power Pulse Connect</h2>
          </div>
        </div>
        
        <div className="ml-auto flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-foreground" asChild>
            <Link to="/messages">
              <MessageCircle className="h-5 w-5" />
            </Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                <DropdownMenuItem className="py-3 cursor-pointer">
                  <div>
                    <p className="font-medium text-sm">Power Restored</p>
                    <p className="text-xs text-muted-foreground">Electricity has been restored in your primary location</p>
                    <p className="text-xs text-muted-foreground mt-1">5 minutes ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 cursor-pointer">
                  <div>
                    <p className="font-medium text-sm">Power Outage Reported</p>
                    <p className="text-xs text-muted-foreground">Multiple users reported outage in your area</p>
                    <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3 cursor-pointer">
                  <div>
                    <p className="font-medium text-sm">Bill Payment Successful</p>
                    <p className="text-xs text-muted-foreground">Your recent payment has been processed</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer justify-center font-medium">
                <Link to="/notifications">View all notifications</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Settings">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-power-blue text-white">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/auth/login">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
