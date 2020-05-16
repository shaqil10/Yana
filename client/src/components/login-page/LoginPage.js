import React from "react";

const LoginPage = () => (
    <div className="login-page">
        <div align = "center">
            <h2>Login with Facebook:</h2>
        </div>

        <div className="Email" align = "center">
            <form method="GET">
                <input
                    type ="text"
                    name="e-mail"
                    class = "lg-input"
                    placeholder = "E-mail address" />
                <br />
                <input
                    type ="text"
                    name="password"
                    class = "lg-input"
                    placeholder = "Password" />
                <br />
                <button type="login">Log in</button>
            </form>
        </div>
    </div>
);

export default LoginPage;
