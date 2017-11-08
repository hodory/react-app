import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

const Content = ({ thumb_url, title, addr, areaCode, contentTypeId, contentId }) => {
  return (
    <div className="swiper-slide">
      <div className="swiper-content">
        <Link to={`/detail/${areaCode}/${contentTypeId}/${contentId}`}>
          <img src={thumb_url} data-src={thumb_url} alt={title} className="swiper-lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <div className="content-layer">
            <p className="layer-title">{title}</p>
            <p className="layer-addr">{addr}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Content;