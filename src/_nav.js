import React from "react";
import CIcon from "@coreui/icons-react";
import { cilTablet, cilGroup, cilSpeedometer } from "@coreui/icons";
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
];

export default _nav;
