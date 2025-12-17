import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
