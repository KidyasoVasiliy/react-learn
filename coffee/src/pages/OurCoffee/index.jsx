import React, { Component } from 'react';

import { Spinner, Actions, SearchPanel } from '../../components';
import { Goods, Body } from '../../blocks';
import { WithDidCatch } from '../../hoc/withDidCatch';
import image from '../../assets/about-our-beans.jpg';
import './styles.css';
import data from './data';

class OurCoffee extends Component {

  state = {
    goods: null,
    filter: null,
  }

  componentDidMount() {
    const { coffee } = data;
    this.timerHandle = setTimeout(() => {
      this.setState({ goods: coffee, filter: coffee })
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

  handleFilter = (country) => {
    const { goods, filter } = this.state;
    if (country === 'All') {
      this.setState({ goods: filter });
      return;
    }

    if (goods) {
      const current = filter.filter(el => el.country === country)
      this.setState({ goods: current });
    }
  }

  searchCoffee = (e) => {
    const { filter } = this.state;
    const { value } = e.target;

    if (value.length === 0) {
      this.setState({ goods: filter });
      return;
    }

    const current = filter.filter((el) => {
      return el.name.toLowerCase().indexOf(value) > -1;
    });

    this.setState({ goods: current });
  }

  render() {

    const { goods } = this.state;

    return (
      <React.Fragment>
        <Body
          headign="Our Coffee"
          img={image}
          aboutTitle='About Us'
          paragraphs={[
            `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`,
            `Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. `,
            `As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`,
          ]}
        />

        <div className="ourCoffee__filter">
          <SearchPanel
            handleSearch={this.searchCoffee}
          />
          <Actions
            searchCoffee={this.searchCoffee}
            handleFilter={this.handleFilter}
            fields={[
              'Brazil',
              'Kenya',
              'Columbia',
              'All',
            ]}
          />
        </div>
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

export default WithDidCatch(OurCoffee);
