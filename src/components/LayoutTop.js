import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
                            <Link to="/sub">소개<span className="arrow">&#9660;</span></Link>
                            <ul className="sub-menu">
                                <li><a>Components</a></li>
                                <li><a>Github</a></li>
                            </ul>
                        </li>
                        <li><a href="#">제품</a></li>
                    </ul >
                </nav>
            </div>
        );
    }
}