'Use strict';

const DRINKS = {
  coctailOne: ['vodka', 'rum', 'beer', 'milk',],
  coctailTwo: ['martini', 'beer', 'ice'],
  coctailThree: ['vodka', 'beer', 'ice',],
  coctailFour: ['milk', 'ice',],
  coctailFive: ['vodka', 'rum', 'martini',],
};

const ingridientFinder = (...ingridient) => {
  const result = new Map();
  for (const item in DRINKS) {
    const coctail = DRINKS[item];
    ingridient.filter(i => {
      if (coctail.includes(i)) {
        result.set(item, coctail);
      };
    });
  };
  return result;
};

console.dir(ingridientFinder('vodka', 'rum'));