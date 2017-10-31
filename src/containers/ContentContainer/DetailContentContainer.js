import React, { Component } from 'react';
import * as service from '../../services/getService';
import DetailContent from '../../components/Content/DetailContent';

class DetailContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comomnData: '',
        };
    }

    viewDetailCommon = async (contentId) => {
        const detailCommon = await service.getDetailCommon(contentId);
        let commonData = detailCommon.data.response.body.items.item;
        this.setState({
            comomnData: commonData
        });
    }

    componentWillReceiveProps(nextProps) {
        this.viewDetailCommon(nextProps.contentId);
    }

    render() {
        let commonData = this.state.comomnData;
        return (
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
        );
    }
}

export default DetailContentContainer;