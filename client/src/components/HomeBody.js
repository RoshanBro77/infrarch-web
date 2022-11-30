import React from 'react'
import '../assets/styles/HomeBody.css'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

export default function HomeBody() {
    return (
        <main className='homebody'>
            <FirstSection />
            <SecondSection />
        </main>
    )
}
