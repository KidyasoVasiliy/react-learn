import React from 'react';
import { Button, Input, Form } from 'reactstrap';

import './style.css';

/**
 * Component used ReactStrap library
 */
export const PostAddForm = ({ handleAddPost }) => {
  return (
    <Form className="bottom-panel d-flex">
      <Input
        type="text"
        placeholder="О чем думаете сейчас?"
        className="new-post-label"
      />
      <Button
        outline
        type="submit"
        color="secondary"
        onClick={e => handleAddPost(e, 'test')}
      >
        Добавить
      </Button>
    </Form>
  );
};
