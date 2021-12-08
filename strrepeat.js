function repeatStr (n, s) {
  let a = new String (s) ;
  for (let i = 0; i < n-1; i++)
    a = a + s;
  return a;
}