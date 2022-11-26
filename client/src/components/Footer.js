import React from 'react'
import '../assets/styles/Footer.css'
import footImg from '../assets/images/skidmore.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__options'>
                <div className='footer__column'>
                    <figure className='footer__Img'>
                        <img src={footImg} alt='infrarch' />
                    </figure>
                </div>
                <div className='footer__column'>
                    <div className='footer__detail detail'>
                        <b>
                            <strong>office:</strong>
                        </b>
                        <p>
                            PHONE: 208-529-3672 3920 E. SUNNYSIDE RD. IDAHO
                            FALLS, ID.
                        </p>
                    </div>
                    <div className='footer__detail detail'>
                        <p>
                            <strong>RANDY SKIDMORE:</strong>
                        </p>
                        <p>CELL: 208-681-2199</p>
                        <p>EMAIL: RAS@SKIDMOREINC.COM</p>
                    </div>

                    <div className='footer__detail detail'>
                        <p>
                            <strong>RETT SKIDMORE:</strong>
                        </p>
                        <p>CELL: 208-589-2960</p>
                        <p>EMAIL: BRETT@SKIDMOREINC.COM</p>
                    </div>
                </div>
                <div className='footer__column'>
                    <ul className='footer__quickLinks'>
                        <li>HOME</li>
                        <li>OUR TEAM</li>
                        <li>DESIGN</li>
                        <li>RESIDENTIAL</li>
                        <li>BUILD</li>
                        <li>COMMERCIAL BUILD</li>
                    </ul>
                </div>
                <div className='footer__column'>
                    <ul className='footer__quickLinks'>
                        <li>RESIDENTIAL DEVELOPMENT</li>
                        <li>COMMERCIAL DEVELOPMENT</li>
                        <li>RENTAL SPACE</li>
                        <li>PORTFOLIO </li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>© 2022 INFRARCH, INC., ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    )
}
