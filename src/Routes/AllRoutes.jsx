import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Orders from '../Pages/Orders'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/order' element={<Orders />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes