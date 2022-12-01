import React from 'react'
import '../assets/styles/ImageCard.css'

const ImageCard = ({ p_id, displayImg, displayTitle, displayDate }) => {
    return (
        <div className='imageCard'>
            <figure className='portfolio__img'>
                <img className='projectImg' src={displayImg} alt='' />
            </figure>
<<<<<<< HEAD
            <div className='image__details'>
                <p className='portfolio__title'>{displayTitle}</p>
                <p className='portfolio__date'>{displayDate}</p>
=======
            <div className='imageDetails'>
                <div className='imageDetail'>
                    <p className='portfolio__title'>{displayTitle}</p>
                    <p className='portfolio__date'>{displayDate}</p>
                </div>
>>>>>>> 0749e1cab51aa97087eac038be552285d6627ab8
            </div>
        </div>
    )
}

export default ImageCard
