import axios from 'axios';
import { Myconfig } from '../config.js';

//지역코드 조회
export const getAreaCode = () => {
    return axios.get('http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?ServiceKey=' + Myconfig.API_Auth_Key, {
        params: {
            MobileOS: 'ETC',
            MobileApp: 'AppTesting',
            numOfRows: 17,
        }
    })
};

//서비스 분류코드조회
export const getDivisionCode = (contentTypeId,pageNo,NumRows,cat1, cat2) => {
    return axios.get('http://api.visitkorea.or.kr/openapi/service/rest/KorService/categoryCode?ServiceKey=' + Myconfig.API_Auth_Key, {
        params: {
            contentTypeId: contentTypeId,
            cat1: cat1,
            cat2: cat2,
            numOfRows: NumRows,
            pageNo: pageNo,
            MobileOS: 'ETC',
            MobileApp: 'AppTesting'
        }
    });
}

//지역기반 관광 정보 조회
export const getAreaData = (pageNo, contentTypeId, areaCode, sigunguCode) => {
    return axios.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=" + Myconfig.API_Auth_Key, {
        params: {
            areaCode: areaCode,
            sigunguCode: sigunguCode,
            contentTypeId: contentTypeId,
            numOfRows: 8,
            pageNo: pageNo,
            arrange: 'P',
            MobileOS: 'ETC',
            MobileApp: 'AppTesting',
        }
    });
}

//관광정보 상세 조회
export const getDetail = (contentId) => {
    return axios.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=" + Myconfig.API_Auth_Key,
        {
            params: {
                contentId: contentId,
                defaultYN: 'Y',
                firstImageYN : 'Y',
                addrinfoYN:'Y',
                overviewYN :'Y',
                MobileOS: 'ETC',
                MobileApp: 'AppTesting',
            }
        });
}

// 행사 / 공연/ 축제 조회
export const getFestival = () => {
    return axios.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=" + Myconfig.API_Auth_Key,
    {
        params : {

        }
    });
}