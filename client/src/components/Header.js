import React from 'react'
import '../assets/styles/Header.css'
import headIco from '../assets/images/skidmore.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className='header__contains'>
                <NavLink to='/'>
                    <figure className='logo__container'>
                        <img src={headIco} height='60px' alt='infrarch' />
                    </figure>
                </NavLink>
                <nav className='nav__options'>
                    <ul>
                        <div className='nav__option'>
                            <button className='btn__design'>DESIGN</button>
                            <div className='nav__dropdown'>
                                <ul>
                                    <li className='nav__drowdown__content'>
                                        <NavLink
                                            className='navLink'
                                            to='house-plans'
                                        >
                                            House Plans
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='nav__option'>
                            <button className='btn__design'>
                                CONSTRUCTION
                            </button>
                            <div className='nav__dropdown'>
                                <ul>
                                    <li className='nav__drowdown__content'>
                                        Publications
                                    </li>
                                    <li className='nav__drowdown__content'>
                                        Building plans
                                    </li>
                                    <li className='nav__drowdown__content'>
                                        Roads
                                    </li>
                                    <li className='nav__drowdown__content'>
                                        Bridges and Culverts
                                    </li>
                                    <li className='nav__drowdown__content'>
                                        Other Infrastructures
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
                                CLIENTELE
                            </NavLink>
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
