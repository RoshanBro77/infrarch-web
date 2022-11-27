import React from 'react'
import '../assets/styles/FirstSection.css'
import firstSection__Image from '../assets/images/goku.jpg'
function FirstSection() {
    return (
        <section className='firstSection'>
            <img src={firstSection__Image} alt='' />
            <div className='firsSection__floating__container'>
                <div className='switch__ImageIcons'>
                    <div className='left'> Left</div>
                    <div className='right'>Right</div>
                </div>
                <div className='switch__ImageInfo'>
                    <h5>BUILDING DREAMS FROM THE GROUND UP</h5>
                    <p className='Image__title'>Design</p>
                    <p className='imageDescription'>
                        dicta ducimus temporibus fugit beatae omnis dolores
                        exercitationem officiis animi cumque quae
                    </p>
                    <button className='switch__ImageInfo__button'>
                        EXPLORE
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FirstSection
