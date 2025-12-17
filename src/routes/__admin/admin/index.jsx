
import AdminDashboard from "@/components/pages/admin/AdminDashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__admin/admin/")({
  component: AdminDashboard,
});
