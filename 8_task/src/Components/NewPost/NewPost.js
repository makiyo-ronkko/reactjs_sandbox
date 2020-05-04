import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewPost = () => {
    return (
        <div>
            <h1>Add a new post</h1>
            <Form>
                <Form.Group>
                    <Form.Label for="title"> Title:  </Form.Label>
                    <input type="text" placeholder="title" id="title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="content"> Content: </Form.Label>
                    <input type="text" placeholder="content" id="content" />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="author">Choose an author:</Form.Label>
                    <select id="author">
                        <option value="mark">Mark</option>
                        <option value="jane">Jane</option>
                        <option value="bob">Bob</option>
                        <option value="alex">Alex</option>
                    </select>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" >Submit</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default NewPost;
