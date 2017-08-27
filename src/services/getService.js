import axios from 'axios';
import { Myconfig } from '../config.js';
export const getDivisionCode = (cat1, cat2) => {
    return axios.get('http://api.visitkorea.or.kr/openapi/service/rest/KorService/categoryCode?ServiceKey=' + Myconfig.API_Auth_Key, {
        params: {
            contentTypeId: 12,
            cat1: cat1,
            cat2: cat2,
            numOfRows: 10,
            pageNo: 1,
            MobileOS: 'ETC',
            MobileApp: 'AppTesting'
        }
    });
}

export const getAreaData = (areaCode, sigunguCode) => {
    return axios.get("http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=" + Myconfig.API_Auth_Key, {
        params: {
            areaCode: areaCode,
            numOfRows: 10,
            pageNo: 1,
            arrange: 'D',
            MobileOS: 'ETC',
            MobileApp: 'AppTesting',
        }
    });
}