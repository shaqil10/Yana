const express = require("express");
const login = require("facebook-chat-api");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser")
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.send("hello");
});

app.post("/", (req, res) => {
  console.log(req.body);
  // sendMessage(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

const sendMessage = ({ email, password, friends }) => {
  // console.log(`Email: ${email}, PW: ${password}, Friends: ${friends}`)
  login({ email: email, password: password }, (err, api) => {
    if (err) return console.error(err);
    let msg = "Help! I may have overdosed!";
    api.getFriendsList((err, allFriends) => {
      friends.forEach(friend => {
        allFriends.forEach(eachFriend => {
          if (friend === eachFriend.fullName)
            api.sendMessage(msg, eachFriend.userID);
        });
      });
    });
  });
}
