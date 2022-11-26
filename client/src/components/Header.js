import React from 'react'
import '../assets/styles/Header.css'
import headIco from '../assets/images/skidmore.png'

export default function Header() {
    return (
        <header>
            <div className='header__contains marginLeftRight'>
                <figure className='logo__container'>
                    <img src={headIco} height='60px' />
                </figure>
                <nav className='nav__options'>
                    <ul>
                        <div className='nav__option'>
                            <button className='btn__design'>DESIGN</button>
                            <div className='nav__dropdown'>
                                <ul>
                                    <li className='nav__drowdown__content'>
                                        House Plans
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='nav__option'>
                            <button className='btn__design'>BUILD</button>
                            <div className='nav__dropdown'>
                                <ul>
                                    <li className='nav__drowdown__content'>
                                        Resedential Build
                                    </li>
                                    <li className='nav__drowdown__content'>
                                        Commercial Build
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='nav__option'>
                            <button className='btn__design'>DEVELOPMENT</button>
                            <div className='nav__dropdown'>
                                <ul>
                                    <li className='nav__drowdown__content'>
                                        Resedential Development
                                    </li>
                                    <li className='nav__drowdown__content'>
                                        Commercial Development
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='nav__option'>
                            <button className='btn__design'>
                                ACTIVE LISTINGS
                            </button>
                            <div className='nav__dropdown'>
                                <ul>
                                    <li className='nav__drowdown__content'>
                                        Rental Space for Lease
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='btn__design'>OUR TEAM</div>
                        <div className='btn__design'>PORTFOLIO</div>
                        <div className='btn__design'>CONTACT US</div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
