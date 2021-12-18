const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

function isDivideBy(number, a, b) {
  return [a, b].every(i => number % i === 0)
}