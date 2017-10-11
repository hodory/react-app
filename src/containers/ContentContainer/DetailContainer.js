import React, { Component } from 'react';
import * as service from '../../services/getService';
import Detail from '../../components/Content/Detail';

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    viewDetail = async (props) => {
        let params = props.match.params;
        const detail = await service.getDetail(params.contentId);
        let data = detail.data.response.body.items.item;
        this.setState({
            data: data
        });
    }

    componentDidMount() {
        this.viewDetail(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.viewDetail(nextProps);
    }

    render() {
        let data = this.state.data;
        return (
                <Detail
                addr1={data.addr1}
                addr2={data.addr2}
                overview={data.overview}
                tel={data.tel}
                title={data.title}
                    />
        );
    }
}

export default DetailContainer;