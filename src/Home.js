import React from 'react';
import './Home.css';
import Header from "./Header";
import {Facebook, Instagram, Twitter} from "@material-ui/icons";
import cloud from "./images/cloud.png";

function Home(props) {
    return (
        <div className='home parallax-group col-12'>
            <Header/>
            <div className='socialsTop flex col-m-2 col-l-1'>
                <Facebook className='socialTop icon'/>
                <Twitter className='socialTop icon'/>
                <Instagram className='socialTop icon'/>
            </div>
            <div className='parallax-layer home-parallaxBack home-back flex col-12'>
                <div className='home-sun' />
                <img src={cloud} id='cloud1' />
                <img src={cloud} id='cloud2' />

            </div>
            <div className='parallax-layer home-parallaxMid col-12'>
                <div className='home-background col-12' />
                <img src={cloud} id='cloud3' />
            </div>
            <div className='darkFilter' />
            <div className='parallax-layer home-parallaxFront home-base flex col-12'>
                <div className='home-banner flex col-12 col-m-12 col-l-12'>
                    <h1>Imagine Taco Tuesday... Every. Day.</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
