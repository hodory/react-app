import React from 'react';
import * as service from '../../services/getService';
import { Link } from 'react-router-dom';

export default class LayoutMain extends React.Component {
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
                <div>
                    <ul>
                        <li><Link to="/info/">전체</Link></li>
                        <li><Link to="/info/1">자연</Link></li>
                        <li><Link to="/info/2">체험</Link></li>
                        <li><Link to="/info/3">문화시설</Link></li>
                        <li><Link to="/info/4">레포츠</Link></li>
                        <li><Link to="/info/5">역사</Link></li>
                        <li><Link to="/info/6">테마</Link></li>
                        <li><Link to="/info/7">쇼핑</Link></li>
                    </ul>
                </div>
            </div >
        );
    }
}