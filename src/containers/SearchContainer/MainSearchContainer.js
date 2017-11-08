import React from 'react';
import './SearchContainer.css';

export default class MainSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            areaCode: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        this.props.history.push('/main/' + event.target.value)
    }

    componentDidMount() {
        if (this.props.match.params.areaCode !== undefined)
            this.setSelectBox(this.props.match.params.areaCode);
    }
    componenDidUpdate(nextProps) {
        this.setSelectBox(nextProps.match.params.areaCode);
    }

    setSelectBox = (value) => {
        document.getElementById('select_id').value = value;
    }

    render() {
        return (
            <div className="search-div">
                <select className="top-selectbox" id="select_id" value={this.state.value} onChange={this.handleChange}>
                    <option value="">전체</option>
                    <option value="1">서울</option>
                    <option value="2">인천</option>
                    <option value="3">대전</option>
                    <option value="4">대구</option>
                    <option value="5">광주</option>
                    <option value="6">부산</option>
                    <option value="7">울산</option>
                    <option value="8">세종특별자치시</option>
                    <option value="31">경기도</option>
                    <option value="32">강원도</option>
                    <option value="33">충청북도</option>
                    <option value="34">충청남도</option>
                    <option value="35">경상북도</option>
                    <option value="36">경상남도</option>
                    <option value="37">전라북도</option>
                    <option value="38">전라남도</option>
                    <option value="39">제주도</option>
                </select>
            </div >
        );
    }
}