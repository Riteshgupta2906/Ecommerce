import React from "react"
import "./style.css"
import logo from "./wave.svg"

const Footer = () => {
  return (
    <>
    <img className="footerSvg" src={logo} alt=""></img>
      <footer>
      
        <div className='container grid3'>
        
       

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Lorem Ipsum is simply dummy text  </li>
              <li>of the printing and typesetting industry</li>
              <li>. Lorem Ipsum has been the industry's </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer