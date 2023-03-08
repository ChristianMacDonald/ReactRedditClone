import { useEffect } from "react";
import { Spinner } from "reactstrap";

import { useLazyGetTokenOwnerQuery } from "../slices/ribbitApi";

function User() {
  let [triggerGetTokenOwner, tokenOwnerState] = useLazyGetTokenOwnerQuery();
  
  useEffect(() => {
    let token = localStorage.getItem('token');

    if (token) {
      triggerGetTokenOwner(token);
    } else {
      window.location.replace('http://localhost:3000');
    }
  }, []);

  return (
    <main className="user-page">
      {tokenOwnerState.isLoading ? <Spinner>Loading...</Spinner> : null}
      {tokenOwnerState.isSuccess ? <h2>Username: {tokenOwnerState.data.username}</h2> : null}
    </main>
  );
}

export default User;