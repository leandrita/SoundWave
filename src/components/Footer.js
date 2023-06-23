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
          <div className='socialMediaTwitter'>
            <img className='logoTwt' src={twitter}/>
            <p className='twitter'>Twitter</p>
          </div>
          <div className='socialMediaFacebook'>
            <img className='logoFb' src={facebook}/>
            <p className='facebook'>Facebook</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

