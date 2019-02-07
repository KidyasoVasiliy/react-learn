import React, { Component } from 'react'

import {
  Title,
  BeansLogo,
  Heading,
  MaterialBtn,
  Paragraph,
  CardItem,
} from '../../components';

import './styles.css';

const bestsellers = [
  {
      "id": 81,
      "name": "Solimo Coffee Beans 2 kg",
      "url": "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
      "price": "10.73$"
  },
  {
      "id": 91,
      "name": "Presto Coffee Beans 1 kg",
      "url": "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
      "price": "15.99$"
  },
  {
      "id": 71,
      "name": "AROMISTICO Coffee 1 kg",
      "url": "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
      "price": "6.99$"
  }
];

class Home extends Component {

  moveToCardPage = (id) => {
    this.props.history.push({ pathname: `/our-coffee/${id}` });
  }

  moveToOurCoffee = () => {
    this.props.history.push({ pathname: '/our-coffee' });
  }

  render() {
    return (
      <>
        <div className="bg background-home-hero">
          <div className="home-hero">
            <Title text="Everything You Love About Coffee" />
            <BeansLogo tintColor="white" />
            <Heading color="white" text="We makes every day full of energy and taste" />
            <Heading color="white" text="Want to try our beans?" />
            <div className="home-hero__btn">
              <MaterialBtn
                title="More"
                transparent={true}
                handleClick={this.moveToOurCoffee}
              />
            </div>
          </div>
        </div>

        <div className="about-us">
          <Heading text="About Us" />
          <BeansLogo tintColor="black" />
          <div className="about-us__text">
            <Paragraph
              text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face."
            />
            <br/>
            <br/>
            <Paragraph text="Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now."
            />
          </div>
        </div>

        <div className="bg background-our-best">
          <div className="our-best">
            <Heading text="Our best"/>
            <div className="our-best__items">
              {
                bestsellers.map(({ name, url, price, id }) => {
                  const goToCardPage = () => this.moveToCardPage(id);
                  return (
                    <CardItem
                      key={`${url}-${id}`}
                      title={name}
                      price={price}
                      source={url}
                      transparent={true}
                      handleClick={goToCardPage}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
