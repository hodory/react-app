import React, { Component } from 'react';
import * as service from '../../services/getService';
import DetailMap from '../../components/Content/DetailMap';
import DetailMapContent from '../../components/Content/DetailMapContent';
import '../../components/Content/DetailMap.css';
import markerimage from '../../cluster-marker-1.png';
import MarkerClustering from '../../extends/MarkerCluster';

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
        const N = window.N;
        let mapOptions = {
            //ZoomControl 사용 가능여부 및 옵션
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.TOP_RIGHT
            },
            //중심좌표
            center: new naver.maps.LatLng(latitude, longitude),
            // 맵 기본 Zoom
            zoom: 8,
            //맵 최소 Zoom
            minZoom: 8
        };
        let map = new naver.maps.Map('map', mapOptions)
        let markers = [];
        let htmlMarker = {
            content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(' + markerimage + ');background-size:contain;"></div>',
            size: N.Size(40, 40),
            anchor: N.Point(20, 20)
        }
        let locationInfo = this.state.locationInfo;
        if (locationInfo.length > 0) {
            for (let i = 0, ii = locationInfo.length; i < ii; i++) {
                let spot = locationInfo[i],
                    latlng = new naver.maps.LatLng(spot.mapy, spot.mapx),
                    marker = new naver.maps.Marker({
                        position: latlng,
                    });
                markers.push(marker);
            }
            let markerClustering = new MarkerClustering({
                minClusterSize: 2,
                maxZoom: 9,
                map: map,
                markers: markers,
                disableClickZoom: false,
                gridSize: 120,
                icons: [htmlMarker],
                stylingFunction: function (clusterMarker, count) {
                    clusterMarker.getElement().querySelectorAll('div:first-child')[0].innerText = count;
                }
            });
        }
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