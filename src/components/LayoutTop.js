import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from './LoginComponent';
export default class TopLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu-wrap">
                <nav className="menu">
                    <ul className="clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/info/1">소개<span className="arrow">&#9660;</span></Link>
                            <ul className="sub-menu">
                                <li><a>Components</a></li>
                                <li><a>Github</a></li>
                            </ul>
                        </li>
                        <li><a>제품</a></li>
                        <LoginComponent></LoginComponent>
                    </ul >
                </nav>
            </div>
        );
    }
}