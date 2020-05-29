//Kata 1 - Addition
function add(a,b) {
    return a+b;
}
console.log('Kata 1 - Addition: ' + add(6,5));



//Kata 2 - Product
function multiply(a,b) {
    let product = 0;
    for (ctr1 = 0; ctr1 < b; ctr1 += 1) {
        product += add(a,0);
    }
    return product;
}
console.log('Kata 1 - Multiply: ' + multiply(2,5))



//Kata 3 - Power
function power(x,n) {
    let pow = 1;
    for (ctr2 = 0; ctr2 < n; ctr2 += 1) {
        pow *= multiply(x,1);
    }
    return pow;
}
console.log('Kata 1 - Power: ' + power(4,2))



//Kata 4 - Factorial
function factorial(f) {
    let fact = f;
    for (ctr3 = f-1; ctr3 > 0; ctr3 -= 1) {
        //console.log(ctr3)
        fact *= multiply(ctr3,1);
    }
    return fact;
}
console.log('Kata 1 - Factorial: ' + factorial(6))


//Kata Bonus - Fibonacci
function fibonacci(n) {
    let arr = [0, 1];
  
    if (n <= 2) return 1;
  
    for (let i = 2; i <= n; i++) {
      arr[i] = add(arr[i - 1],arr[i - 2]);
    }
  
    return arr[n];
  }


console.log('Kata 1 - Factorial: ' + fibonacci(7));