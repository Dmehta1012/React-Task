import { Outlet } from "@tanstack/react-router";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { SidebarProvider } from "../components/ui/Sidebar";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});


function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        
        {/* Sidebar */}
        <AdminSidebar />

        {/* Admin pages */}
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>

      </div>
    </SidebarProvider>
  );
}
export default AdminLayout;
