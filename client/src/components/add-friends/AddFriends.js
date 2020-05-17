import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';

const AddFriends = ({ email, password }) => {
    const [friends, setFriends] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    let addedFriendsOne = [];

    const createListOfFriends = () => {
        let tempFriends = [];
        // if (addedFriendsOne.length !== 0)
        tempFriends.push(addedFriendsOne[addedFriendsOne.length - 1]);
        setFriends(tempFriends);
        setSubmitted(true);
    }

    // useEffect(() => {
    //     console.log(friends);
    // }, [submitted, setSubmitted])

    return (
        <div className="add-friends">
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
                        onChange={e => addedFriendsOne.push(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Link to="/chat-window">
                <Button
                    id="login-button"
                    type="submit"
                    onClick={() => createListOfFriends()}
                >
                    Log in
                </Button>
            </Link>
        </div >
    )
}

export default AddFriends;