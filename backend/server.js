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

app.post("/", (req, _res) => {
  sendMessage(req.body);
});

app.post("/query", (req, res) => {
  let newInputString = (req.body.text + " ").repeat(200 / req.body.text.length + 1);
  let returnValue = inputDispatch(req.body.text, req.body.attempts);
  if (!returnValue) {
    analyzeText(newInputString)
      .then((result) => {
        res.send(generateResponse(result[0][0], req.body.text));
      })
  } else {
    res.send(returnValue)
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});


function generateResponse(sentimentData, input) {
  let specifiedResponse = hardcodedResponse(input);
  if (specifiedResponse) {
    return specifiedResponse;
  } else {
    let score = sentimentData.magnitude * sentimentData.score;
    return genericResponse(score);
  }
}

const sendMessage = ({ email, password, friends }) => {
  login({ email: email, password: password }, (err, api) => {
    if (err) return console.error(err);
    let msgs = ['ALERT!!! Ryerson Hacks has indicated they have been using drugs and need help! Please get to them quickly and take them to emergency in the case of an overdose. If you have access to naloxone, please help them administer it. It could help save their life.', "Here is some information on naloxone if you need it: Naloxone temporarily reverses opioid overdose signs and symptoms and improves respiration for 30-60 minutes. Naloxone comes in the form of a nasal spray or an injection and can be purchased at most pharmacies."];
    api.getFriendsList((err, allFriends) => {
      friends.forEach(friend => {
        allFriends.forEach(eachFriend => {
          if (friend === eachFriend.fullName)
            msgs.forEach(msg => {
              api.sendMessage(msg, eachFriend.userID);
            })
        });
      });
    });
  });
}

function inputDispatch(userInput, numAttempts) {
  switch (userInput.toLowerCase()) {
    case (" "):
      return useHelper(numAttempts);
      break;

     case ("use"):
        return useHelper(numAttempts);
        break;

    case "help":
      return helpHelper();
      break;

    default:
      return false;
      break;
  }
}


function useHelper(numAttempts) {
  switch (numAttempts) {
    case 0:
      return ("Thank you for letting me know. Please remember to have naloxone "
        + "nearby in case something goes wrong. If you need anything, I'm here.");
      break;

    case 1:
      return "Hey, are you okay?";
      break;

    case 2:
      return ("Hey, are you okay? I will be notifying your friends momentarily"
        + " if you do not respond.");
      break;

    case 3:
      return helpHelper();
      break;

    default:
        return false;
  }
}

function helpHelper() {
  return "I am notifying your friends of the situation.";
}

/*
* If input contains one or more flagged words,
* returns a randomly selected response corresponding to level of severity.
* Otherwise, returns false.
* */

function hardcodedResponse(text) {
  const phrases_level_2 = ['nobody', 'alone', 'depressed', 'sad', 'help', 'drug', 'naloxone'];
  const phrases_level_3 = ['need help', 'kill myself', 'die', 'overdose'];
  text = text.toLowerCase();

  for (let phrase of phrases_level_3) {
    if (text.includes(phrase)) {
      const responses_level_3 = [
        'This sounds like an emergency. I am reaching out to a friend now.',
        'Don\'t worry - Help is on the way.',
        'I am sending a notification to your friend that you may need help.',
        'I\'m requesting help from one of your friends. Keep calm - help is coming.'
      ];
      return responses_level_3[Math.floor(Math.random() * responses_level_3.length)];
    }
  }

  for (let phrase of phrases_level_2) {
    if (text.includes(phrase)) {
      const responses_level_2 = [
        'It seems like you\'re not doing too well. Remember to be safe if you think you might use.',
        'I\'m sorry to hear that.',
        'If you\'re thinking of using - make sure to be safe.',
        'Remember - the safest situation to use is with another person present.'
      ];
      return responses_level_2[Math.floor(Math.random() * responses_level_2.length)];

    }
  }
  return false;
}

/*
* Returns a response based on whether the provided score is positive or negative.
* */
function genericResponse(score) {
  const positive_phrases = [
    'I\'m glad to hear that.',
    'What\'s on your mind?',
    'What do you want to talk about?'
  ];
  const negative_phrases = [
    'I\'m sorry to hear that.',
    'I understand.',
    'What would you like to chat about?',
    'I am here to listen.'
  ];
  if (score < 0) {
    return negative_phrases[Math.floor(Math.random() * negative_phrases.length)];
  } else {
    return positive_phrases[Math.floor(Math.random() * positive_phrases.length)];
  }
}
