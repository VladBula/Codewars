const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"
  
  const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')