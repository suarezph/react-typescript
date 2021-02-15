import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

interface Props {
  children: JSX.Element | null
}

const AppProviders: React.FC<Props> = ({children}) => {
  return <Router>{children}</Router>
}

export default AppProviders
