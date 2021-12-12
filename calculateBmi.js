function bmi(weight, height) {
  const count = weight/(height*height);
  if (count <= 18.5){
    return "Underweight";
    } else if (count <= 25){
    return "Normal";
    } else if (count <= 30){
    return "Overweight";
    } else if (count > 30){
    return "Obese";
    }
}