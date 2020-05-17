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
    <div>
      <TextField variant="outlined" label="What's on your mind?" onChange={handleFieldChange} />
      <Button onClick={handleClick} variant="contained" color="primary"> Submit </Button>
    </div>
  );
}

export default InputField;
