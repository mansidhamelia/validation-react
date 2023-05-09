import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enterNameTouched, setEnterNameTouched] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enterNameTouched

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true)
  }

  const submitHandler = event => {
    event.preventDefault()
    setEnterNameTouched(true)

    if (!enteredNameIsValid) {
      return
    }
    console.log(enteredName);
    setEnteredName('')
    setEnterNameTouched(false)

  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onBlur={nameInputBlurHandler}
          type='text' id='name' onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
