import React, { Component } from 'react';
import * as Oauth from '../../services/Oauth';
import * as firebaseService from '../../services/firebasedb';

export default class Google extends Component {
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

    Login = () => {
        Oauth.google().then((result) => {
            // This gives you a Facebook Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            let user_info = result.additionalUserInfo.profile;
            window.sessionStorage.setItem("token", token);
            window.sessionStorage.setItem("email", user.email);
            window.sessionStorage.setItem("user_info", user_info);
            firebaseService.writeData(user_info.id, user.email, user_info, token);
            this.setState({
                setLogin: true
            });
        }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
        });
    }

    render() {
        return (
            <button onClick={this.Login}>구글 로그인</button>
        );
    }
}