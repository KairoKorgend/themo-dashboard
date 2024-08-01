import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { useColorModes } from "@coreui/react";
import "./scss/style.scss";

// Containers
const DefaultLayout = React.lazy(() => import("./components/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/login/Login"));
const Page404 = React.lazy(() => import("./views/page404/Page404"));
const Page500 = React.lazy(() => import("./views/page500/Page500"));

function App() {
  const { isColorModeSet, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme"
  );
  const storedTheme = useSelector((state) => state.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split("?")[1]);
    const theme =
      urlParams.get("theme") &&
      urlParams.get("theme").match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
