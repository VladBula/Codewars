function positiveSum(arr) {
   let str = 0;
  for (let i = 0; i < arr.length; i++){
     if(arr[i] > 0) 
      str += arr[i]
    
  }
  return str;
}