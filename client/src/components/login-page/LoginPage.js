import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core'
import { Link } from '@reach/router';
import "./LoginPage.css"
import useLoginStyles from './LoginPage.css.js';

const LoginPage = () => {
    const login = useLoginStyles();

    // const [clicked, setClicked] = useState(false);
    // useEffect(() => {
    //     setClicked(true);

    // })

    return (
        <div className="login-page">
            <div className="prompt" id="login-prompt" align="center">
                <h2>Login with Facebook:</h2>
            </div>

            <div className="Email" align="center">
                <form method="POST" action="http://localhost:4000">
                    <input
                        type="text"
                        name="email"
                        className="lg-input"
                        placeholder="E-mail address" />
                    <br />
                    <input
                        type="text"
                        name="password"
                        className="lg-input"
                        placeholder="Password" />
                    <br />
                    <Link to="/chat-window">
                        <Button
                            id="login-button"
                            type="submit"
                        >
                            // Log in
                        </Button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
