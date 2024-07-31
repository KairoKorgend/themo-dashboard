import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilTablet, cilGroup, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Management',
    to: '/users',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Device Management',
    to: '/devices',
    icon: <CIcon icon={cilTablet} customClassName="nav-icon" />,
  },
]

export default _nav
