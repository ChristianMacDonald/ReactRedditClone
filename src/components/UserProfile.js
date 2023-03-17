import { useEffect } from 'react';
import { Card, Spinner } from 'reactstrap';
import { useLazyGetTokenOwnerQuery } from '../slices/ribbitApi'

import userIcon from '../images/icons8-person-64.png';

import "./UserProfile.css";

function UserProfile() {
  let [triggerGetTokenOwner, tokenOwnerState] = useLazyGetTokenOwnerQuery();

  useEffect(() => {
    triggerGetTokenOwner(localStorage.getItem('token'));
  }, []);

  return (
    <Card>
      {tokenOwnerState.isLoading ? <Spinner>Loading...</Spinner> : null}
      {tokenOwnerState.isSuccess ? <img src={userIcon}/> : null}
      {tokenOwnerState.isSuccess ? <h2>Username: {tokenOwnerState.data.username}</h2> : null}
    </Card>
  );
}

export default UserProfile;