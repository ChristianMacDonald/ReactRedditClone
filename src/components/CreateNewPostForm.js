import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import { useCreatePostMutation } from "../slices/ribbitApi";

import './CreateNewPostForm.css';

function CreateNewPostForm(props) {
  let { name: pond_name } = useParams();

  let [triggerCreatePost, createPostState] = useCreatePostMutation();

  let [title, setTitle] = useState("");

  let updateTitle = e => {
    setTitle(e.target.value);
  }

  let [content, setContent] = useState("");

  let updateContent = e => {
    setContent(e.target.value);
  }

  let submit = e => {
    e.preventDefault();
    triggerCreatePost({ pond_name, title, content });
  }

  useEffect(() => {
    if (createPostState.isSuccess) {
      props.refresh();
      props.toggle();
    }
  }, [createPostState.isSuccess]);

  return (
    <Card className="create-new-post-card">
      <Button className="cancel-button" color="danger" onClick={props.toggle}>Cancel</Button>
      <Form className="create-new-post-form" onSubmit={submit}>
        <FormGroup>
          <Label for="post-title">Title</Label>
          <Input type="text" id="post-title" onChange={updateTitle}/>
        </FormGroup>
        <FormGroup>
          <Label for="post-content">Content</Label>
          <Input type="textarea" id="post-content" onChange={updateContent}/>
        </FormGroup>
        <Input type="submit" id="post-submit"/>
      </Form>
    </Card>
  );
}

export default CreateNewPostForm;