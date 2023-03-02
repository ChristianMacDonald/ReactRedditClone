import { useEffect, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

import { useLoginMutation } from '../slices/ribbitApi';

import './LoginForm.css'

function LoginForm(props) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  let updateUsername = e => {
    setUsername(e.target.value);
  }

  let updatePassword = e => {
    setPassword(e.target.value);
  }

  let submit = e => {
    e.preventDefault();
    trigger({ username, password });
  }

  let [trigger, mutationState] = useLoginMutation();

  console.log(mutationState);

  useEffect(() => {
    if (mutationState.status === 'fulfilled') {
      localStorage.setItem('token', mutationState.data.token);
    }
  }, [mutationState.status])

  return (
    <Form className="login-form">
      <FormGroup>
        <Label for="login-username">Username</Label>
        <Input type="text" id="login-username" placeholder="Type username here..." onChange={updateUsername}/>
      </FormGroup>
      <FormGroup>
        <Label for="login-password">Password</Label>
        <Input type="password" id="login-password" placeholder="Type password here..." onChange={updatePassword}/>
      </FormGroup>
      <Input type="submit" onClick={submit}/>
    </Form>
  );
}

export default LoginForm;