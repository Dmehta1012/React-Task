import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const Route = createFileRoute("/admin/__layout")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar is ONLY inside admin layout */}
      <AdminSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
