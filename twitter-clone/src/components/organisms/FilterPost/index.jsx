import React, { Component } from 'react';
import { Button } from 'components/atoms';
import './style.css';

export class FilterPost extends Component {
  state = {
    buttons: [
      { name: 'all', label: 'Все' },
      { name: 'like', label: 'Понравилось' },
    ],
  }

  render() {
    const { buttons } = this.state;
    const elements = buttons.map(({ name, label }) => {
      const { filter, hundleFilterSelect } = this.props;
      const onFilterSelect = () => hundleFilterSelect(name);
      const styleActive = (filter === name) ? ' btn-info' : ' btn-outline-secondary';
      const classNames = {
        default: 'btn',
        active: styleActive,
      };
      const rootClassNames = classNames.default.concat(classNames.active);

      return (
        <Button
          key={name}
          type="button"
          className={rootClassNames}
          onClick={onFilterSelect}
        >
          {label}
        </Button>
      );
    });

    return (
      <div className="btn-group">
        {elements}
      </div>
    );
  }
}
