import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core'

function InputField({ handleChange }) {
  const [chat, setChat] = useState("");

  const handleFieldChange = handledChat => {
    setChat(handledChat.target.value);
  }

  const handleClick = () => {
    handleChange(chat);
  }

  return (
    <div style={{ border: "5px rgb(207, 189, 253) solid", borderRadius: "10px", padding: 15 }}>
      <TextField fullWidth variant="outlined" label="You are not alone. What's on your mind?" onChange={handleFieldChange} />
      <div style={{ marginTop: 10 }}>
        <Button onClick={handleClick} size="large" variant="contained" color="primary"> Submit </Button>
      </div>
    </div>
  );
}

export default InputField;
