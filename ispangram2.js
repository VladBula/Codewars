function isPangram(string){
  return (string.match(/([a-z](?!.*\1)/ig) || []).length === 26;
}

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}