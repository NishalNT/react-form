import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='header'>
        <Link to={"/StudentList"}>Student List</Link>
        <Link to={"/StudentForm"}>Student Form</Link>
    </div>
  )
}

export default Navbar