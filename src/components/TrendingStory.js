import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";

import "./TrendingStory.css";

function TrendingStory(props) {
  return (
    <article className="trending-story">
      <Card
        style={
          {
            backgroundImage: `url(${props.story.backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }
        }
      >
        <CardTitle>{props.story.title}</CardTitle>
        <CardSubtitle>{props.story.description}</CardSubtitle>
        <CardText>{props.story.location}</CardText>
      </Card>
    </article>
  );
}

export default TrendingStory;