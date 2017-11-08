import React from 'react';

const DetailContent = ({ addr1, addr2, firstImage, firstIamge2, hompage, overview, tel, title }) => {
    return (
        <div className="detail-content">
            <div><h2>제목</h2></div>
            <div>{title}</div>
            <div><h2>소개</h2></div>
            <div className="detail-introduction scroll-bar" dangerouslySetInnerHTML={{ __html: overview }}></div>
            {addr1 && <div><div><h2>주소</h2></div>
                <div>{addr1}{addr2}</div></div>}
            {tel && <div>
                <div><h2>연락처</h2></div>
                <div>{tel}</div>
            </div>
            }
            {hompage && <div>
                <div><h2>홈페이지</h2></div>
                <div>{hompage}</div>
            </div>
            }
        </div>
    );
};

export default DetailContent;