import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <h1>header part or nav bar</h1>
        <Outlet />
        <h1>footer part </h1>
    </div>
  )
}

export default Root