import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"40px",background:"teal",padding:"20px"}}>
        <div ><Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link></div>
        <div ><Link to="/signup" style={{textDecoration:"none", color:"white"}}>Signup</Link></div>
        <div ><Link to="/login" style={{textDecoration:"none", color:"white"}}>Login</Link></div>
    </div>
  )
}

export default Navbar