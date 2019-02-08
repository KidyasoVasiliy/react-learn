import React from 'react';

import './styles.css';

export const SearchPanel = ({
  handleSearch,
}) => (
  <div className="searchpanel">
    <div className="searchpanel__label">Lookiing for</div>
    <input
      className="searchpanel__input"
      type="text"
      onChange={handleSearch}
      placeholder="start typing here..."
    />
  </div>
);
