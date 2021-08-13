import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div className='footer parallax-group flex col-12 col-m-12 col-l-12'>

            <div className='footerDiv footer-left flex col-12 col-m-6 col-l-6'>
                <div className='footer-borderContainer flex col-12 col-m-12 col-l-12'>
                    <div className='footer-border footer-borderTop col-12 col-m-12 col-l-12'>

                    </div>
                    <div className='footer-border footer-borderBottom col-12 col-m-12 col-l-12'>

                    </div>
                </div>
                <h1>Burrito Del Rio</h1>
                <h2>LOCATION</h2>
                <h4>8-433 River Ave,</h4>
                <h4>Winnipeg, MB R3L 2V1</h4>
                <h2>HOURS</h2>
                <h4><span className='bold'>Sun-Thu:</span> 11am - 10pm </h4>
                <h4><span className='bold'>Fri-Sat:</span> 11am - 11pm </h4>
                <h2>CONTACT</h2>
                <h4><span className='bold'>Phone:</span> (204) 415-5600</h4>
                <h4><span className='bold'>Email:</span> info@burritodelrio.com</h4>

            </div>
            <div className='footerDiv footer-right flex col-12 col-m-6 col-l-6'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.017505350381!2d-97.14785808519174!3d49.879697836207015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7400162a94c9%3A0x1caedb560558f9b9!2sBurrito%20Del%20Rio!5e0!3m2!1sen!2sca!4v1628178363505!5m2!1sen!2sca"
                    width="100%" height="100%" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
}

export default Footer;
