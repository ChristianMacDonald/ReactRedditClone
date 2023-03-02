import { useEffect } from 'react';
import { Post } from '.';

import './PopularPosts.css';

function PopularPosts(props) {
  let posts = [
    {
      title:'Australian tried hiding guns in secret bunker',
      location: 'p/interestingasfuck',
      author: 'c0q0'
    },
    {
      title: 'She asked her friends what it\'s like having siblings, and they gave her a crash course.',
      location: 'p/MadeMeSmile',
      author: 'mindyour'
    },
    {
      title: 'to get one car ahead',
      location: 'p/therewasanattempt',
      author: 'BIGRIG_88'
    },
    {
      title: 'What is a good song that\'s over 6 minutes long?',
      location: 'p/AskRibbit',
      author: 'Incendiary_cucumbers'
    },
    {
      title: 'Chats between me and my partner is this normal?',
      location: 'p/mildlyinfuriating',
      author: 'Validity_16'
    }
  ];

  return (
    <section className="popular-posts">
      <h2>Popular Posts:</h2>
      {posts.map((post, i) => <Post post={post} key={i}/>)}
    </section>
  );
}

export default PopularPosts;