import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios';

const LoginPage = ({ handleEmail, handlePassword, handleFirst, handleSecond, handleThird, handleClick }) => {
    // useEffect(() => {
    //     async function sendFbMessage() {
    //         const res = await axios.post("http://localhost:4000/", {
    //             email: email,
    //             password: password,
    //         });
    //         console.log(res.statusText);
    //     }
    //     if (submitted) sendFbMessage();
    // }, [submitted, setSubmitted])

    return (
        <div className="login-page">
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
                        onChange={handleEmail}
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
                        onChange={handlePassword}
                    />
                </Grid>
            </Grid>
            <Grid container style={{ margin: "auto" }}>
                <Grid item xs={6} style={{ marginRight: 20 }}>
                    <Typography>
                        Friends:
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField
                        name="friend"
                        id="standard-basic"
                        label="Friend"
                        onChange={handleFirst}
                    />
                </Grid>
            </Grid>
            <Grid container style={{ margin: "auto" }}>
                <Grid item xs={6} style={{ marginRight: 20 }}>
                </Grid>
                <Grid item>
                    <TextField
                        name="friend"
                        id="standard-basic"
                        label="Friend"
                        onChange={handleSecond}
                    />
                </Grid>
            </Grid>
            <Grid container style={{ margin: "auto" }}>
                <Grid item xs={6} style={{ marginRight: 20 }}>
                </Grid>
                <Grid item>
                    <TextField
                        name="friend"
                        id="standard-basic"
                        label="Friend"
                        onChange={handleThird}
                    />
                </Grid>
            </Grid>
            <Link to="/chat-window">
                <Button
                    id="login-button"
                    type="submit"
                    onClick={handleClick}
                >
                    Log in
                </Button>
            </Link>
        </div >
    );
}

export default LoginPage;
