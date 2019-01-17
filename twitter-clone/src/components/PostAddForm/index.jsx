import React, { Component } from 'react';
import { Button, Input, Form } from 'reactstrap';

import './style.css';

/**
 * Component used ReactStrap library
 */
export class PostAddForm extends Component {
  state = {
    text: '',
  };

  handleChange = ({ target: { value } }) => {
    const text = value;
    this.setState({ text });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { handleAddPost } = this.props;

    if (text.trim().length) {
      handleAddPost(text);
      this.setState({ text: '' });
    }
  }

  render() {
    const { text } = this.state;

    return (
      <Form className="bottom-panel d-flex">
        <Input
          type="text"
          placeholder="О чем думаете сейчас?"
          className="new-post-label"
          value={text}
          onChange={this.handleChange}
        />
        <Button
          outline
          type="submit"
          color="secondary"
          onClick={this.handleSubmit}
        >
          Добавить
        </Button>
      </Form>
    );
  }
}
