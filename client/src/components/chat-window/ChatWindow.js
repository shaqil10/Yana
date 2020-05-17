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
            setValues({ ...values, response: result.data[0][0] });
        });
    console.log(values.response);
  };
  const field = <InputField onClick={handleFieldChange} />;
  return <div>{field}</div>;
}

export default ChatWindow;
