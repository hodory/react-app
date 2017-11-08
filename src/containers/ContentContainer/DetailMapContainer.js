import React, { Component } from 'react';
import * as service from '../../services/getService';
import DetailMap from '../../components/Content/DetailMap';
import DetailMapContent from '../../components/Content/DetailMapContent';
import '../../components/Content/DetailMap.css';
import markerimage from '../../cluster-marker-1.png';
import MarkerClustering from '../../extends/MarkerCluster';

let map;
const naver = window.naver;
const N = window.N;

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

    viewDetailMap = (latitude, longitude) => {
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
        this.map = new naver.maps.Map('map', mapOptions)
        let markers = [],
            infoWindows = [];
        let htmlMarker = {
            content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(' + markerimage + ');background-size:contain;"></div>',
            size: N.Size(40, 40),
            anchor: N.Point(20, 20)
        }
        let locationInfo = this.state.locationInfo;
        if (locationInfo.length > 0) {
            console.log(locationInfo)
            for (let i = 0, ii = locationInfo.length; i < ii; i++) {
                let spot = locationInfo[i],
                    latlng = new naver.maps.LatLng(spot.mapy, spot.mapx),
                    marker = new naver.maps.Marker({
                        position: latlng,
                    }),
                    contentString = `<div style="width:100%;text-align:center;padding:10px;">
                    <div>
                        <a class="map-infoWindow" href="/detail/${locationInfo[i]['areacode']}/${locationInfo[i]['contenttypeid']}/${locationInfo[i]['contentid']}">
                            <img src="${locationInfo[i]['firstimage']}" style="width:100px;height:50px;"/>
                            <h3>
                                <b>${locationInfo[i]['title']}</b>
                            </h3>
                        </a>
                    </div>
                </div>
                <div>${locationInfo[i]['addr1']}</div>`,
                    infoWindow = new naver.maps.InfoWindow({
                        content: contentString
                    });
                markers.push(marker);
                infoWindows.push(infoWindow);
            }

            for (let i = 0, ii = markers.length; i < ii; i++) {
                naver.maps.Event.addListener(markers[i], 'click', this.getClickHandler(i, markers, infoWindows, this.map));
            }

            let markerClustering = new MarkerClustering({
                minClusterSize: 2,
                maxZoom: 9,
                map: this.map,
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

    getClickHandler = (seq, markers, infoWindows, map) => {
        return (e) => {
            var marker = markers[seq],
                infoWindow = infoWindows[seq];
            if (infoWindow.getMap()) {
                infoWindow.close();
            } else {
                infoWindow.open(map, marker);
            }
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
            <div className="detail-map-section">
                <h2>지도</h2>
                <div className="map-section">
                    <DetailMap />
                    <div className="map-content-section scroll-bar">
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