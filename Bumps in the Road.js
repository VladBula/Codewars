function bump(x){
let road = 0;
  for (let i = 0; i < x.length; i++){
    if (x[i] == "n"){
      road += 1
    } 
  }
  if (road > 15){
    return "Car Dead";
  } else {return "Woohoo!"}
}