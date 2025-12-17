import Products from "@/components/pages/admin/Products";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__admin/admin/products")({
  component: Products,
});