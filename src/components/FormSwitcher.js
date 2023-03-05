import { useState } from 'react';
import { Button, Card } from 'reactstrap';

import { LoginForm, RegisterForm } from '.';

import './FormSwitcher.css';

function FormSwitcher(props) {
  let [showLoginForm, setShowLoginForm] = useState(true);
  
  let toggle = () => {
    setShowLoginForm(!showLoginForm);
  }

  return (
    <div className='form-switcher'>
      {showLoginForm ? <Button onClick={toggle}>Switch to Register</Button> : <Button onClick={toggle}>Switch to Login</Button>}
      {showLoginForm ? <LoginForm toggle={props.toggle}/> : <RegisterForm toggle={props.toggle}/>}
    </div>
  );
}

export default FormSwitcher;