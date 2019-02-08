import React, { Component } from 'react'

import { Spinner, Heading } from '../../components';
import { About, LeadBanner, Goods } from '../../blocks';
import { WithDidCatch } from '../../hoc/withDidCatch';
import './styles.css';

import data from './data.json';

class Home extends Component {
  time;
  state = {
    goods: null,
  };

  componentDidMount() {
    const { bestsellers } = data;
    this.timerHandle = setTimeout(() => {
      this.setState({ goods: bestsellers });
      this.timerHandle = 0;
    }, 1000);

  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  moveToOurCoffee = () => {
    this.props.history.push({ pathname: '/our-coffee' });
  }


  moveToCardPage = (id, item) => {
    this.props.history.push({
      pathname: `/our-coffee/${id}`,
      state: { ...item }
    });
  }

  render () {

    const { goods } = this.state;

    return (
      <React.Fragment>
        <LeadBanner
          title="Everything You Love About Coffee"
          headings={[
            `We makes every day full of energy and taste`,
            `Want to try our beans?`
          ]}
          titleBtn="More"
          moveTo={this.moveToOurCoffee}
        />
        <div className="home__about">
          <About
            header="About Us"
            paragraphs={[
              `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.`,
              `Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.`
            ]}
          />
        </div>
        <div className="home__goods">
          <Heading text="Our best"/>
          <br />
          {
            !goods
            ? <Spinner />
            : (
              <Goods
                transparent={true}
                list={goods}
                handleClick={this.moveToCardPage}
              />
            )
          }
        </div>
      </React.Fragment>
    );
  }
}

export default WithDidCatch(Home);
