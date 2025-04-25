
import { 
  Sidebar as UISidebar,
  SidebarContent, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem 
} from '@/components/ui/sidebar';
import { 
  Home, 
  Map, 
  MessageCircle, 
  FileText, 
  Settings, 
  Users,
  Bell,
  CreditCard,
  UserPen,
  Download
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <UISidebar>
      <SidebarContent className="pb-1">
        <div className="flex justify-center items-center py-6 mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-power-green flex items-center justify-center">
              <span className="text-sm">⚡</span>
            </div>
            PowerPulse
          </h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/')} asChild>
                  <Link to="/">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/map')} asChild>
                  <Link to="/map">
                    <Map className="h-5 w-5" />
                    <span>Power Map</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/messages')} asChild>
                  <Link to="/messages">
                    <MessageCircle className="h-5 w-5" />
                    <span>Messages</span>
                    <span className="ml-auto bg-power-green text-white text-xs rounded-full py-0.5 px-2">3</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/notifications')} asChild>
                  <Link to="/notifications">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/payments')} asChild>
                  <Link to="/payments">
                    <CreditCard className="h-5 w-5" />
                    <span>Bill Payments</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/profile')} asChild>
                  <Link to="/profile">
                    <UserPen className="h-5 w-5" />
                    <span>Update Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/reports')} asChild>
                  <Link to="/reports">
                    <FileText className="h-5 w-5" />
                    <span>Reports</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/downloads')} asChild>
                  <Link to="/downloads">
                    <Download className="h-5 w-5" />
                    <span>Downloads</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/settings')} asChild>
                  <Link to="/settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive('/admin')} asChild>
                  <Link to="/admin">
                    <Users className="h-5 w-5" />
                    <span>Admin Panel</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  );
};

export default Sidebar;
