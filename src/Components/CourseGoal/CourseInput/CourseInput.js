import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isVaild, setIsVaild] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    enteredValue.trim().length===0 ? setIsVaild(false) : setIsVaild(true);
    if(!isVaild){return;}
    props.onAddGoal(enteredValue)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isVaild===false?'invalid':''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;