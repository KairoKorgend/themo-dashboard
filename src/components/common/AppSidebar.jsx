import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
} from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav.jsx";

import logo from "src/assets/brand/themo-logo-white.svg";

import CIcon from "@coreui/icons-react";
import {
  cilTablet,
  cilGroup,
  cilSpeedometer,
  cilSettings,
} from "@coreui/icons";
import { CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Devices",
    to: "/devices",
    icon: <CIcon icon={cilTablet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Users",
    to: "/users",
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Settings",
    to: "/users",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
];

function AppSidebar() {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <img
            src={logo}
            alt="Logo"
            height={32}
            className="sidebar-brand-full"
          />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: "set", sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={_nav} />
    </CSidebar>
  );
}

export default React.memo(AppSidebar);
