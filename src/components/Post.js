import { useState } from "react";
import { Card } from "reactstrap";

import { PostModal } from '.';

import "./Post.css";

function Post(props) {
  let [showModal, setShowModal] = useState(false);

  let toggleModal = () => setShowModal(!showModal);

  return (
    <section className="post-container">
      <article className="post" onClick={toggleModal}>
        <Card>
          <span className="location">{`p/${props.post.pond_name}`}</span>
          <span className="author">{`u/${props.post.author_username}`}</span>
          <h3 className="title">{props.post.title}</h3>
        </Card>
      </article>
      {showModal ? <PostModal post={props.post} toggle={toggleModal}/> : null}
    </section>
  );
}

export default Post;