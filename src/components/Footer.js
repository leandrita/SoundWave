import React from 'react'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import "../css/Footer.css"


export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footerRight'>
           <p>About Us</p>
           <p>Contat</p>
        </div>
        <div className='footerLeft'>
            <img src={twitter}/>
            <p className='twitter'>Twitter</p>
            <img src={facebook}/>
            <p className='facebook'>Facebook</p>
          
        </div>
      </div>
    </footer>
  )
}

