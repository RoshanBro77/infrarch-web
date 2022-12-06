import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../assets/styles/TeamInfo.css'

export default function TeamInfo() {
    const [memberData, setmemberData] = useState([])

    useEffect(() => {
        const getMemberData = async () => {
            const response = await fetch('http://localhost:5001/team/images')
            setmemberData(await response.json())
        }
        getMemberData()
    }, [])

    return (
        <div className='teamInfo marginLeftRight '>
            <div className='about__team'>
                <div className='about__title'>
                    <p>Our expert team. Who we are</p>
                </div>
                <div className='about__desc'>
                    <p>
                        In 1956 Dick Skidmore came to Idaho Falls to frame
                        houses. After spending the summer here, he decided to
                        stay and start Skidmore Construction in 1958. Dick grew
                        up on a farm which taught him hard work ethics, later in
                        life he joined the army and upon his return he started
                        as a carpenter apprentice. This gave him the experience
                        he needed to build homes. His beautiful wife Bon Adell
                        who grew up down the road from him in Richmond, UT. was
                        very creative. Bon Adell painted photos while Dick was
                        in the army, she had a natural gift working with color
                        palettes and design. This complimented their building
                        business as she provided interior designing.
                    </p>
                </div>
            </div>
            <div className='team__info'>
                {memberData.map((member, member_id) => {
                    return (
                        <div className='member__info' key={member_id}>
                            <LazyLoadImage
                                className='teamImg'
                                src={member.member_img}
                                placeholderSrc={member.member_img}
                                effect='black-and-white'
                            />
                            <p>{member.member_fullName}</p>
                            <p>{member.member_role}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
