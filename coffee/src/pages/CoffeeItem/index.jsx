import React from 'react';

import { Body } from '../../blocks';
import { WithDidCatch } from '../../hoc/withDidCatch';

const CoffeeItem = (props) => {
  const { location: { state } } = props;
  const {
    name,
    url,
    country,
    price,
  } = state;

  const info = {
    country: country && `Country: ${country}`,
    price: `Price: ${price}`,
    descr: 'Description: Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw',
  };

  return (
    <React.Fragment>
      <Body
        headign="Our Coffee"
        img={url}
        aboutTitle={name}
        info={info}
      />
    </React.Fragment>
  );
};

export default WithDidCatch(CoffeeItem);
