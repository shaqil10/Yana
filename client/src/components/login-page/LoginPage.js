import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios';

const LoginPage = ({ handleEmail, handlePassword, handleFirst, handleSecond, handleThird, handleClick }) => {
    const loginPageStyles = {
        height: "60vh",
        width: "90%",
        maxWidth: 1200,
        marginBottom: 30,
        position: "relative"
    }

    return (
        <div className="login-page" styles={loginPageStyles}>
            <div styles={{ width: "100" }}>
                <TextField
                    name="email"
                    id="standard-basic"
                    label="Email"
                    onChange={handleEmail}
                />
            </div>
            <div styles={{ width: "100" }}>
                <TextField
                    type="password"
                    name="password"
                    id="standard-basic"
                    label="Password"
                    onChange={handlePassword}
                />
            </div>

            <div styles={{ width: "100" }}>
                <TextField
                    id="standard-basic"
                    label="Friend"
                    onChange={handleFirst}
                />
            </div>
            <div styles={{ width: "100" }}>
                <TextField
                    name="friend"
                    id="standard-basic"
                    label="Friend"
                    onChange={handleSecond}
                />
            </div>
            <div styles={{ width: "100" }}>
                <TextField
                    name="friend"
                    id="standard-basic"
                    label="Friend"
                    onChange={handleThird}
                />
            </div>
            <div style={{ marginTop: 20 }}>
                <Link to="/chat-window">
                    <Button
                        color="primary"
                        size="small"
                        variant="contained"
                        id="login-button"
                        type="submit"
                        onClick={handleClick}
                    >
                        Begin
                </Button>
                </Link>
            </div>
        </div >
    );
}

export default LoginPage;
