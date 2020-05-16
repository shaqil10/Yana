const express = require("express");
const login = require("facebook-chat-api");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    sendMessage();
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
});

const sendMessage = () => {
    login({ email: "rhacks2020@gmail.com", password: "pw121234" }, (err, api) => {
        if (err) return console.error(err);
        let msg = "this is so cool";
        // sendMessages();
        api.getFriendsList((err, friends) => {
            friends.forEach(friend => {
                console.log(friend.fullName);
            });
        });
    });
}

const sendMessages = (msg) => {
    let leoID = "1817870651";
    let aidanID = "793724637";
    let shaqilID = "570920248";
    let myID = "100051348402858";
    let ids = [leoID, aidanID, shaqilID, myID];

    for (id of ids) {
        api.sendMessage(msg, id);
    }
}
