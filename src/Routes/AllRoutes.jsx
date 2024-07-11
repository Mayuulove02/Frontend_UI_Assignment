import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Orders from '../Pages/Orders'
import NotFound from '../Pages/NotFound'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/orders' element={<Orders />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes