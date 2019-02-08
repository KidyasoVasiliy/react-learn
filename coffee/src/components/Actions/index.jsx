import React from 'react';

import './styles.css';

export const Actions = ({
  fields,
  handleFilter,
}) => (
  <div className="actions">
    <div className="actions__label">Or filter</div>
    <div className="actions__btn-group">
      {
        fields.map((field, index) => (
          <button
            key={`${field}-${index}`}
            className="actions__btn"
            onClick={() => handleFilter(field)}
            type="button"
          >
            {field}
          </button>
        ))
      }
    </div>
  </div>
);
