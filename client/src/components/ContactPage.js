import React from 'react'
import '../assets/styles/ContactPage.css'
import image from '../assets/images/contactPageImg.jpg'

export default function ContactPage() {
    return (
        <section className='contact '>
            <div className='contact__contents'>
                <div className='contact__skidmore'>
                    <div className='image'>
                        <img src={image} alt='' />
                    </div>
                    <div className='contact__details'>
                        <h3 className='contact__Title'>
                            Contact Skidmore Inc.
                        </h3>
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
                <div className='contact__form'>
                    <h3 className='contact__Title  space'>Contact Form</h3>
                    <p className='contactForm__greet'>
                        Please fill in the information below and one of our team
                        members will get back to you as soon as possible.
                    </p>
                    <p className='contactForm__greet'>Thank you!</p>
                    <section className='form'>
                        <form action='' method='post'>
                            <input
                                type='text'
                                id='firstName'
                                placeholder='first name ...'
                            />
                            <input
                                type='text'
                                id='email'
                                placeholder='email ...'
                            />
                            <input
                                type='text'
                                id='company'
                                placeholder='company...'
                            />
                            <textarea
                                name=''
                                id=''
                                cols='30'
                                rows='15'
                                placeholder='write a message...'
                            ></textarea>
                            <div className='button'>
                                <button className='explore' type='submit'>
                                    <p>SUBMIT</p>
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </section>
    )
}
