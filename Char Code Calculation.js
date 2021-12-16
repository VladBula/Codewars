function calc(x){
let xa = "";
  for (let i = 0; i < x.length; i++){
    xa += x.substr(i,1).charCodeAt();
  }
  return (xa.match(/7/g) || []).length*6;
}