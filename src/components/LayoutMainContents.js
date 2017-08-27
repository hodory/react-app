import React from 'react';
import MainContents from './MainContents';
import * as service from '../services/getService';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divisionData: [],
            areaData: [],
        };
    }
    fetchInfo = async () => {
        const divisionService = await service.getDivisionCode('A01', 'A0101');
        const areaService = await service.getAreaData(4, 4);

        let divisionData = divisionService.data.response.body.items.item;
        let areaData = areaService.data.response.body.items.item;
        console.log(areaData);
        this.setState({
            divisionData: divisionData,
            areaData: areaData,
        });
    }
    componentDidMount() {
        this.fetchInfo();
    }
    render() {
        return (
            <section>
                <div className="container">
                    <ul className="main-items clearfix">
                        {this.state.areaData.map((value, index) => {
                            console.log(value);
                            return (
                                <MainContents addr={value.addr1} title={value.title} key={index} thumb_url={value.firstimage} reg_date={value.createdtime} />
                            );
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}