import React, { useState } from "react";
import InputField from "../input-field/InputField";
import axios from "axios";

function ChatWindow(props) {
  const [values, setValues] = useState({});
  const handleFieldChange = (value) => {
    setValues({ ...values, input: value });
    console.log(values.input);
    axios.post("localhost://4000", values.input)
        .then((result) => {
          console.log(result);
        })
  };
  const field = <InputField onClick={handleFieldChange} />;
  return <div>{field}</div>;
}

export default ChatWindow;
