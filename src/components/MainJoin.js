import React from 'react';
import Form from './Form';
import "../css/MainJoin.css";

export default function MainJoin() {
    return (
        <div className='mainJoin'>
            <div className='circleVioletBg'></div>
            <div className='circlePurpleBg'></div>
            <h1 className='title'>Join the <span className='spanTitle'>fun.</span></h1>
            <section><Form /></section>
        </div>
    )
}