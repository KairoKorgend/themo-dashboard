import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.scss";

import {
  AppHeader,
  AppSidebar,
  AppContent,
  AppFooter,
} from "./components/common";

const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard.jsx"));
const Users = React.lazy(() => import("./pages/users/Users.jsx"));
const Devices = React.lazy(() => import("./pages/devices/Devices.jsx"));

export const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/users", name: "Users", element: Users, exact: true },
  { path: "/devices", name: "Devices", element: Devices },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          name="Home"
          element={
            <div>
              <AppSidebar />
              <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className="body flex-grow-1">
                  <AppContent />
                </div>
                <AppFooter />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
