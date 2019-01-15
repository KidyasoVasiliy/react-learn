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

const {
  eu,
  rus,
} = sponsors;
export {
  money,
  eu,
  rus,
};
