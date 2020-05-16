import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function InputField(props) {
    const handleChange = (val) => {
        props.onChange(val.target.value);
    }
    return (
        <div>
            <input onChange={handleChange} />
        </div>
    )
}

function ChatWindow(props) {
    const [values, setValues] = useState({});
    const handleFieldChange = (value) => {
        setValues({ ...values, input: value });
        console.log(values.input);
    };
    const field = <InputField onChange={handleFieldChange} />
    return (
        <div>
            {field}
        </div>
    );
}

function App() {
  return (
    <div className="App">
      <ChatWindow />
    </div>
  );
}

export default App;
