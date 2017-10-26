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
        this.setState({ value: event.target.value });
        this.props.history.push('/info/' + event.target.value)
    }
    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="">전체</option>
                    {this.state.areaData.map((value, index) => {
                        return (<option key={index} value={value.code}>{value.name}</option>);
                    })}
                </select>
            </div >
        );
    }
}