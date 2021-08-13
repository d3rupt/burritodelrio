import React, { useState, useEffect } from 'react';
import {Facebook, Instagram, Menu, Twitter} from "@material-ui/icons";
import './Header.css';

function Header(props) {

    const [init, setInit] = useState(false);

    useEffect(() => {
        var acc = document.querySelector('.header-hamburger')
        var panel = document.querySelector('.header-links');
        acc.addEventListener("click", function() {
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = `27rem`;
            }
        });
        panel.addEventListener('click', () => {
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = `27rem`;
            }
        })
    }, [init])

    return (
        <div className='header flex col-12 col-m-12 col-l-12'>
            <div className='header-top flex col-12 col-m-12 col-l-12'>
                <Menu className='header-hamburger'/>
                <div className='socials flex col-m-2 col-l-1'>
                    <Facebook className='socialTop'/>
                    <Twitter className='socialTop'/>
                    <Instagram className='socialTop'/>
                </div>
            </div>
            <div className='header-links flex col-12 col-m-12 col-l-12'>
                <div className='header-link flex col-l-1' onClick={() => {document.querySelector('.home').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Home</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.menu').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Menu</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.about').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Reviews</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.gallery').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Pics</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.footer').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
