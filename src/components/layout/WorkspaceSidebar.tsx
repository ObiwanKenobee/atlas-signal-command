import { LayoutDashboard, Users, FolderKanban, FileText, Radio, BookOpen, Megaphone, Settings, LogOut, Home } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const items = [
  { title: "Command Center", url: "/workspace/command-center", icon: LayoutDashboard },
  { title: "Leads / CRM", url: "/workspace/leads", icon: Users },
  { title: "Research", url: "/workspace/research", icon: BookOpen },
  { title: "Report Builder", url: "/workspace/report-builder", icon: FileText },
  { title: "Community Signals", url: "/workspace/community", icon: Radio },
];

export function WorkspaceSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { signOut } = useAuth();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-4">
            {!collapsed && (
              <Link to="/" className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-primary-foreground">A</span>
                </div>
                <span className="font-display text-sm font-semibold text-foreground">Atlas Ops</span>
              </Link>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className="hover:bg-muted/50" activeClassName="bg-muted text-primary font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3 space-y-1">
        <Link to="/portal/dashboard">
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground hover:text-foreground">
            <Home className="mr-2 h-4 w-4" /> {!collapsed && "Client Portal"}
          </Button>
        </Link>
        <Button variant="ghost" size="sm" onClick={signOut} className="w-full justify-start text-muted-foreground hover:text-foreground">
          <LogOut className="mr-2 h-4 w-4" /> {!collapsed && "Sign Out"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
