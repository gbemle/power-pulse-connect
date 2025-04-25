
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname.includes('/auth');

  if (isAuthPage) {
    return <>{children}</>;
  }

  const showNotification = () => {
    toast.info("Power update: Ikeja area now has electricity", {
      description: "Power has been restored in your primary location",
      action: {
        label: "View",
        onClick: () => console.log("Viewed notification"),
      },
    });
  };

  React.useEffect(() => {
    // Simulate a notification after 5 seconds
    const timer = setTimeout(() => {
      showNotification();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
