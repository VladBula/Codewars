const present = (x, y) => {
  if (x === 'goodpresent') return String.fromCharCode( ...[...x].map( el => el.charCodeAt() + y ) )
  if (x === 'bang') return [...x].map(el => el.charCodeAt() - y).reduce( (a, b) => a + b, 0 )
  if (x === 'dog') return 'pass out from excitement ' + y + ' times'
  if (x === 'crap' || x === 'empty') return [...x].sort().join('')
  if (x === 'badpresent') return 'Take this back!'
}

function present(x, y){
  if (x=='badpresent') return "Take this back!";
  if (x=='crap') return "acpr";
  if (x=="empty") return x;
  if (x=='dog') return  "pass out from excitement "+y+" times"
  if (x=='bang') return 408-4*y;
  var ans='';
  for (var i=0; i<x.length; ++i)
    ans+=String.fromCharCode(x[i].charCodeAt()+y);
  return ans;
}
