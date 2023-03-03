import { useState } from 'react';
import { Button, Card } from 'reactstrap';

import { LoginForm, RegisterForm } from '.';

import './LoginModal.css';

function LoginModal(props) {
  let [showLoginForm, setShowLoginForm] = useState(true);
  
  let toggle = () => {
    setShowLoginForm(!showLoginForm);
  }

  return (
    <div className="login-modal">
      <Card>
        <Button onClick={props.toggle}>Close X</Button>
        {showLoginForm ? <Button onClick={toggle}>Register</Button> : <Button onClick={toggle}>Login</Button>}
        {showLoginForm ? <LoginForm toggle={props.toggle}/> : <RegisterForm toggle={props.toggle}/>}
      </Card>
    </div>
  );
}

export default LoginModal;