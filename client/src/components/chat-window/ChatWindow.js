import React, { useEffect, useState } from "react";
import InputField from "../input-field/InputField";
import axios from "axios";

function ChatWindow({ email, password, friends }) {
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
    <div>
      <h1> Hi </h1>
      {/* <InputField onClick={handleFieldChange} /> */}
    </div>
  );
}

export default ChatWindow;
