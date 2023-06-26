import React from 'react';
import Form from '../../components/MainJoin/Form/Form';
import Footer from '../../components/Footer/Footer';
import "../MainJoin/MainJoin.css";
import "../MainJoin/MainJoinMobile.css";
import "../MainJoin/MainJoinTablet.css";

export default function MainJoin() {
    return (
        <div className='mainJoin'>
            <div className='circleVioletBg'></div>
            <div className='circlePurpleBg'></div>
            <h1 className='title'>Join the <span className='spanTitle'>fun.</span></h1>
            <section><Form /></section>
            <Footer />
        </div>
    )
}