import { employersNames } from './helpers/employersNames';
import { money, eu, rus } from './helpers/money';


class MakeBusiness {
  constructor(owner, director, cash, emp) {
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;

    this.sponsors = {
      eu,
      rus,
    };

    this.sumSponsors = this.getSumSponsors();
    this.carefulSponsor = this.getCarefulSponsor();
  }

  getSumSponsors() {
    const { eu: europSponsor, rus: russianSponsor } = this.sponsors;
    return [...europSponsor, ...russianSponsor, 'unexpected sponsor'].join(', ');
  }

  getCarefulSponsor() {
    const [carefulSponsor] = this.sponsors.eu;
    return carefulSponsor;
  }

  get info() {
    console.log(`
    We have a business. Owner: ${this.owner} , director: ${this.director || 'Victor'}. Our budget: ${this.cash}. And our employers: ${this.emp.join(', ')}
    And we have a sponsors:
    ${this.sumSponsors}
    Note. Be careful with ${this.carefulSponsor}. It's a huge risk.
    `);

    return undefined;
  }
}

const info = new MakeBusiness('Sam', null, money, employersNames);
// eslint-disable-next-line
info.info;
