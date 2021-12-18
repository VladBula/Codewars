function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}

function isEven(num){
  return num%2==0
}

function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  var filtered = numbersArray.filter(isEven);
  return filtered;
}