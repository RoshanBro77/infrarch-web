import React from 'react'

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
            <div className='projectList'>
                {portfolioData.map((project, id) => {
                    return (
                        <div className='project' key={id}>
                            <figure>
                                <img src='' alt='' />
                            </figure>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectShowcase
