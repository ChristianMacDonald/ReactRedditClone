import { PopularPosts, TrendingToday } from '.';

import './Main.css';

function Main() {
  return (
    <main className='main'>
      <TrendingToday/>
      <PopularPosts/>
    </main>
  );
}

export default Main;