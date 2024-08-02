import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.scss";

import {
  AppHeader,
  AppSidebar,
  AppContent,
  AppFooter,
} from "./components/common";

function Layout() {
  return (
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
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" name="Home" element={<Layout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
