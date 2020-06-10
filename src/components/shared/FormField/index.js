import React, { useState } from 'react';

export default function FormField(props) {
  const [valid, setValid] = useState(true);
  const {
    required,
    type,
    placeholder,
    label,
    pattern,
    errorMsg,
    value,
  } = props;

  const onBlur = (event) => {
    setValid(event.target.checkValidity());
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
          onChange={props.handleChange}
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
