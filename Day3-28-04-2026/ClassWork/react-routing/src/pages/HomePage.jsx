import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>thi sis home page</h1>
      <div>
        <Link to="/">Home HEro</Link>
        <Link to="kitchen">kitchen</Link>
        <Link></Link>
      </div>
      <Outlet />
      <h3>end of home page</h3>
      
    </div>
  )
}

export default HomePage
