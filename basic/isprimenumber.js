function isPrimeNumber(x) {
  // viết code ở đây.
  if (x === 1) {
    return false;
}
 if (x === 2) {
     return true;
 }
  
  for ( var i = 2; i <= x-1; i++){
      if (x % i === 0) {
          return false;
      }
      else {
          return true;
      }
  }
  
}
console.log(isPrimeNumber(1))