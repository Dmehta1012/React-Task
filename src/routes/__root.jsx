import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { Navbar } from "../common/Navbar";     // named import
import { Footer } from "../common/Footer";     // named import

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}

      <Outlet />

      {!isAdmin && <Footer />}
    </>
  );
}
