import React, { useEffect, useState } from "react";
import InputField from "../input-field/InputField";
import axios from "axios";
import { blue } from "@material-ui/core/colors";

function ChatWindow({ email, password, friends }) {
  const chatWindowStyles = {
    backgroundColor: "white",
    height: "50vh",
    width: "87%",
    maxWidth: 900,
    marginBottom: 30,
    border: "solid #CCCCCC 6px",
    borderRadius: 15
  }

  const sendFbMessage = () => {
    axios.post("http://localhost:4000", {
      email: email,
      password: password,
      friends: friends
    })
  }

  const [values, setValues] = useState({});
  const handleFieldChange = (value) => {
    setValues({ ...values, input: value })
    console.log(value);
    axios.post("http://localhost:4000/query", { text: value })
      .then((result) => {
        setValues({ ...values, sentiment: result.data[0][0] });
      });
    console.log(values.sentiment);
  };

  return (
    <div className="chat-window" style={chatWindowStyles}>
      <div>

      </div>
      {/* <InputField onClick={handleFieldChange} /> */}
    </div>
  );
}

export default ChatWindow;
