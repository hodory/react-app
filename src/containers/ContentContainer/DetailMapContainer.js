import React, { Component } from 'react';
import * as service from '../../services/getService';
import DetailMap from '../../components/Content/DetailMap';
import MapContainer from './MapContainer';
import DetailMapContent from '../../components/Content/DetailMapContent';
import '../../components/Content/DetailMap.css';

class DetailMapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: '',
            latitude: '',
            clickedMarker: '',
            locationInfo: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.fetchInfo(nextProps.mapX, nextProps.mapY)
    }

    fetchInfo = async (mapX, mapY) => {
        const LocationService = await service.getLocationInfo(mapX, mapY, 20000);
        let locationInfo = LocationService.data.response.body.items.item;
        this.setState({
            longitude: mapX,
            latitude: mapY,
            locationInfo: locationInfo
        });
    }

    setSeq = (seq) => {
        this.setState({
            seq: seq
        });
    }

    render() {
        let locationInfo = this.state.locationInfo;
        return (
            <div className="detail-map-section">
                <h2>지도</h2>
                <div className="map-section">
                    <MapContainer
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        locationInfo={locationInfo}
                        setSeq={this.setSeq}
                    />
                    <div className="map-content-section scroll-bar">
                        {locationInfo.map((value, index) => {
                            let is_addClass = (index === this.state.seq) ? true : false;
                            return (
                                <DetailMapContent
                                    is_addClass={is_addClass}
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