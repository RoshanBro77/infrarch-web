import React from 'react'
import '../assets/styles/Header.css'
import headIco from '../assets/images/skidmore.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className='header__contains marginLeftRight'>
                <NavLink to='/'>
                    <figure className='logo__container'>
                        <img src={headIco} height='60px' />
                    </figure>
                </NavLink>
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
                        <div className='btn__design'>
                            <NavLink
                                to='/our-team'
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                OUR TEAM
                            </NavLink>
                        </div>
                        <div className='btn__design'>
                            <NavLink
                                to='/portfolio'
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                PORTFOLIO
                            </NavLink>
                        </div>
                        <div className='btn__design'>
                            <NavLink
                                to={'/contact'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                CONTACT US
                            </NavLink>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
