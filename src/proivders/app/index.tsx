import React from 'react'
import { BrowserRouter } from 'react-router-dom'

interface Props {
  children: JSX.Element | null
}

const AppProviders: React.FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

export default AppProviders
