import { useEffect } from 'react';
import { Link, useRouteLoaderData } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useLazyGetPondsQuery } from '../slices/ribbitApi';

import './FeedsHeaderDropdownNav.css';

function FeedsHeaderDropdownNav(props) {
  let [triggerGetPonds, getPondsState] = useLazyGetPondsQuery();

  useEffect(() => {
    triggerGetPonds();
  }, []);

  let handleClick = () => {
    props.toggle();
  }

  return (
    <nav className='feeds-header-dropdown-nav'>
      {getPondsState.isLoading ? <Spinner>Loading...</Spinner> : null}
      {getPondsState.isSuccess ? getPondsState.data.map((pond, i) => <Link to={`p/${pond.name}`} key={i} onClick={handleClick}>p/{pond.name}</Link>) : null}
    </nav>
  );
}

export default FeedsHeaderDropdownNav;