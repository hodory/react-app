import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import * as service from '../../services/getService';
import DetailImages from '../../components/Content/DetailImages';
import '../../components/Content/DetailImages.css';
import noimage from '../../noimage.gif';

class DetailImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: []
        };
    }

    viewDetailImages = async (contentId, contentTypeId) => {
        const detailImages = await service.getDetailImage(contentId, contentTypeId);
        let imageData = detailImages.data.response.body.items.item;
        try {
            if (imageData.length) {
                this.setState({
                    imageData: imageData,
                });
            } else {
                let tmpArray = [];
                tmpArray.push(imageData);
                this.setState({
                    imageData: tmpArray
                });
            }
        } catch (err) {
            let tmpArray = [{
                'originimgurl': noimage,
                'smallimageurl': noimage
            }];
            this.setState({
                imageData: tmpArray
            });
        }

        let galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        let galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }

    componentWillReceiveProps(nextProps) {
        this.viewDetailImages(nextProps.contentId, nextProps.contentTypeId);
    }

    render() {
        return (
            <div className="detail-swiper-div">
                <div>
                    <div className="swiper-container gallery-top">
                        <div className="swiper-wrapper">
                            {this.state.imageData.map((value, index) => {
                                return (
                                    <DetailImages
                                        image_url={value.originimgurl}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                        <div className="swiper-button-next swiper-button-white"></div>
                        <div className="swiper-button-prev swiper-button-white"></div>
                    </div>
                </div>
                <div className="swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                        {this.state.imageData.map((value, index) => {
                            return (
                                <DetailImages
                                    image_url={value.smallimageurl}
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

export default DetailImageContainer;