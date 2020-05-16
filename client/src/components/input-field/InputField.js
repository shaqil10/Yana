import React from "react";
import { Button } from '@material-ui/core'

function InputField(props) {

  let textInput = React.createRef();

  const handleClick = () => {
    props.onClick(textInput.current.value);
  };
  return (
    <div>
      <input ref={textInput} />
      <Button onClick={handleClick} variant="contained" color="primary"> Submit </Button>
    </div>
  );
}

export default InputField;
