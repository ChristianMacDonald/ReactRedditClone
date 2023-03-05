import { useEffect, useState } from 'react';
import { Button, Card } from 'reactstrap';

import { FormSwitcher, UserProfile } from '.';
import { useLazyGetTokenOwnerQuery } from '../slices/ribbitApi';

import './LoginModal.css';

function LoginModal(props) {
  let showFormSwitcher = localStorage.getItem('token') === null;

  let signOut = () => {
    localStorage.removeItem('token');
    props.toggle();
  }

  return (
    <div className="login-modal">
      <Card>
        <Button onClick={props.toggle}>Close X</Button>
        {showFormSwitcher ? <FormSwitcher toggle={props.toggle}/> : null}
        {!showFormSwitcher ? <UserProfile/> : null}
        {!showFormSwitcher ? <Button onClick={signOut}>Sign Out</Button> : null}
      </Card>
    </div>
  );
}

export default LoginModal;