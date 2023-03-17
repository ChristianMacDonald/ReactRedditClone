import { Link } from 'react-router-dom';
import { Button, Card } from 'reactstrap';

import { FormSwitcher } from '.';

import './LoginModal.css';

function LoginModal(props) {
  let showFormSwitcher = localStorage.getItem('token') === null;

  let signOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  let redirect = e => {
    window.location = 'http://localhost:3000/my-account';
    props.toggle();
  }

  return (
    <div className='login-modal'>
      <Card>
        <Button color="danger" onClick={props.toggle}>Close X</Button>
        {showFormSwitcher ? <FormSwitcher toggle={props.toggle}/> : null}
        {!showFormSwitcher ? <Link to='/my-account' onClick={redirect}>My Account</Link> : null}
        {!showFormSwitcher ? <Button onClick={signOut}>Sign Out</Button> : null}
      </Card>
    </div>
  );
}

export default LoginModal;