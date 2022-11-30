import React from 'react'
import '../assets/styles/FirstSection.css'
import firstSection__Image from '../assets/images/firstSectionImg.jpg'
import leftArrow from '../assets/images/leftArrow.png'
import rightArrow from '../assets/images/rightArrow.png'

export default function FirstSection() {
    return (
        <section className='firstSection'>
            <img src={firstSection__Image} alt='' />
            <div className='firsSection__floating__container'>
                <div className='switch__ImageIcons'>
                    <div className='slider'>
                        <img src={leftArrow} alt='prev slide' />
                    </div>
                    <div className='slider'>
                        <img src={rightArrow} alt='next slide' />
                    </div>
                </div>
                <div className='switch__ImageInfo'>
                    <span>BUILDING DREAMS FROM THE GROUND UP</span>
                    <p className='Image__title'>Design</p>
                    <p className='imageDescription'>
                        We have been designing homes in East Idaho for over 70
                        years. Let's design your custom home together.
                    </p>
                    <button className='switch__ImageInfo__button'>
                        EXPLORE
                    </button>
                </div>
            </div>
        </section>
    )
}
