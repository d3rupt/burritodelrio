import React, {useEffect} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Footer from "./Footer";
import reviews from './images/reviews.jpg';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';

import './App.css';

function App() {
    useEffect(() => {
        document.querySelector('.App').classList.remove('opacity0');
    }, [])

  return (
    <div className="App parallax opacity0 col-12">
        <Home />
        <Menu />
        <div className='about parallax-group flex col-12 col-m-12 col-l-12'>
            <img className='parallax-layer parallax-back' src={reviews} />
            <div className='parallax-layer parallax-back aboutFilter' />
            <div className='parallax-layer parallax-base aboutText flex'>
                <h1>Reviews</h1>
            </div>
            <div className='reviews parallax-layer parallax-base flex'>
                <div className='review flex'>
                    <p>"I can't get enough of this place, it has become our Friday evening tradition.  The portions are huge, the food is beyond incredible, I cannot fathom how I never went here sooner.  It is worth checking out! "</p>
                    <h4>-Pierce Thiesseen, Google Review (5 stars)</h4>
                </div>
                <div className='review flex'>
                    <p>Great flavour in a burrito STUFFED full of freshness. This location can be a challenge for parking near by, but it is well worth the effort.</p>
                    <h4>-Paul Volk, Google Review (5 stars)</h4>
                </div>
                <div className='review flex'>
                    <p>I'm from Toronto and burrito del Rio is better than any burrito joint Toronto has to offer. So fresh and flavourful. Highly recommended 👌👌👌</p>
                    <h4>24 Hour Plug, Google Review (5 stars)</h4>
                </div>
                <div className='review flex'>
                    <p>"I can't get enough of this place, it has become our Friday evening tradition.  The portions are huge, the food is beyond incredible, I cannot fathom how I never went here sooner.  It is worth checking out! "</p>
                    <h4>-Pierce Thiesseen, Google Review (5 stars)</h4>
                </div>
                <div className='review flex'>
                    <p>Great flavour in a burrito STUFFED full of freshness. This location can be a challenge for parking near by, but it is well worth the effort.</p>
                    <h4>-Paul Volk, Google Review (5 stars)</h4>
                </div>
                <div className='review flex'>
                    <p>I'm from Toronto and burrito del Rio is better than any burrito joint Toronto has to offer. So fresh and flavourful. Highly recommended 👌👌👌</p>
                    <h4>24 Hour Plug, Google Review (5 stars)</h4>
                </div>
            </div>
        </div>
        <Gallery />
        <Footer />
        <div className='footer-final flex col-12 col-m-12 col-l-12'>
            <h5>Designed by Vision Web Design</h5>
            <div className='socials footer-socials flex col-m-2 col-l-1'>
                <Facebook className='social icon'/>
                <Twitter className='social icon'/>
                <Instagram className='social icon'/>
            </div>
        </div>
    </div>
  );
}

export default App;
