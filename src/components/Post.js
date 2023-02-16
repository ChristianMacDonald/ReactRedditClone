import { Card } from "reactstrap";
import "./Post.css";

function Post(props) {
  return (
    <article className="post">
      <Card>
        <header>
          <p className="location">{props.post.location}</p>
          <p className="author">{`u/${props.post.author}`}</p>
        </header>
        <h3 className="title">{props.post.title}</h3>
      </Card>
    </article>
  );
}

export default Post;