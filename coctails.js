const ingridientFinder = (...ingridient) => {
  const result = [];
  for (const item in drinks) {
    const coctail = drinks[item];
    coctail.filter( i => {
      if (ingridient.includes(i)) {
        result.push(item);
      } else {
        return [];
      };
    });
  };
  return result;
};

console.dir(ingridientFinder('juice'));