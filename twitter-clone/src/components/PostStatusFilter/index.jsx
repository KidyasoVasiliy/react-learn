import React, { Component } from 'react';

import './style.css';

export class PostStatusFilter extends Component {
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
        <button
          key={name}
          type="button"
          className={rootClassNames}
          onClick={onFilterSelect}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {elements}
      </div>
    );
  }
}
