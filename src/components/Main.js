import { PopularPonds, PopularPosts, TrendingToday } from '.';

import './Main.css';

function Main() {
  return (
    <main className='main'>
      <TrendingToday/>
      <section className='popular'>
        <PopularPosts/>
        <PopularPonds/>
      </section>
    </main>
  );
}

export default Main;