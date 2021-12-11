function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  var min = Math.min(a,b);
  var max = Math.max(a,b);

  return min ? max % min : NaN;
}