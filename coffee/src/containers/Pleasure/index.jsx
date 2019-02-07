import React, { Component } from 'react'

import {
  Title,
  BeansLogo,
  Heading,
  Paragraph,
  CardItem,
  Divider,
} from '../../components';

import './styles.css';
import '../template/styles.css';

const goods = [
  {
      "id": 41,
      "name": "Electric Spice and Coffee Grinder",
      "url": "https://images-na.ssl-images-amazon.com/images/I/41qvqWRCm3L.jpg",
      "price": "36.99$"
  },
  {
      "id": 91,
      "name": "Manual Coffee Grinder",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91gR5HFtmaL._SL1500_.jpg",
      "price": "25.99$"
  },
  {
      "id": 71,
      "name": "Coffee Cup with Lid",
      "url": "https://images-na.ssl-images-amazon.com/images/I/71L5Ut1HHSL._SL1500_.jpg",
      "price": "15.99$"
  },
  {
      "id": 916,
      "name": "Pour Over Coffee Maker",
      "url": "https://images-na.ssl-images-amazon.com/images/I/916TPwGqfML._SL1500_.jpg",
      "price": "45.99$"
  }
];

class Pleasure extends Component {


  moveToCardPage = (id) => {
    this.props.history.push({ pathname: `/our-coffee/${id}` });
  }

  moveToOurCoffee = () => {
    this.props.history.push({ pathname: '/our-coffee' });
  }

  render() {
    return (
      <div className="root">
        <div className="bg background-pleasure">
          <div className="content__hero">
            <Title text="For your pleasure" />
          </div>
        </div>
        <div className="content">
          <div className="content__wrap">
            <div className="content__left">
              <img className="content__img" src={require('./for-your-pleasure.jpg')} alt="about our goods" />
            </div>
            <div className="content__right">
              <Heading text="About our goods" />
              <BeansLogo tintColor="black"/>
              <br/>
              <div className="content__text">
                <Paragraph text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible." />
                <br/>
                <Paragraph text="Afraid at highly months do things on at. Situation recommend objection do intention so questions." />
                <br />
                <Paragraph text="As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face."
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="content__divider">
          <Divider />
        </div>
        <br />

        <div className="content__items">
         {/* TODO: filter */}
          {
            goods.map(({ name, url, price, id }) => {
              const goToCardPage = () => this.moveToCardPage(id);
              return (
                <CardItem
                  key={`${url}-${id}`}
                  title={name}
                  price={price}
                  source={url}
                  handleClick={goToCardPage}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Pleasure;
