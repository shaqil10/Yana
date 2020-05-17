import React, { useState, useEffect } from "react";
import { Link, Router } from "@reach/router";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChatWindow from '../chat-window/ChatWindow';
// import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState([]);
    const [third, setThird] = useState([]);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        if (submitted) {
            console.log(`Email: ${email}, Password: ${password}, friends: ${friends}`);
            //set email and password states and pass it to chat window
        }
    }, [submitted, setSubmitted]);

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
                        onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setPassword(e.target.value)}
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
                        onChange={e => setFirst([e.target.value])}
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
                        onChange={e => setSecond([e.target.value])}
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
                        onChange={e => setThird([e.target.value])}
                    />
                </Grid>
            </Grid>
            <Link to="/chat-window">
                <Button
                    id="login-button"
                    type="submit"
                    onClick={() => {
                        setSubmitted(true);
                        setFriends(first.concat(second).concat(third));
                    }}
                >
                    Log in
                </Button>
            </Link>
            <Router>
                <ChatWindow
                    email={email}
                    password={password}
                    friends={friends}
                    path="/chat-window"
                />
            </Router>
        </div >
    );
}

export default LoginPage;
