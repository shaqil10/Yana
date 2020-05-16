import React from 'react';

function InputField(props) {
    const handleChange = (val) => {
        props.onChange(val.target.value);
    };
    return (<div>
        <input onChange={handleChange} />
    </div>);
}

export default InputField;