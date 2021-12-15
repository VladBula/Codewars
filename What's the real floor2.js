function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

const getRealFloor = (n) => (n <= 0) ? n : (n < 13) ? n - 1 : n - 2;