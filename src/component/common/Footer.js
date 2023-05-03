import React from 'react'
import {BsTwitter,BsDiscord,BsTelegram} from 'react-icons/bs'

const Footer = () => {
  const currentDate = new Date().toLocaleDateString();
  // const currentDate = new Date().toLocaleDateString();
  return (
   <div className='bg-secondary'>
       <div className='container py-3 '>
        <div className='row justify-content-between'>
            <div className='col-md-4 col-12'>
           <div className="input-group">
              <input type="text" className="form-control" placeholder="join our whitelist" aria-label="join our whitelist" aria-describedby="button-addon2"/>
              <button className="btn btn-outline-primary text-white" type="button" id="button-addon2">Button</button>
            </div>
            </div>
            <div className='col-md-4 col-12'>
            <ul className="list-inline list">
                <li className="list-inline-item ">Privacy</li>
                <li className="list-inline-item">Terms</li>
                <li className="list-inline-item">Contact</li>
              </ul>
            </div>
            <div className='col-md-3 col-12 text-white'>
            <span>   {currentDate} Dyleum All Right Reseerve</span>
            <ul className="list-inline list">
                <li className="list-inline-item "><a href='#'><BsTwitter className="icon"/></a></li>
                <li className="list-inline-item ms-3"><a href='#'><BsDiscord className="icon"/></a></li>
                <li className="list-inline-item ms-3"><a href='#'><BsTelegram className="icon"/></a></li>
                
              </ul>

            </div>
        </div>
    </div>
   </div>
  )
}

export default Footer