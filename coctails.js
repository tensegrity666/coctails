'Use strict';

const DRINKS = {
  coctailOne: ['vodka', 'rum', 'beer', 'milk',],
  coctailTwo: ['martini', 'beer', 'ice'],
  coctailThree: ['vodka', 'beer', 'ice',],
  coctailFour: ['milk', 'ice',],
  coctailFive: ['vodka', 'rum', 'martini',],
};

const ingridientFinder = (...ingridient) => {
  const result = new Set();
  for (const item in DRINKS) {
    const coctail = DRINKS[item];
    coctail.filter(i => {
      if (ingridient.includes(i)) {
        result.add(item);
      } else {
        return result;
      };
    });
  };
  return result;
};

console.dir(ingridientFinder('vodka', 'beer'));