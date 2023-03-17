import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import { CreateNewPostForm, Post } from '../components';

import { useLazyGetPostsByPondNameQuery } from '../slices/ribbitApi';

import './Pond.css';

function Pond() {
  let { name } = useParams();

  let loggedIn = localStorage.getItem('token') !== null;

  let [triggerGetPostsByPondName, getPostsByPondNameState] = useLazyGetPostsByPondNameQuery();

  let [showCreateNewPostForm, setShowCreateNewPostForm] = useState(false);

  let toggle = () => {
    setShowCreateNewPostForm(!showCreateNewPostForm);
  }

  useEffect(() => {
    triggerGetPostsByPondName(name);
  }, [name]);

  let refresh = () => {
    triggerGetPostsByPondName(name);
  }

  return (
    <main>
      <h2>p/{name}</h2>
      {loggedIn && showCreateNewPostForm ? <CreateNewPostForm toggle={toggle} refresh={refresh}/>: null}
      {loggedIn && !showCreateNewPostForm ? <Button className='create-new-post-button' onClick={toggle}>Create New</Button> : null}
      {getPostsByPondNameState.isLoading ? <Spinner>Loading...</Spinner> : null}
      {
        getPostsByPondNameState.isSuccess ? (
          getPostsByPondNameState.data.map((post, i) => <Post post={post} key={i}/>)
        ) : null
      }
    </main>
  );
}

export default Pond;