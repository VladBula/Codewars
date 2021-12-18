function correctness(bobsDecisions, expertDecisions) {
let points = 0;
  for (let i = 0; i<bobsDecisions.length; i++){
    if (bobsDecisions[i] == expertDecisions[i]){
      points += 1
    }else if (bobsDecisions[i] == '?' || expertDecisions[i] == '?'){
      points += 0.5
     } else {
       points + 0
     }
}
  return points;
  }