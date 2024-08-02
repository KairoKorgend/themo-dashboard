import React from "react";

const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard.jsx"));
const Users = React.lazy(() => import("./pages/users/Users.jsx"));
const Devices = React.lazy(() => import("./pages/devices/Devices.jsx"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/users", name: "Users", element: Users, exact: true },
  { path: "/devices", name: "Devices", element: Devices },
];

export default routes;
