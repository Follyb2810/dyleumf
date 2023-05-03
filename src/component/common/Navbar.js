import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light fixed-top">
  <div className="container">
    <Link className="navbar-brand" to='/'>
        <span>DYLEUM</span>
        {/* <img src='' alt=''/> */}
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link active text-center" aria-current="page" to="#">Home</Link>
        <Link className="nav-link active  text-center" aria-current="page" to="#">About</Link>
        <Link className="nav-link active text-center" aria-current="page" to="#">Contact</Link>

      
        <button className='btn btn-primary ms-4'>Connect</button>
      </div>
    </div>
  </div>
</nav>
  )
} 

export default Navbar