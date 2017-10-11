import React from 'react';
import * as service from '../../services/getService';

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areaData: [],
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    fetchInfo = async () => {
        const areaCode = await service.getAreaCode();
        let areaData = areaCode.data.response.body.items.item;
        this.setState({
            areaData: areaData,
        });
    }
    componentDidMount() {
        this.fetchInfo();
    }
    handleChange(event) {
    }
    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="">전체2</option>
                {this.state.areaData.map((value, index) => {
                    return (<option key={index} value={value.code}>{value.name}</option>);
                })}
            </select>
        );
    }
}