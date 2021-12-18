function correctness(bobsDecisions, expertDecisions) {
  return bobsDecisions
    .map((x,i) => x == expertDecisions[i] ? 1 : x == '?' ? 0.5 : expertDecisions[i] == '?' ? 0.5 : 0)
    .reduce((a,b)=>a+b, 0);
}

function correctness(b, e) {
  let score = 0
  for (let i = 0; i< b.length; i++){
    if (b[i] === e[i]) {
      score += 1
      }
    else if (b[i] === '?') score += 0.5
    else if (e[i] === '?') score += 0.5
  }
  return score
}

const correctness = (sex, att) => 
  sex.map((el, i)=> el === att[i] ? 1 : el === '?' || att[i] === '?' ? 0.5 : 0).reduce((a, b)=> a + b, 0)