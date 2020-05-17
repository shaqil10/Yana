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
        let response = generateResponse((result + ' ').repeat(200 / result.length + 1));
        res.send(response);
      })
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

function generateResponse(sentimentData) {
  let specifiedResponse = hardcodedResponse(sentimentData);
  if (specifiedResponse) {
    return specifiedResponse;
  } else {
      let score = sentimentData.magnitude * sentimentData.score;
      return genericResponse(score);
  }
}

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

/*
* If input contains one or more flagged words,
* returns a randomly selected response corresponding to level of severity.
* Otherwise, returns false.
* */
function hardcodedResponse(text, level) {

  const phrases_level_2 = ['nobody', 'alone', 'depressed', 'sad', 'help', 'drugs', 'naloxone'];
  const phrases_level_3 = ['need help', 'kill myself', 'die', 'overdose'];

  let response;

  for (let phrase of phrases_level_3) {
    if (text.contains(phrase)) {
      const responses_level_3 = [
        'This sounds like an emergency. I am reaching out to a friend now.',
        'Don\'t worry - Help is on the way.',
          'I am sending a notification to your friend that you may need help.'
      ];
      response = responses_level_3[Math.floor(Math.random() * responses_level_3.length)];
    }
  }

  for (let phrase of phrases_level_2) {
    if (text.contains(phrase)) {
      const responses_level_2 = [
        'It seems like you\'re not doing too well. Remember to be safe if you think you might use.',
        'I\'m sorry to hear that.',
          'If you\'re thinking of using - make sure to be safe.',
      ];
      response = responses_level_2[Math.floor(Math.random() * responses_level_2.length)];

    }
  }

  return false;
}

/*
* Returns a response based on whether the provided score is positive or negative. TODO.
* */
function genericResponse(score) {
  const positive_phrases = [
    // TODO
  ];
  const negative_phrases = [
    // TODO
  ];
  if (score < 0) {
    return negative_phrases[Math.floor(Math.random() * negative_phrases.length)];
  } else {
    return positive_phrases[Math.floor(Math.random() * positive_phrases.length)];
  }
}
