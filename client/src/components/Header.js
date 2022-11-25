import React from 'react'
import '../assets/styles/Header.css'
import headIco from '../assets/images/skidmore.png'

export default function Header() {
    return (
        <header>
            <figure className='logo__container'>
                <img src={headIco} />
            </figure>
            <nav className='nav__options'>
                <ul>
                    <div className='nav__option'>
                        <button className='btn__design'>DESIGN</button>
                        <div className='nav__dropdown'>
                            <li>House Plans</li>
                        </div>
                    </div>

                    <div className='nav__option'>
                        <button className='btn__design'>BUILD</button>
                        <div className='nav__dropdown'>
                            <li>Resedential Build</li>
                            <li>Commercial Build</li>
                        </div>
                    </div>
                    <div className='nav__option'>
                        <button className='btn__design'>DEVELOPMENT</button>
                        <div className='nav__dropdown'>
                            <li>Resedential DEVELOPMENT</li>
                            <li>Commercial DEVELOPMENT</li>
                        </div>
                    </div>
                    <div className='nav__option'>
                        <button className='btn__design'>ACTIVE LISTINGS</button>
                        <div className='nav__dropdown'>
                            <li>Rental Space for Lease</li>
                        </div>
                    </div>
                    <div className='nav__option'>
                        <li>OUR TEAM</li>
                    </div>
                    <div className='nav__option'>
                        <li>PORTFOLIO</li>
                    </div>
                    <div className='nav__option'>
                        <li>CONTACT US</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}
