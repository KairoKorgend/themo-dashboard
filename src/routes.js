import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Users = React.lazy(() => import("./views/users/Users"));
const Devices = React.lazy(() => import("./views/devices/Devices"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/users", name: "Users", element: Users, exact: true },
  { path: "/devices", name: "Devices", element: Devices },
];

export default routes;
