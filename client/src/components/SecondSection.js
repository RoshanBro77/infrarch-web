import React from 'react'
import '../assets/styles/SecondSection.css'
import secondSectionImg from '../assets/images/secondSectionImg.jpg'

export default function SecondSection() {
    return (
        <section className='secondSection'>
            <figure>
                <img src={secondSectionImg} alt='' className='largeImg' />
            </figure>
            {/* <div className=''>
                <p>quality</p>
            </div> */}
            <div className='quality__description'>
                <div className='image__title'>
                    <p>Serving Idaho Falls since 1958</p>
                </div>
                <div className='image_description'>
                    <p>
                        Serving Idaho Falls custom home building demands with
                        quality since 1958. Family owned and operated, with a
                        team of the best craftsman in the area. Skidmore Inc. is
                        dedicated to bringing you quality products and fine
                        craftsmanship.
                    </p>
                </div>
                <div className='explore'>
                    <button>explore</button>
                </div>
            </div>
        </section>
    )
}
