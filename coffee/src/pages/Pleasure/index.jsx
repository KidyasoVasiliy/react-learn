import React, { Component } from 'react';

import { Spinner } from '../../components';
import { Goods, Body } from '../../blocks';
import { WithDidCatch } from '../../hoc/withDidCatch';
import image from '../../assets/for-your-pleasure.jpg';

import data from './data.json';

class Pleasure extends Component {

  state = {
    goods: null,
  }

  componentDidMount() {
    const { goods } = data;
    this.timerHandle = setTimeout(() => {
      this.setState({ goods: goods })
      this.timerHandle = 0;
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  moveToCardPage = (id, item) => {
    this.props.history.push({
      pathname: `/our-coffee/${id}`,
      state: { ...item }
    });
  }
  render() {

    const { goods } = this.state;

    return (
      <React.Fragment>
        <Body
          headign="For your pleasure"
          img={image}
          aboutTitle='About our goods'
          paragraphs={[
            `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`,
            `Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. `,
            `As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`,
          ]}
        />

        <div className="template__goods">
          {
            !goods
            ? <Spinner />
            : (
              <Goods
                transparent={false}
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

export default WithDidCatch(Pleasure);
