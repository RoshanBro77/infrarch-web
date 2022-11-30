import React from 'react'
import '../assets/styles/ImageCard.css'

const ImageCard = ({ p_id, displayImg, displayTitle, displayDate }) => {
    return (
        <div className='imageCard'>
            <figure className='portfolio__img'>
                <img src={displayImg} alt='' />
            </figure>
            <p className='portfolio__title'>{displayTitle}</p>
            <p className='portfolio__date'>{displayDate}</p>
        </div>
    )
}

export default ImageCard
