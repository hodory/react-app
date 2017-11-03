import React, { Component } from 'react';
import DetailMap from '../../components/Content/DetailMap';

class DetailMapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapX: '',
            mapY: ''
        };
    }

    viewDetailMap = (latitude, longitude) => {
        let container = document.getElementById('map');
        const daum = window.daum;
        let options = {
            center: new daum.maps.LatLng(latitude, longitude),
            level: 4
        };

        let map = new daum.maps.Map(container, options);

        //마커위치지정
        let markerPosition = new daum.maps.LatLng(latitude, longitude);

        //마커생성
        let marker = new daum.maps.Marker({
            position: markerPosition
        });

        //마커 생성
        marker.setMap(map);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            longitude: nextProps.mapX,
            latitude: nextProps.mapY
        })
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
        this.viewDetailMap(this.state.latitude, this.state.longitude);
    }

    render() {
        return (
            <div>
                <DetailMap />
            </div>
        );
    }
}

export default DetailMapContainer;