import React, {useEffect, useState} from "react";
import InputField from "../input-field/InputField";
import axios from "axios";

function ChatWindow(props) {
  const [values, setValues] = useState({});
  const handleFieldChange = (value) => {
    setValues({ ...values, input: value })
        console.log(value);
        axios.post("http://localhost:4000/query", {text: value})
            .then((result) => {
                console.log(result);
            });
  };
  const field = <InputField onClick={handleFieldChange} />;
  return <div>{field}</div>;
}

export default ChatWindow;
