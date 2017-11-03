import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import Content from '../../components/Main/Content';
import '../../components/Main/Content.css';
import * as Service from '../../services/getService.js';
import './TopContentContainer.css';

class ContentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            areaCode: '',
        };
    }

    fetchInfo = async (contentTypeId, areaCode) => {
        const areaService = await Service.getAreaData(1, contentTypeId, areaCode);
        let areaData = areaService.data.response.body.items.item;
        if (areaData) {
            this.setState({
                data: areaData
            });
        }
        let swiper = new Swiper('.top-swiper-div .swiper-top-container', {
            // Enable lazy loading
            lazy: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    componentDidMount() {
        this.fetchInfo(this.props.contentTypeId, this.props.areaCode);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchInfo(nextProps.contentTypeId, nextProps.areaCode);
    }

    render() {
        return (
            <div className="top-swiper-div">
                <section>
                    <aside> <h2>{this.props.title}</h2> </aside>
                    <div className="swiper">
                        <div className="swiper-top-container">
                            <div className="swiper-wrapper">
                                {this.state.data.map((value, index) => {
                                    return (
                                        <Content
                                            addr={value.addr1}
                                            title={value.title}
                                            thumb_url={value.firstimage}
                                            reg_date={value.createdtime}
                                            areaCode={value.areacode}
                                            contentTypeId={value.contenttypeid}
                                            contentId={value.contentid}
                                            mouseOver={this.mouseOver}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination swiper-pagination-white"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContentContainer;