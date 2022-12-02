import React, { useEffect, useState } from 'react'
import predesigned from '../assets/images/Anioch-Plan.jpg'
import sketch from '../assets/images/Sketch.jpg'
import gettingStarted from '../assets/images/Getting-Started.jpg'
import '../assets/styles/HousePlans.css'

export default function HousePlans() {
    const [plans, setPlans] = useState([])

    useEffect(() => {
        const getplans = async () => {
            const response = await fetch('http://localhost:5001/house/plans')
            setPlans(await response.json())
        }
        getplans()
    }, [])

    return (
        <div className='housePlans'>
            <div className='plan__types'>
                <figure className='planImg'>
                    <img src={predesigned} alt='Predesigned Plan' />
                    <p>Our Predesigned Plans</p>
                    <p>
                        Through the years of building and drawing homes, we have
                        many plans available to choose from or help inspire your
                        own plans
                    </p>
                </figure>
                <figure className='planImg'>
                    <img src={sketch} alt='Sketch Plan' />
                    <p>Start From Scratch</p>
                    <p>
                        Our team can sit down, draw, and build your dream. We
                        have the training and experience to draw your plan at
                        Skidmore Inc.
                    </p>
                </figure>
                <figure className='planImg'>
                    <img src={gettingStarted} alt='Getting Started' />
                    <p>Getting Started</p>
                    <p>
                        Skidmore Inc has a draftsman and designer who can draw
                        and design what you are looking for. Call us to schedule
                        a time and get started.
                    </p>
                </figure>
            </div>
            <div className='middle__content'>
                <p>Build Your Dreams Today</p>
                <p>House Plans</p>
            </div>
            <div className='house__planList'>
                {plans.map((plans, plan_id) => {
                    return (
                        <div className='house__plan' id='plan_id'>
                            <figure className='house__planImg'>
                                <img src={plans.planImg} alt='House Plan Img' />
                            </figure>
                            <p>{plans.planName}</p>
                            <p>Main – {plans.mainArea} sqft</p>
                            <p>Upper Floor – {plans.upperArea} sqft</p>
                            <p>Basement Floor – {plans.basementArea} sqft</p>
                            <p>{plans.bedSum} Bed</p>
                            <p>{plans.bathSum} Bath</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
