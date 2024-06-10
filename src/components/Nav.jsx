import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' fixed flex justify-end py-4 px-10 gap-10 bg-slate-600 text-white w-full'>
        <Link to="/">Home</Link>
        <Link to="/Admin">Admin</Link>
    </div>
  )
}

export default Nav