import React from 'react'
import '../assets/styles/ContactPage.css'
import image from '../assets/images/contactPageImg.jpg'
function ContactPage() {
    return (
        <section className='contact '>
            <div className='contact__contents'>
                <div className='contact__skidmore'>
                    <div className='image'>
                        <img src={image} alt='' />
                    </div>
                    <div className='contact__details'>
                        <h3>Contact Skidmore Inc.</h3>
                        <div className='subDetails'>
                            <p className='contactSubTitle'>Office: </p>
                            <p className='contactDetails'>
                                Phone: 208-529-3672
                            </p>
                            <p className='contactDetails'>
                                3920 E. Sunnyside Rd. Idaho Falls, ID.
                            </p>
                        </div>
                        <div className='subDetails'>
                            <p className='contactSubTitle'>Randy Skidmore:</p>
                            <p className='contactDetails'>Cell: 208-681-2199</p>
                            <p className='contactDetails'>Email:</p>
                            <p className='contactDetails'>
                                ras@skidmoreinc.com
                            </p>
                        </div>
                        <div className='subDetails'>
                            <p className='contactSubTitle'>Brett Skidmore: </p>
                            <p className='contactDetails'>Cell: 208-589-2960</p>
                            <p className='contactDetails'>
                                Email: brett@skidmoreinc.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className='contact__form'></div>
            </div>
        </section>
    )
}

export default ContactPage
