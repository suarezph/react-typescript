import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../screens/login'
import Register from '../screens/register'
import NotFound from '../screens/extras/notFound'

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route key="login" path="/login" component={Login} />
      <Route key="register" path="/register" component={Register} />
      <Route key="notfound" path="*" component={NotFound} />
    </Switch>
  )
}

export default PublicRoutes
