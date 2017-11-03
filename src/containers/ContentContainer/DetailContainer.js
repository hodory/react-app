import React, { Component } from 'react';
import * as service from '../../services/getService';
import DetailContent from '../../components/Content/DetailContent';
import DetailImageContainer from './DetailImageContainer';
import DetailMapContainer from './DetailMapContainer';

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentId: '',
            contentTypeId: '',
            commonData: [],
        };
    }

    componentDidMount() {
        this.viewDetailCommon(this.props);
    }

    viewDetailCommon = async (props) => {
        let params = props.match.params;
        let contentId = params.contentId
        const detailCommon = await service.getDetailCommon(contentId);
        let commonData = detailCommon.data.response.body.items.item;
        this.setState({
            contentId: params.contentId,
            contentTypeId: params.contentTypeId,
            commonData: commonData
        });
    }

    render() {
        let commonData = this.state.commonData;
        return (
            <div>
                <div className="detail-container">
                    <DetailImageContainer contentId={this.state.contentId} contentTypeId={this.state.contentTypeId} />
                    <DetailContent
                        addr1={commonData.addr1}
                        addr2={commonData.addr2}
                        firstImage={commonData.firstimage}
                        firstImage2={commonData.firstimage2}
                        homepage={commonData.homepage}
                        overview={commonData.overview}
                        tel={commonData.tel}
                        title={commonData.title}
                    />
                </div>
                <DetailMapContainer mapX={commonData.mapx} mapY={commonData.mapy} />
            </div>
        );
    }
}

export default DetailContainer;