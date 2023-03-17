import { TrendingToday, PopularPonds, PopularPosts } from '../components';

import './Home.css';

function Home() {
  return (
    <main className='home-page'>
      <TrendingToday/>
      <section className='popular'>
        <PopularPosts/>
        <PopularPonds/>
      </section>
    </main>
  );
}

export default Home;