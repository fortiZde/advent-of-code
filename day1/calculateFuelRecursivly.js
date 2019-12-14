const calculateFuelRecursivly = mass => {
  const sum = number => {
    if (number <= 0) {
      return 0;
    } else {
      return +number + sum(Math.floor(number / 3) - 2);
    }
  };
  return sum(mass) - mass;
};

module.exports = calculateFuelRecursivly;
