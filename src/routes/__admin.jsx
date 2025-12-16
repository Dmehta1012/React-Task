import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/__admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
      <SidebarProvider>
      <div className="flex ml-40 min-h-screen w-full">
        <AdminSidebar />
        <main className="flex-1 bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
