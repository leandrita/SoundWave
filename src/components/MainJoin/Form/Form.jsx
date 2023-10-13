import React from 'react';
import "../Form/Form.css";
import "../Form/FormMobile.css";
import "../Form/FormTablet.css";

function Form() {
  return (
    <form className='form'>
      <label className='inputText' htmlFor='name'>Name:</label>
      <input className='inputSpace' id='name' type='text'></input>
      <label className='inputText' htmlFor='email'>Email:</label>
      <input className='inputSpace' id='email' type='email'></input>
      <label className='inputText' htmlFor='password'>Password:</label>
      <input className='inputSpace' id='password' type='password'></input>
      <button className='joinNowBtn' type='submit'>Join Now</button>
    </form>
  )
}

export default Form