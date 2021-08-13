import React from 'react';
import gal1 from "./images/gal1.png";
import gal2 from "./images/gal2.png";
import gal3 from "./images/gal3.png";
import gal4 from "./images/gal4.png";
import gal5 from "./images/gal5.png";
import './Gallery.css';

function Gallery(props) {
    return (
        <div className='galleryContainer flex col-12 col-m-12 col-l-12'>
            <div className='gallery flex col-m-12 col-l-12'>
                <div className='galleryInner galleryInner1 flex'>
                    <div className='galleryPic'>
                        <img src={gal1} />
                    </div>
                    <div className='galleryPic'>
                        <img src={gal2} />
                    </div>
                    <div className='galleryPic'>
                        <img src={gal3} />
                    </div>
                    <div className='galleryPic'>
                        <img src={gal4} />
                    </div>
                    <div className='galleryPic'>
                        <img src={gal5} />
                    </div>
                </div>
                <div className='galleryInner galleryInner2 flex'>
                    <div className='galleryPic'>
                        <img src={gal1} />
                    </div>
                    <div className='galleryPic'>
                        <img src={gal2} />
                    </div>
                    <div className='galleryPic'>
                        <img src={gal3} />
                    </div>
                    <div className='galleryPic'>
                        <img src={gal4} />
                    </div>
                    <div className='galleryPic'>
                        <img src={gal5} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
