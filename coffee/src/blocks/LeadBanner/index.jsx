import React from 'react';

import {
  Title,
  BeansLogo,
  Heading,
  MaterialBtn,
} from '../../components';

import './styles.css';

export const LeadBanner = ({
  title,
  headings,
  titleBtn,
  moveTo,
}) => (
  <div className="leadBanner">
    <div className="leadBanner__item">
      <Title text={title} />
    </div>
    <div className="leadBanner__item">
      <BeansLogo tintColor="white" />
    </div>
    {headings.map(text => (
      <div className="leadBanner__item" key={text}>
        <Heading color="white" text={text} />
      </div>
    ))}
    <div className="leadBanner__item">
      <MaterialBtn
        title={titleBtn}
        transparent
        handleClick={moveTo}
      />
    </div>
  </div>
);
