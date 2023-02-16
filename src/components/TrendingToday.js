import { Card } from 'reactstrap';
import { TrendingStory } from '.';

import './TrendingToday.css';

import jokerBackground from '../images/joker_folie_a_deux.png';
import raquelBackground from '../images/raquel_welch.png';
import stephaneBackground from '../images/stephane_bancel.png'
import mattBackground from '../images/matt_gaetz.png';

let stories = [
  {
    title: "Joker: Folie à Deux",
    description: "First Image of Lady Gaga and Joaquin Phoenix in 'Joker: Folie à Deux'",
    location: 'p/movies and more',
    backgroundImage: jokerBackground
  },
  {
    title: 'Raquel Welch',
    description: 'Actress Raquel Welch Dead at 82',
    location: 'p/television and more',
    backgroundImage: raquelBackground
  },
  {
    title: 'Moderna Covid Vaccine',
    description: 'Moderna says its COVID vaccine will remain free for all...',
    location: 'p/Coronavirus and more',
    backgroundImage: stephaneBackground
  },
  {
    title: 'Matt Gaetz',
    description: 'Justice Department declines to charge Rep. Matt Gaetz in sex trafficking probe',
    location: 'p/news and more',
    backgroundImage: mattBackground
  }
];

function TrendingToday() {

  return (
    <section className='trending-today'>
      <h3>Trending Today:</h3>
      <Card className='story-list'>
        {stories.map((story, i) => <TrendingStory story={story} key={i}/>)}
      </Card>
    </section>
  );
}

export default TrendingToday;