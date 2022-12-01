import React from 'react'
import '../assets/styles/ImageCard.css'

const ImageCard = ({ p_id, displayImg, displayTitle, displayDate }) => {
    return (
        <div className='imageCard'>
            <figure className='portfolio__img'>
                <img className='projectImg' src={displayImg} alt='' />
            </figure>
            <div className='image__details'>
                <p className='portfolio__title'>{displayTitle}</p>
                <p className='portfolio__date'>{displayDate}</p>
            </div>
        </div>
    )
}

export default ImageCard
