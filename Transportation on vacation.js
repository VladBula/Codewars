function rentalCarCost(d) {
  let day = 0; 
  let week = 0; 
    if (d >= 3 && d < 7){
    day = 20
}  // day discount
      if (d >= 7){
      week = 50  
      } // week discount

  return (d * 40) - day - week;
}