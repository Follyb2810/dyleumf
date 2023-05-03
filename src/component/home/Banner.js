import React from 'react'

const Banner = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item contain active">
      <img src={require('./../asset/images/b.webp')} className="d-block w-100" alt="img"/>
            <div class="caption">
            <h2>Claim</h2>
            <p>Additional text or description here</p>
            {/* <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div> */}
            <button className='btn btn-primary btn-lg px-4'>MINT</button>
            </div>  

    </div>
    <div className="carousel-item contain">
      <img src={require('./../asset/images/b.webp')} className="d-block w-100" alt="img"/>
            <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
    </div>
    <div className="carousel-item contain">
      <img src={require('./../asset/images/g.jpg')} className="d-block w-100" alt="img"/>
      <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
            {/* <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div> */}
                            <button className='btn btn-primary btn-lg px-4'>MINT</button>
            </div>
     </div>
    <div className="carousel-item contain">
      <img src={require('./../asset/images/g.jpg')} className="d-block w-100" alt="img"/>
      <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
            {/* <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div> */}
                            <button className='btn btn-primary btn-lg px-4'>MINT</button>
            </div>
         </div>
    <div className="carousel-item contain">
      <img src={require('./../asset/images/g.jpg')} className="d-block w-100" alt="img"/>
      <div class="caption">
            <h2>Your Text Here</h2>
            <p>Additional text or description here</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
      </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
  )
}

export default Banner