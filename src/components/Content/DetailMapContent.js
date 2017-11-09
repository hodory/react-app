import React from 'react';
import './DetailMap.css';
const DetailMapContent = ({ data, is_addClass }) => {
    let addClass = is_addClass ? ' active' : '';
    return (
        <ul className={`detail-map-content${addClass}`}>
            <li>{data.title}</li>
            <li>{data.addr1} {data.addr2}</li>
        </ul>
    );
};

export default DetailMapContent;