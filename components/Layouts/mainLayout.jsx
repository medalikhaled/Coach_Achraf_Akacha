import React from 'react'
import { Children } from 'react'

const MainLayout = ({ children }) => {
  return <main className="h-screen min-h-screen">{children}</main>
}

export default MainLayout
