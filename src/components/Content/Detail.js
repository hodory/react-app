import React from 'react';

const Detail = ({addr1,addr2,firstimage,firstiamge2,hompage,overview,tel,title}) => {
    return (
        <div>
            <div>제목</div>
            <div>{title}</div>
            <div>소개</div>
            <div>{overview}</div>
            <div>주소</div>
            <div>{addr1}{addr2}</div>
            <div>연락처</div>
            <div>{tel}</div>
        </div>
    );
};

export default Detail;