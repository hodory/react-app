import React from 'react';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import Facebook from './Facebook';
import Google from './Google';
import './Login.css';

const Login = ({ close }) => {
    return (
        <div className="center">
            <p><Google></Google></p>
            <p><Facebook></Facebook></p>
            <button onClick={close}>CloseModal</button>
        </div>
    );
};

export default Login;