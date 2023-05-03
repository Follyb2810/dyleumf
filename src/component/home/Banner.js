import React from 'react'

const Banner = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active contain">
        {/* <img src="..." class="d-block w-100" alt="..."/> */}
        <img src={require('./../asset/images/b.webp')} className="d-block w-100" alt="img"/>
        <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
             <button className='btn btn-primary btn-lg px-4'>MINT</button>
             <button className='btn btn-primary btn-lg px-4 ms-3'>Connect</button>
            </div>
      </div>
      <div class="carousel-item contain">
        {/* <img src="..." class="d-block w-100" alt="..."/> */}
        <img src={require('./../asset/images/q.avif')} className="d-block w-100" alt="img"/>
        <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
             <button className='btn btn-primary btn-lg px-4'>MINT</button>
             <button className='btn btn-outline-light btn-lg px-4 ms-3'>Connect</button>
            </div>
      </div>
      <div class="carousel-item contain">
        {/* <img src="..." class="d-block w-100" alt="..."/> */}
        <img src={require('./../asset/images/g.jpg')} className="d-block w-100" alt="img"/>
        <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
             <button className='btn btn-primary btn-lg px-4'>MINT</button>
             <button className='btn btn-outline-light btn-lg px-4 ms-3'>Connect</button>
            </div>
      </div>
      <div class="carousel-item contain">
        {/* <img src="..." class="d-block w-100" alt="..."/> */}
        <img src={require('./../asset/images/q.avif')} className="d-block w-100" alt="img"/>
        <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
             <button className='btn btn-primary btn-lg px-4'>MINT</button>
             <button className='btn btn-outline-light btn-lg px-4 ms-3'>Connect</button>
            </div>
      </div>
      <div class="carousel-item contain">
        {/* <img src="..." class="d-block w-100" alt="..."/> */}
        <img src={require('./../asset/images/y.jfif')} className="d-block w-100" alt="img"/>
        <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
             <button className='btn btn-primary btn-lg px-4'>MINT</button>
             <button className='btn btn-outline-light btn-lg px-4 ms-3'>Connect</button>
            </div>
      </div>
    </div>
  </div>
  )
}

export default Banner