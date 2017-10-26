import React, { Component } from 'react';
import Swiper from 'swiper';
import Content from '../../components/Main/Content';
import '../../components/Main/Content.css';
import * as Service from '../../services/getService.js';
import './ContentContainer.css';

class ContentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            areaCode : '',
        };
    }

    fetchInfo = async (contentTypeId,areaCode) => {
        const areaService = await Service.getAreaData(1, contentTypeId, areaCode);
        let areaData = areaService.data.response.body.items.item;
        if(areaData){
            this.setState({
                data : areaData
            });
        }
        let swiper = new Swiper('.swiper-container', {
            // Enable lazy loading
            lazy : true,
            observer :true,
            effect: 'fade',
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    }

    componentDidMount() {
        this.fetchInfo(this.props.contentTypeId,this.props.areaCode);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchInfo(nextProps.contentTypeId,nextProps.areaCode);
    }

    render() {
        return (
            <div>
                <section>
                    <aside> {this.props.title} </aside>
                    <div className="swiper">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {this.state.data.map((value, index) => {
                                return (
                                    <Content addr={value.addr1}
                                        title={value.title}
                                        thumb_url={value.firstimage}
                                        reg_date={value.createdtime}
                                        areaCode={value.areacode}
                                        contentId={value.contentid}
                                        key={index}
                                    />
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination swiper-pagination-white"></div>
                            <div className="swiper-button-next swiper-button-white"></div>
                            <div className="swiper-button-prev swiper-button-white"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContentContainer;