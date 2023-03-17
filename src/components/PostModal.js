import './PostModal.css';

function PostModal(props) {
  let stopPropagation = e => {
    e.stopPropagation();
  }

  return (
    <div className="post-modal" onClick={props.toggle}>
      <article className="post" onClick={stopPropagation}>
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