
import AdminDashboard from "@/pages/admin/AdminDashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__admin/admin/")({
  component: AdminDashboard,
});
