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
        <Link className="nav-link active text-center mb-md-3" aria-current="page" to="#">Contact</Link>
        <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-outline-primary ms-md-3" type="button">Button</button>
</div>
      
        {/* <button className='btn btn-primary  d-sm-block'>Connect</button> */}
        {/* <button className='btn btn-primary d-sm-block '>Mint</button> */}
      </div>
    </div>
  </div>
</nav>
  )
} 

export default Navbar