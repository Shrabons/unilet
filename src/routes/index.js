import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom'
import Root from '../layouts/root/Root'
import ArticaleDetails from '../pages/ArticaleDetails'
import Articales from '../pages/Articales'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ReProperty from '../pages/ReProperty'
import ReadReviews from '../pages/ReadReviews'
import Signup from '../pages/Signup'



const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
        <Route path='/articles' element={<Articales />}></Route>
        <Route path='/articledetails' element={<ArticaleDetails />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/review-proerty' element={<ReProperty  />}></Route>
        <Route path='/read-reviews' element={<ReadReviews />}></Route>
        <Route index element={<Home />}></Route>
        
    </Route>
))

 
const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes