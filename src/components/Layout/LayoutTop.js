import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import Login from '../Login/Login';
import './Layout.css';

export default class TopLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleClick = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="menu-wrap">
                <nav className="menu">
                    <ul className="clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <a>조회<span className="arrow">&#9660;</span></a>
                            <ul className="sub-menu">
                                <li><Link to="/area/all">지역별조회</Link></li>
                                <li><Link to="/location">위치별조회</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={this.handleClick}>SNS 로그인</a>
                        </li>
                        <ReactModal isOpen={this.state.showModal}
                            contentLabel="Example"
                            onRequestClose={this.handleCloseModal}
                            shouldCloseOnOverlayClick={false}
                            className="Modal"
                        >
                            <Login close={this.handleCloseModal}></Login>
                        </ReactModal>
                    </ul >
                </nav>
            </div>
        );
    }
}