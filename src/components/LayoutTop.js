import React from 'react';
import { Link } from 'react-router-dom';
import * as Oauth from '../services/Oauth';
export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };
    }

    render() {
        return (
            <div className="menu-wrap">
                <nav className="menu">
                    <ul className="clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/info/5">소개<span className="arrow">&#9660;</span></Link>
                            <ul className="sub-menu">
                                <li><a>Components</a></li>
                                <li><a>Github</a></li>
                            </ul>
                        </li>
                        <li><a>제품</a></li>
                        <li><button onClick={Oauth.facebook}>SNS로그인</button></li>
                    </ul >
                </nav>
            </div>
        );
    }
}