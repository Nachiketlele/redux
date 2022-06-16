import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"30px"}}>
        <Link to="/">Counter</Link> 
        <Link to="/todoapp">TodoApp</Link>
        <Link to="/complete">Complete</Link>
    </div>
  )
}

export default Navbar