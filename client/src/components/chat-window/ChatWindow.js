import React, { useState } from "react";
import InputField from "../input-field/InputField";

function ChatWindow(props) {
  const [values, setValues] = useState({});
  const handleFieldChange = (value) => {
    setValues({ ...values, input: value });
    console.log(values.input);
  };
  const field = <InputField onClick={handleFieldChange} />;
  return <div>{field}</div>;
}

export default ChatWindow;
