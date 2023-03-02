import { Button, Card } from 'reactstrap';

import { LoginForm } from '.';

import './LoginModal.css';

function LoginModal(props) {
  return (
    <div className="login-modal">
      <Card>
        <Button onClick={props.toggle}>Close X</Button>
        <LoginForm/>
      </Card>
    </div>
  );
}

export default LoginModal;