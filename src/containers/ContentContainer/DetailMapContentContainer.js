import React, { Component } from 'react';
import DetailMapContent from '../../components/Content/DetailMapContent';

class DetailMapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            latitude: nextProps.latitude,
            longitude: nextProps.longitude
        })
    }

    render() {
        return (
            <DetailMapContent />
        );
    }
}

export default DetailMapContainer;