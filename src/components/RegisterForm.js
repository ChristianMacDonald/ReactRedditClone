import { useEffect, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

import { useRegisterMutation } from '../slices/ribbitApi';

function RegisterForm(props) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  let updateUsername = e => {
    setUsername(e.target.value);
  }

  let updatePassword = e => {
    setPassword(e.target.value);
  }

  let [trigger, mutationState] = useRegisterMutation();

  let submit = e => {
    e.preventDefault();
    trigger({ username, password });
  }

  useEffect(() => {
    if (mutationState.status === 'fulfilled') {
      localStorage.setItem('token', mutationState.data.token);
      props.toggle();
    }
  }, [mutationState.status])

  return (
    <Form className="register-form">
      <h2>Register</h2>
      <FormGroup>
        <Label for="register-username">Username</Label>
        <Input type="text" id="register-username" placeholder="Type username here..." onChange={updateUsername}/>
      </FormGroup>
      <FormGroup>
        <Label for="register-password">Password</Label>
        <Input type="password" id="register-password" placeholder="Type password here..." onChange={updatePassword}/>
      </FormGroup>
      <Input type="submit" onClick={submit}/>
    </Form>
  );
}

export default RegisterForm;