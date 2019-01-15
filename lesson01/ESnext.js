const employers = [
  'Alex', '', 'ludmila', 'Viktor',
  '', 'oleg', 'iNna', 'Ivan',
  'Alex', 'Olga', ' Ann'];

const names = [];

employers.forEach((employer) => {
  if (employer.length > 0 && employer.length !== '') {
    names.push(employer);
  }
});

const employersNames = names
  .map(employersName => employersName.toLowerCase().trim());

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
};

const calcCash = (own, ...args) => {
  const [everyCash] = args;
  const sumEveryCash = everyCash
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  const total = own ? sumEveryCash : (own + sumEveryCash);

  return total;
};

const money = calcCash(null, sponsors.cash);

const makeBusiness = (owner, director, cash, emp) => {
  const { eu, rus } = sponsors;
  const sumSponsors = [...eu, ...rus, 'unexpected sponsor'].join(', ');

  console.log(`
  We have a business. Owner: ${owner} , director: ${director || 'Victor'}. Our budget: ${cash}. And our employers: ${emp.join(', ')}
  And we have a sponsors:
  ${sumSponsors}
  Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.
  `);
};

makeBusiness('Sam', null, money, employersNames);
