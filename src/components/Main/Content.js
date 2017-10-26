import React from 'react';
import './Content.css';

const Content = ({thumb_url}) => {
  return(
        <div className="swiper-slide">
          <img src={thumb_url} data-src={thumb_url} className="swiper-lazy"/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
    );
};

export default Content;
