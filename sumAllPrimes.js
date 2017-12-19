function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    } 
  }
  return true;
}
console.log(isPrime(10));

function sumPrimes(num) {
  var total = 2;
  for (var x = 3; x <= num; x++) {
    if (isPrime(x)) {
      total += x;
    }
  }
  return total;
}
  

sumPrimes(10);