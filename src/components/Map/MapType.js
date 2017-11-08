import React from 'react';

const MapType = ({ stateTypeId, handleClick }) => {
    return (
        <div>
            <input type="radio" name="map_type" value={12} onClick={handleClick} defaultChecked={stateTypeId === 12 ? true : false} /><label>관광지</label>
            <input type="radio" name="map_type" value={14} onClick={handleClick} defaultChecked={stateTypeId === 14 ? true : false} /><label>문화시설</label>
            <input type="radio" name="map_type" value={15} onClick={handleClick} defaultChecked={stateTypeId === 15 ? true : false} /><label>행사/공연/축제</label>
            <input type="radio" name="map_type" value={25} onClick={handleClick} defaultChecked={stateTypeId === 25 ? true : false} /><label>여행코스</label>
            <input type="radio" name="map_type" value={28} onClick={handleClick} defaultChecked={stateTypeId === 28 ? true : false} /><label>레포츠</label>
            <input type="radio" name="map_type" value={32} onClick={handleClick} defaultChecked={stateTypeId === 32 ? true : false} /><label>숙박</label>
            <input type="radio" name="map_type" value={38} onClick={handleClick} defaultChecked={stateTypeId === 38 ? true : false} /><label>쇼핑</label>
            <input type="radio" name="map_type" value={39} onClick={handleClick} defaultChecked={stateTypeId === 39 ? true : false} /><label>음식점</label>
        </div>
    );
};

export default MapType;