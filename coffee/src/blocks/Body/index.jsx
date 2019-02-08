import React from 'react';

import { Heading, Divider } from '../../components';
/* eslint-disable-next-line */
import { About } from '../../blocks';

import './styles.css';

export const Body = ({
  headign,
  img,
  aboutTitle,
  paragraphs,
  info,
}) => (
  <React.Fragment>
    <div className="template__hero">
      <Heading color="white" text={headign} />
    </div>
    <div className="template__content">
      <div className="template__img">
        <img src={img} alt="nice" width="230" />
      </div>
      <div className="template__about">
        <About header={aboutTitle} paragraphs={paragraphs} info={info} />
      </div>
    </div>
    <Divider />
  </React.Fragment>
);
