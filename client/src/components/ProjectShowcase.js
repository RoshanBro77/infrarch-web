import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'

function ProjectShowcase() {
    const [portfolioData, setportfolioData] = useState([])

    useEffect(() => {
        const getPortfolioDetails = async () => {
            const response = await fetch(
                'http://localhost:5001/portfolio/images'
            )
            setportfolioData(await response.json())
        }
        getPortfolioDetails()
    }, [])

    return (
        <div className='projectShowcase'>
            <p>NEW PROJECTS | RESIDENTIAL HOMES</p>
            <figure className='portfolio__card'>
                {console.table(portfolioData)}
                {portfolioData.map((portfolio, p_id) => {
                    return <ImageCard key={p_id} {...portfolio} />
                })}
            </figure>
        </div>
    )
}

export default ProjectShowcase
