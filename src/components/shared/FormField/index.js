import React, { useState } from 'react';

export default function FormField(props) {
  const { required, type, placeholder, label, pattern, errorMsg, fn } = props;
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);

  const onBlur = (event) => {
    setValid(event.target.checkValidity());
  };

  const onChange = (event) => {
    setValue(event.target.value);
    setValid(true);
  };

  return (
    <div className="formGroup">
      <label>{label}</label>
      <div className={!valid ? 'formField invalid' : 'formField'}>
        <input
          required={required}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className="fieldUnderline"></div>
      </div>
      {!valid && (
        <small className="errMsg">
          {value.trim().length > 0 && errorMsg ? errorMsg : 'REQUIRED FIELD'}
        </small>
      )}
    </div>
  );
}
