import React, { useState } from "react";
import InputField from "../input-field/InputField";
import analyzeText from "../../nlp/nlp"

function ChatWindow(props) {
  const [values, setValues] = useState({});
  const handleFieldChange = (value) => {
    setValues({ ...values, input: value });
    console.log(values.input);
    analyzeText(values.input)
        .then((result) => {
          console.log(result);
        })
  };
  const field = <InputField onClick={handleFieldChange} />;
  return <div>{field}</div>;
}

export default ChatWindow;
