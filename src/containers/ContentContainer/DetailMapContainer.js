import React, { Component } from 'react';
import * as service from '../../services/getService';
import DetailMap from '../../components/Content/DetailMap';
import DetailMapContent from '../../components/Content/DetailMapContent';
import DetailMapContentContainer from './DetailMapContentContainer';
import '../../components/Content/DetailMap.css';

class DetailMapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: '',
            latitude: '',
            locationInfo: [],
        };
    }

    viewDetailMap = (latitude, longitude) => {
        const naver = window.naver;
        let mapOptions = {
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.TOP_RIGHT
            },
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 10
        };
        let map = new naver.maps.Map('map', mapOptions)


        let marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(latitude, longitude),
            map: map
        })
    }

    componentWillReceiveProps(nextProps) {
        this.fetchInfo(nextProps.mapX, nextProps.mapY)
    }

    fetchInfo = async (mapX, mapY) => {
        const LocationService = await service.getLocationInfo(mapX, mapY, 2000);
        let locationInfo = LocationService.data.response.body.items.item;
        this.setState({
            longitude: mapX,
            latitude: mapY,
            locationInfo: locationInfo
        });
    }

    componentDidUpdate(prevProps, prevState) {
        this.viewDetailMap(this.state.latitude, this.state.longitude);
    }

    render() {
        let locationInfo = this.state.locationInfo;
        return (
            <div>
                <h2>지도</h2>
                <div className="map-section">
                    <DetailMap />
                    <div className="map-content-section">
                    {locationInfo.map((value, index) => {
                        return (
                            <DetailMapContent
                                data={value}
                                key={index}
                            />
                        );
                    })}
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailMapContainer;