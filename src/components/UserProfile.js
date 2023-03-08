import { useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { useLazyGetTokenOwnerQuery } from '../slices/ribbitApi'

function UserProfile(props) {
  let [triggerGetTokenOwner, tokenOwnerState, lastGetPostsPromiseInfo] = useLazyGetTokenOwnerQuery();

  useEffect(() => {
    triggerGetTokenOwner(localStorage.getItem('token'));
  }, []);

  return (
    <article>
      {tokenOwnerState.isLoading ? <Spinner>Loading...</Spinner> : null}
      {tokenOwnerState.isSuccess ? <h2>{`Username: ${tokenOwnerState.data.username}`}</h2> : null}
    </article>
  );
}

export default UserProfile;