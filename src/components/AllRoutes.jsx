import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
           
        </Routes>
    </div>
  )
}

export default AllRoutes