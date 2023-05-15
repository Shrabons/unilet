import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../../components/header/navbar'


const Root = () => {
  return (
    <div>
        <Navbars />
        <Outlet />
        <h1>footer part </h1>
    </div>
  )
}

export default Root