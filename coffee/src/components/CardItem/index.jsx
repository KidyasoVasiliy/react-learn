import React from 'react';

import './styles.css';

export const CardItem = ({
  source = 'http://via.placeholder.com/150x150',
  title,
  country,
  price,
  transparent,
  handleClick,
}) => {

  const classes = `cardItem ${transparent ? 'transparent' : 'default'}`;

  return (
    <div
      className={classes}
      onClick={handleClick}
    >
      <img className="cardItem__img" src={source} alt={title}/>
      <div className="cardItem__title">{title}</div>
      {country && <div className="cardItem__country">{country}</div>}
      <div className="cardItem__price">{price}</div>
    </div>
  );
}
