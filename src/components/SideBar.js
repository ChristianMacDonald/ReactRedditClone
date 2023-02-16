import { FeedsSideBarNav } from '.';

import './SideBar.css';

function SideBar() {
  let options = ['main', 'not main', 'yet again not main']

  return (
    <aside className="side-bar">
      <FeedsSideBarNav options={options}/>
    </aside>
  );
}

export default SideBar;