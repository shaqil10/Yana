import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core'

function InputField(props) {

  const [values, setValues] = useState({});

  const handleClick = () => {
    props.onClick(values.input);
  };

  const handleChange = (val) => {
    setValues({ ...values, input: val.target.value });
  };

  return (
    <div>
      <TextField variant="outlined" label="What's on your mind?" onChange={handleChange} />
      <Button onClick={handleClick} variant="contained" color="primary"> Submit </Button>
    </div>
  );
}

export default InputField;
