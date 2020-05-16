const analyzeText = require("../client/src/nlp/nlp");
const express = require("express");
const login = require("facebook-chat-api");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (_req, res) => {
  sendMessage(["Eric Kim", "Shaqil Rahemtulla"], res.send("hello"));
});

app.post("/", (req, res) => {
  analyzeText(req.data)
      .then((result) => {
        console.log(result);
        return result;
      })
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

const sendMessage = (friends) => {
  login({ email: "rhacks2020@gmail.com", password: "pw121234" }, (err, api) => {
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
