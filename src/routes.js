import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Users = React.lazy(() => import('./views/theme/colors/Colors'))
const Devices = React.lazy(() => import('./views/theme/typography/Typography'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/users', name: 'Users', element: Users, exact: true },
  { path: '/devices', name: 'Devices', element: Devices },
]

export default routes
