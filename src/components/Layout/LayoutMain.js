import React from 'react';
import Content from '../Content/Content';
import * as service from '../../services/getService';

export default class LayoutMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areaData: [],
            pageNo: 1
        };
    }
    fetchInfo = async (props) => {
        let params = props.match.params;
        if (params.areaCode === 'all') params.areaCode = null;
        const areaService = await service.getAreaData(this.state.pageNo, '', params.areaCode, params.sigugun);

        let areaData = areaService.data.response.body.items.item;
        this.setState({
            areaData: areaData,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.fetchInfo(nextProps);
    }

    componentDidMount(props) {
        this.fetchInfo(this.props);
    }

    render() {
        return (
            <section>
                <div className="container">
                    <ul className="main-items clearfix">
                        {this.state.areaData.map((value, index) => {
                            return (
                                <Content addr={value.addr1}
                                    title={value.title}
                                    thumb_url={value.firstimage}
                                    reg_date={value.createdtime}
                                    areaCode={value.areacode}
                                    contentTypeId={value.contenttypeid}
                                    contentId={value.contentid}
                                    key={index}
                                />
                            );
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}