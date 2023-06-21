import React from 'react';
import "../css/Form.css";
import "../css/FormMobile.css";

function Form() {
  return (
    <div className='form'>
      <label className='inputText'>Name:</label>
      <input className='inputSpace'></input>
      <label className='inputText'>Email:</label>
      <input className='inputSpace'></input>
      <label className='inputText'>Password:</label>
      <input className='inputSpace'></input>
      <button className='joinNowBtn'>Join Now</button>
    </div>
  )
}

export default Form