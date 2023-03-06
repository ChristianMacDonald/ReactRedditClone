import './PostModal.css';

function PostModal(props) {
  return (
    <div className="post-modal">
      <article className="post">
        <header>
          <h2>{props.post.title}</h2>
          <button className='close-post-modal-button' onClick={props.toggle}>X Close</button>
        </header>
        <p>{props.post.content}</p>
      </article>
    </div>
  );
}

export default PostModal;