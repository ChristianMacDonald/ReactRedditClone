import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { Post } from '../components';

import { useLazyGetPostsByPondNameQuery } from '../slices/ribbitApi';

function Pond() {
  let { name } = useParams();

  let [triggerGetPostsByPondName, getPostsByPondNameState] = useLazyGetPostsByPondNameQuery();

  useEffect(() => {
    triggerGetPostsByPondName(name);
  }, [name]);

  return (
    <main>
      <h2>p/{name}</h2>
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