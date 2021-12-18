function cockroachSpeed(s) {
  //multiply km/m by 27.7777777778
  return Math.floor(s*27.7777777778);
}

function cockroachSpeed(s) {
  const KILOMETER_IN_CENTIMETERS = 1 * 1000 * 100;
  const HOUR_IN_SECONDS = 1 * 60 * 60;
  
  return Math.floor(s * KILOMETER_IN_CENTIMETERS / HOUR_IN_SECONDS);
}