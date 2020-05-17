import React, {useEffect, useState} from "react";
import InputField from "../input-field/InputField";
import axios from "axios";

function ChatWindow(props) {
  const [values, setValues] = useState({messageCounter: -1, messages: [], attempts: 0});
  useEffect(() => {
    if (values.messageCounter % 2 === 0) {
        console.log(values.messages);
        console.log(values.messageCounter);
        console.log("messages: " + values.messages[values.messageCounter]);
      axios.post("http://localhost:4000/query", {text: values.messages[values.messageCounter], attempts: values.attempts})
          .then((result) => {
            setValues({...values, messages: [...values.messages, [result.data][0]], messageCounter: values.messageCounter + 1, attempts: values.attempts + 1});
            console.log(result);
          });
    }
  }, [values]);
  const handleFieldChange = (value) => {
    setValues({ ...values, messageCounter: values.messageCounter + 1, messages: [...values.messages, value]})
    console.log(value);
  };
  const field = <InputField onClick={handleFieldChange} />;
  return <div>{field}</div>;
}

export default ChatWindow;
