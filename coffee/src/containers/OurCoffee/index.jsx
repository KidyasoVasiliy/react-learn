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

const coffee = [
  {
      "id": 91,
      "name": "Death Wish Bean",
      "country": "Brazil",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91DlZZBjxzL._SX522_.jpg",
      "price": "12.99$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
  },
  {
      "id": 71,
      "name": "AROMISTICO Coffee 1 kg",
      "country": "Brazil",
      "url": "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
      "price": "6.99$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
  },
  {
      "id": 81,
      "name": "Solimo Coffee Beans 2 kg",
      "country": "Kenya",
      "url": "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
      "price": "10.73$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
  },
  {
    "id": 51,
    "name": "Organic Coffee One Cup",
    "country": "Columbia",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51M2fmEXTIL.jpg",
    "price": "24.99$",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
  },
  {
      "id": 910,
      "name": "Black Rifle Coffee",
      "country": "Kenya",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91vwF6Kh8IL._SX522_.jpg",
      "price": "19.75$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
  },
  {
      "id": 9100,
      "name": "Presto Coffee Beans 1 kg",
      "country": "Columbia",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
      "price": "15.99$",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
  },
];

class OurCoffee extends Component {


  moveToCardPage = (id) => {
    this.props.history.push({ pathname: `/our-coffee/${id}` });
  }

  moveToOurCoffee = () => {
    this.props.history.push({ pathname: '/our-coffee' });
  }

  render() {
    return (
      <div className="root">
        <div className="bg background-ourCoffee">
          <div className="content__hero">
            <Title text="Everything You Love About Coffee" />
          </div>
        </div>
        <div className="content">
          <div className="content__wrap">
            <div className="content__left">
              <img className="content__img" src={require('./about-our-beans.jpg')} alt="about our beans" />
            </div>
            <div className="content__right">
              <Heading text="About our beans" />
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
            coffee.map(({ name, url, price, id }) => {
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

export default OurCoffee;
