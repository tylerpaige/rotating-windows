const roundTo = (number, numOfDecPlaces = 2) => {
  const power = Math.pow(10, 2);
  return Math.round(number * power) / power;
};

export {
  roundTo
}