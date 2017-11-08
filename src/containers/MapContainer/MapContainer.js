import React, { Component } from 'react';
import * as service from '../../services/getService';
import MapComponent from '../../components/Map/Map'
import MapTypeComponent from '../../components/Map/MapType'
import markerimage from '../../cluster-marker-1.png';
import MarkerClustering from '../../extends/MarkerCluster';
import noimage from '../../noimage.gif';
import './MapContainer.css';

let map;
const naver = window.naver;
const N = window.N;
class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 37.5666805,
            longitude: 126.9784147,
            contentTypeId: 12,
            locationInfo: [],
        }
    }
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                this.fetchInfo(position.coords.latitude, position.coords.longitude, this.state.contentTypeId);
            }, (error) => {
                console.log(error)
                this.setState({
                    latitude: 37.5666805,
                    longitude: 126.9784147,
                });
                this.fetchInfo(37.5666805, 126.9784147, this.state.contentTypeId);
            }, {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: Infinity
            }
        );
    }
    componentDidMount() {
        this.map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(this.state.latitude, this.state.longitude),
            zoom: 10,
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.LARGE,
                position: naver.maps.Position.TOP_RIGHT
            },
            mapTypeId: naver.maps.MapTypeId.NORMAL
        });
    }

    fetchInfo = async (mapY, mapX, contentTypeId) => {
        const LocationService = await service.getLocationInfo(mapX, mapY, 20000, 10000, contentTypeId);
        let locationInfo = LocationService.data.response.body.items.item;
        this.setState({
            locationInfo: locationInfo,
            contentTypeId: contentTypeId
        });
    }

    componentDidUpdate() {
        let location = new naver.maps.LatLng(this.state.latitude, this.state.longitude)
        this.map.setCenter(location);
        this.viewDetailMap();
    }

    viewDetailMap = () => {
        let markers = [],
            infoWindows = [];
        let htmlMarker = {
            content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(' + markerimage + ');background-size:contain;"></div>',
            size: N.Size(40, 40),
            anchor: N.Point(20, 20)
        }
        let locationInfo = this.state.locationInfo;
        if (locationInfo.length > 0) {
            for (let i = 0, ii = locationInfo.length; i < ii; i++) {
                locationInfo[i]['firstimage'] = (locationInfo[i]['firstimage2'] !== undefined) ? locationInfo[i]['firstimage2'] : noimage;
                let spot = locationInfo[i],
                    latlng = new naver.maps.LatLng(spot.mapy, spot.mapx),
                    marker = new naver.maps.Marker({
                        position: latlng,
                    }),
                    contentString = `<div style="width:200px;text-align:center;padding:10px;">
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
                maxZoom: 11,
                map: this.map,
                markers: markers,
                disableClickZoom: false,
                gridSize: 120,
                icons: [htmlMarker],
                stylingFunction: function (clusterMarker, count) {
                    clusterMarker.getElement().querySelectorAll('div:first-child')[0].innerText = count;
                },
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

    handleClick = (e) => {
        this.fetchInfo(this.state.latitude, this.state.longitude, e.target.value)
    }

    render() {
        return (
            <div>
                <MapComponent />
                <MapTypeComponent
                    stateTypeId={this.state.contentTypeId}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default MapContainer;