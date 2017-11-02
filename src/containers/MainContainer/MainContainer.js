import React, { Component } from 'react';
import ContentContainer from './ContentContainer';
import TopContentContainer from './TopContentContainer';

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            areaCode: ''
        }
    }

    componentWillMount() {
        this.setState({
            areaCode: this.props.match.params.areaCode
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            areaCode: nextProps.match.params.areaCode
        })
    }

    render() {
        return (
            <div className="main-content">
                <TopContentContainer title="관광지" contentTypeId={12} areaCode={this.state.areaCode} />
                <ContentContainer title="문화시설" contentTypeId={14} areaCode={this.state.areaCode} />
                <ContentContainer title="행사/공연/축제" contentTypeId={15} areaCode={this.state.areaCode} />
                <ContentContainer title="여행코스" contentTypeId={25} areaCode={this.state.areaCode} />
                <ContentContainer title="레포츠" contentTypeId={28} areaCode={this.state.areaCode} />
                <ContentContainer title="숙박" contentTypeId={32} areaCode={this.state.areaCode} />
                <ContentContainer title="쇼핑" contentTypeId={38} areaCode={this.state.areaCode} />
                <ContentContainer title="음식점" contentTypeId={39} areaCode={this.state.areaCode} />
            </div>
        );
    }
}

export default MainContainer;