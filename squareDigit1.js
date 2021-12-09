function squareDigits(num){
  let result = "";
  num = num.toString();
  for (var i = 0; i < num.length; i++)
  {
    result = result + (num[i] * num[i]).toString();
  }
  return Number(result);
}