import React from "react";

const InputNum = props => {
  const {
    value,
    onUpdate,
    min = 0,
    integerOnly = null,
    max = 1000,
    label = "",
    className = "",
    logValidation = null,
    pattern = null,
    ...restProps
  } = props;

  const validate = (value, min, max) => {
    let result = false;
    if (exists(value) && exists(min) && exists(max)) {
      result = min <= value && value <= max;
    }
    return result;
  };

  const exists = value => {
    return value !== null && value !== undefined;
  };

  const isValid = validate(value, min, max);
  const parseAsInteger = exists(integerOnly) && !!integerOnly;
  if (typeof logValidation === "function") {
    logValidation({ value, min, max, parseAsInteger, isValid });
  }

  const onInput =
    props.onInput ||
    (e => {
      const txtValue = e.target.value;
      let numValue =
        txtValue &&
        ((!parseAsInteger && parseFloat(txtValue)) ||
          (parseAsInteger && parseInt(txtValue, 10)));
      console.log("[InputNum.onInput] numValue", numValue);
      onUpdate(numValue);
      e.stopPropagation();
    });

  const onChange = props.onChange !== undefined ? props.onChange : e => null;
  return (
    <div className="form-group container">
      <label htmlFor="inputNum" className="col-sm-4 pl-0 justify-content-start">
        {label}
      </label>
      <input
        id="inputNum"
        type="number"
        className={
          "form-control col-sm-8 " + className + (!isValid ? " is-invalid" : "")
        }
        value={value}
        {...restProps}
        onInput={onInput}
        onChange={onChange}
        inputMode="numeric"
        pattern={pattern}
      />
      {!isValid ? (
        <div className="invalid-feedback">
          {"Expected value in [" + min + ", " + max + "] range"}
        </div>
      ) : null}
    </div>
  );
};

/*
const InputText = props => {
  const {
    value,
    onChange,
    type = "text",
    label = "",
    className = "",
    ...restProps
  } = props;
  return (
    <div className="form-group container">
      <label htmlFor="inputText" className="col-sm-4 pl-0 justify-content-start">
        {label}
      </label>
      <input
        id="inputText"
        type={type}
        className={"form-control col-sm-8 " + className}
        value={value}
        {...restProps}
        onInput={e => {
          onChange(e.target.value);
          e.stopPropagation();
        }}
      />
    </div>
  );
};
*/

export default InputNum;
