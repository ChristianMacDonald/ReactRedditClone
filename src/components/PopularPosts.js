import { useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { Post } from '.';
import { useLazyGetPostsQuery } from '../slices/ribbitApi';

import './PopularPosts.css';

function PopularPosts(props) {
  let [
    triggerGetPostsQuery,
    getPostsState
  ] = useLazyGetPostsQuery();

  useEffect(() => {
    triggerGetPostsQuery();
  }, []);

  return (
    <section className="popular-posts">
      <h2>Popular Posts:</h2>
      {getPostsState.isLoading ? <Spinner>Loading...</Spinner> : null}
      {
        getPostsState.isSuccess ? (
          getPostsState.data.map((post, i) => <Post post={post} key={i}/>)
        ) : null
      }
    </section>
  );
}

export default PopularPosts;