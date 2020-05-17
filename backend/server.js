const analyzeText = require("../backend/life_saver/nlp/nlp");
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
  sendMessage(req.body);
});

app.post("/query", (req, res) => {
  console.log(req.body);
  analyzeText(req.body.text)
      .then((result) => {
        console.log(result);
        res.send(result);
      })
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

function hardcodedResponse(text, level) {

  const generic_responses = [
      'something'
  ];

  const phrases_level_1 = ['feeling better'];
  const phrases_level_2 = ['nobody', 'alone', 'depressed', 'sad', ];
  const phrases_level_3 = ['need help', 'kill myself', 'die', 'overdose'];

  let response;

  for (let phrase of phrases_level_3) {
    if (text.contains(phrase)) {
      // TODO - hard-code stuff
    }
  }

  for (let phrase of phrases_level_2) {
    if (text.contains(phrase)) {
      // TODO - hard-code stuff
    }
  }

  for (let phrase of phrases_level_1) {
    if (text.contains(phrase)) {
      // TODO - hard-code stuff
    }
  }
}
