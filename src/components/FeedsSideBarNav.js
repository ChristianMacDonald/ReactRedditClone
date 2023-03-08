import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import { useLazyGetPondsQuery } from '../slices/ribbitApi';

import './FeedsSideBarNav.css';

function FeedsSideBarNav(props) {
  let [triggerGetPonds, getPondsState] = useLazyGetPondsQuery();

  useEffect(() => {
    triggerGetPonds();
  }, []);
  
  console.log(getPondsState);

  return (
    <nav className="feeds-side-bar-nav">
      {getPondsState.isLoading ? <Spinner>Loading...</Spinner> : null}
      {
        getPondsState.isSuccess ? (
          getPondsState.data.map((pond, i) => <Link to={`p/${pond.name}`} key={i}>p/{pond.name}</Link>)
        ) : null
      }
    </nav>
  );
}

export default FeedsSideBarNav;