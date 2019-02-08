import React from 'react';

import { Heading, BeansLogo, Paragraph } from '../../components';

import './styles.css';

export const About = ({
  header,
  paragraphs,
  info,
}) => (
  <div className="about">
    <div className="about__item">
      <Heading text={header} />
    </div>
    <div className="about__item">
      <BeansLogo tintColor="black" />
    </div>
    <div className="about__item">
      {!info && paragraphs.map((text, index) => (
        <div className="about__item-text" key={`${text}-${index}`}>
          <Paragraph text={text} />
        </div>
      ))}
      {!info
        ? null
        : (
          <div className="about__item-info">
            {info.country && (
              <div className="info__item">
                <Paragraph text={info.country} />
              </div>
            )}
            <div className="info__item">
              <Paragraph text={info.descr} />
            </div>
            <div className="info__item">
              <Paragraph text={info.price} />
            </div>
          </div>
        )}
    </div>
  </div>
);
