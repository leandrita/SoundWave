import React from 'react'
import '../css/MainDiscovers.css';
import Microphone from '../assets/microphone.svg';
import Albums from '../assets/albums.svg';
import More from '../assets/more.svg';
import Covers from '../assets/covers.jpg'

export default function MainDiscovers() {
  return (
    <div className='discovers'>
        <div className='info'>
        <p className='subtitle'>Discover new music</p>

        <section>
            <div>
                <img src={Microphone}/>
                <p>Charts</p>
            </div>
            <div>
                <img src={Albums}/>
                <p>Albums</p>
            </div>
            <div>
                <img src={More}/>
                <p>More</p>
            </div>
            </section>  
            
            <p>By joining you can benefit by listening to the latest albums realeased.</p>

        </div>

        <div className='covers'>
            <img src={Covers} className='image'/>
        </div>
    </div>
  )
}
