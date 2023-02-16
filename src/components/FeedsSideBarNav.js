import './FeedsSideBarNav.css';

function FeedsSideBarNav(props) {
  return (
    <nav className="feeds-side-bar-nav">
      {props.options.map((element, i) => <a href="" key={i}>{element}</a>)}
    </nav>
  );
}

export default FeedsSideBarNav;