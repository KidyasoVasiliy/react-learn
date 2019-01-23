import React, { PureComponent } from 'react';
import { Error } from 'components';

export function WithDidCatch(WrappedComponent) {
  return class extends PureComponent {
    state = {
      error: false,
    }

    componentDidCatch() {
      this.setState({ error: true });
    }

    render() {
      const { error } = this.state;

      if (error) return <Error />;

      return <WrappedComponent {...this.props} />;
    }
  };
}
