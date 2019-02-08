import React from 'react';

import { CardItem } from '../../components';

import './styles.css';

export const Goods = ({
  list,
  transparent,
  handleClick,
}) => (
  <div className="goods">
    {
      list.map((item) => {
        const {
          name,
          url,
          price,
          country = null,
          id,
        } = item;
        const goToCardPage = () => handleClick(id, item);

        return (
          <div className="goods__item" key={`${url}-${id}`}>
            <CardItem
              title={name}
              price={price}
              source={url}
              country={country}
              transparent={transparent}
              handleClick={goToCardPage}
            />
          </div>
        );
      })
    }
  </div>
);
