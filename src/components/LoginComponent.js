import React from 'react';
import * as Oauth from '../services/Oauth';

export default class TopLayout extends React.Component {
    constructor(props) {
        super(props);
        let isLogIn = false;
        if (window.sessionStorage.getItem("email") && window.sessionStorage.getItem("token")) {
            isLogIn = true;
        }
        this.state = {
            setLogin: isLogIn,
        }
    }

    logout = () => {
        window.sessionStorage.clear();
        this.setState({
            setLogin: false
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log('1')
    }

    Login = () => {
        Oauth.facebook();
        this.setState({
            setLogin: true
        })
    }

    render() {
        return (
            <li>
                {this.state.setLogin ? <a onClick={this.logout}>로그아웃</a> : <a onClick={this.Login}> SNS로그인</a>}
            </li>
        );
    }
}