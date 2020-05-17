import React, { useEffect, useState } from "react";
import InputField from "../input-field/InputField";
import axios from "axios";

function ChatWindow({ email, password, friends }) {
  const [chat, setChat] = useState([]);
  const [messageCounter, setMessageCounter] = useState(-1);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (messageCounter % 2 === 0) {
      const getInfo = async () => {
        const res = await axios.post("http://localhost:4000/query", {
          text: chat[messageCounter],
          attempts: attempts
        });
        setChat([...chat, [res.data][0]]);
        setMessageCounter(messageCounter + 1);
        console.log(attempts);
        setAttempts(attempts + 1);
        if (res.data === "I am notifying your friends of the situation.") {
          sendFbMessage();
        }
      }
      getInfo();
    }
  }, [messageCounter, setMessageCounter]);

  const handleChange = handledChat => {
    setChat([...chat, handledChat]);
    setMessageCounter(messageCounter + 1);
  };

  const chatWindowStyles = {
    backgroundColor: "white",
    height: "60vh",
    width: "90%",
    maxWidth: 1200,
    marginBottom: 30,
    border: "solid #CCCCCC 6px",
    borderRadius: 15,
    position: "relative"
  }

  const sendFbMessage = () => {
    axios.post("http://localhost:4000", {
      email: email,
      password: password,
      friends: friends
    })
  }

  // if the state.length is even, make one component
  // if the state.length is odd, make another component

  return (
    <div className="chat-window" style={chatWindowStyles}>
      <div style={{ width: "100%", position: "absolute", bottom: 0, fontFamily: "Arial", fontWeight: "bold", fontSize: 12 }}>
        {chat.map((each, index) => (
          (index % 2 === 0) ?
            <div className="human" align="right" style={{ marginRight: 30, marginTop: 10, marginBottom: 10 }}>
              <div style={{ border: "3px solid #CFCFCF", borderRadius: "25px", marginLeft: "50%" }}>
                <p style={{ paddingRight: 25 }}>{each}</p>
              </div>
            </div>
            :
            <div className="bot" align="left" style={{ marginLeft: 30, marginTop: 10, marginBottom: 10 }}>
              <div style={{ border: "3px solid #CFCFCF", borderRadius: "25px", marginRight: "50%" }}>
                <p style={{ paddingLeft: 25 }}>{each}</p>
              </div>
            </div>
        ))
        }
      </div >
      <InputField
        handleChange={handleChange}
      />
    </div >
  );
}

export default ChatWindow;
