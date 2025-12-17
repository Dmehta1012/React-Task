import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/__landing")({
  component: LandingLayout,
});

function LandingLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}




