import React from 'react';
import Content from '../Content/Content';
import * as service from '../../services/getService';

export default class LayoutMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divisionData: [],
            areaData: [],
        };
    }
    fetchInfo = async (props) => {
        let params = props.match.params;
        const divisionService = await service.getDivisionCode('A01', 'A0101');
        const areaService = await service.getAreaData(params.areaCode, params.sigugun);

        let divisionData = divisionService.data.response.body.items.item;
        let areaData = areaService.data.response.body.items.item;
        this.setState({
            divisionData: divisionData,
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