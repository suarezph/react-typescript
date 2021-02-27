import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from '../screens/dashboard'
import Branch from '../screens/branch'
// import NotFoundScreen from '@screens/errors/not-found'

const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route exact key="dashboard" path="/dashboard" component={Dashboard} />
      <Route exact key="branch" path="/branch" component={Branch} />
    </Switch>
  )
}

export default PrivateRoutes
