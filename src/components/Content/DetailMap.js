import React from 'react';

const DetailMap = () => {
    let styles = {
        width: '500px',
        height: '300px'
    };
    return (
        <div className="detail-map-div">
            <h2>지도</h2>
            <div className="detail-map" id="map" style={styles}></div>
        </div>
    );
};

export default DetailMap;