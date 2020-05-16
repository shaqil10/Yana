import React from "react";
import { Button } from '@material-ui/core'
import "./LoginPage.css"

const LoginPage = () => (
    <div className="login-page">
        <div className = "prompt" id = "login-prompt" align = "center">
            <h2>Login with Facebook:</h2>
        </div>

        <div className="Email" align = "center">
            <form method="GET">
                <input
                    type ="text"
                    name="e-mail"
                    className = "lg-input"
                    placeholder = "E-mail address" />
                <br />
                <input
                    type ="text"
                    name="password"
                    className = "lg-input"
                    placeholder = "Password" />
                <br />
                <Button id="login-button" type="button">Log in</Button>
            </form>
        </div>
    </div>
);

export default LoginPage;
