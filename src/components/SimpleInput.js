import { useState, useRef } from "react";



const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [enterNameTouched, setEnterNameTouched] = useState(false)

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
    if (event.target.value.trim() !== '') {
      setIsValid(true)
      
    }
  }

  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true)
    if (enteredName.trim() === '') {
      setIsValid(false)
      return
    }

  }
  const submitHandler = event => {
    setEnterNameTouched(true)
    // use state
    event.preventDefault()
    console.log(enteredName);
    if (enteredName.trim() === '') {
      setIsValid(false)
      return
    }

    // if use ref
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
  }
  const nameInputIsInvalid = !isValid && enterNameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onBlur={nameInputBlurHandler}
          ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
