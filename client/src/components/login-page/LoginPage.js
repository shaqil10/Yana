import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from '@reach/router';
import "./LoginPage.css";
import useLoginStyles from './LoginPage.css.js';

const LoginPage = () => {
    const login = useLoginStyles();

    return (
        <div className="login-page">
            <form
                method="POST"
                action="http://localhost:4000"
                style={{ margin: "auto", minWidth: 500, maxWidth: 700, margin: "auto", display: "grid" }}
            >
                <Grid container style={{ margin: "auto" }}>
                    <Grid item xs={6} style={{ marginRight: 20 }}>
                        <Typography>
                            Facebook Username:
                            </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="email"
                            id="standard-basic"
                            label="Email"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} style={{ marginRight: 20, width: "50%" }}>
                        <Typography>
                            Password:
                            </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            name="password"
                            id="standard-basic"
                            label="Password"
                        />
                    </Grid>
                </Grid>
                <Button
                    id="login-button"
                    type="submit"
                >
                    Log in
                </Button>
            </form >
        </div >
        // <div className="prompt" id="login-prompt" align="center">
        //     <h2>Login with Facebook:</h2>
        // </div>

        // <div className="Email" align="center">
        //     <form method="POST" action="http://localhost:4000">
        //         <input
        //             type="text"
        //             name="email"
        //             className="lg-input"
        //             placeholder="E-mail address" />
        //         <br />
        //         <input
        //             type="text"
        //             name="password"
        //             className="lg-input"
        //             placeholder="Password" />
        //         <br />
        //         <Link to="/chat-window">
        //             <Button
        //                 id="login-button"
        //                 type="submit"
        //             >
        //                 Log in
        //                 </Button>
        //         </Link>
        //     </form>
        // </div>
    );
}

export default LoginPage;
