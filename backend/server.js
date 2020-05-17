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

function inputDispatch(userInput, numAttempts) {
    switch (userInput.toLowerCase()) {
        case "use":
        return useHelper(numAttempts);
        break;

        case "help":
        return helpHelper();
        break;

        default:
        return generateResponse(userInput);
        break;
    }
}


function useHelper(numAttempts) {
    switch (numAttempts) {
        case 0:
        return ("Thank you for letting me know. Please remember to have naloxone"
        + "nearby in case something goes wrong. If you need anything, I'm here.");
        break;

        case 1:
        return "Hey, are you okay?";
        break;

        case 2:
        return ("Hey, are you okay? I will be notifying your friends momentarily"
        + "if you do not respond.");
        break;

        case 3:
        return helpHelper();
        break;

        default:
        return;
    }
}

function helpHelper() {
    return "I am notifying your friends of the situation.";
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
