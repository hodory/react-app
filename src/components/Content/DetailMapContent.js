import React from 'react';
import './DetailMap.css';
const DetailMapContent = ({data}) => {
    return (
        <ul className="detail-map-content">
            <li>{data.title}</li>
            <li>{data.addr1} {data.addr2}</li>
        </ul>
    );
};

export default DetailMapContent;