import React from 'react';

const DetailImages = ({image_url}) => {
    let styleTag = {
        backgroundImage: 'url('+image_url+')'
    };
    return (
        <div className="swiper-slide">
            <img src={image_url}/>
        </div>
    );
};

export default DetailImages;