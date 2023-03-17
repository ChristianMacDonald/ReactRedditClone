import { useEffect } from "react";
import { UserProfile } from "../components";

function MyAccount() {
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000');
    }
  }, []);

  return (
    <main className="my-account-page">
      <UserProfile/>
    </main>
  );
}

export default MyAccount;