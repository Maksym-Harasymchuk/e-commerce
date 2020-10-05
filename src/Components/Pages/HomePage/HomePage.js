import React from 'react';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


import './homePage.css'

const HomePage = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <div className={'my'}>
            <AliceCarousel mouseTrackingEnabled>
                <img
                    src="https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080"
                    onDragStart={handleOnDragStart} className="yours-custom-class"/>
                <img
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
                    onDragStart={handleOnDragStart} className="yours-custom-class"/>
            </AliceCarousel>
        </div>
    )
};

export default HomePage;