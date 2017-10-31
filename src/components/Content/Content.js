import React from 'react';
import { Link } from 'react-router-dom';

const Content = ({ thumb_url, title, addr, reg_date, areaCode, contentTypeId, contentId }) => {
    return (
        <li className="main-item">
            <Link to={`/detail/${areaCode}/${contentTypeId}/${contentId}`}>
                <figure className="main-item-figure">
                    <img src={thumb_url ? thumb_url : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'} alt={title} />
                </figure>
            </Link>
            <figcaption>
                <div>{title}</div>
                <div>{addr}</div>
                <div>
                    <small className="text-muted">{reg_date}</small>
                </div>
            </figcaption>
        </li >
    );
};

export default Content;