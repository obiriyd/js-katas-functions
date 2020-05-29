//Kata 1 - Addition
function add(a,b) {
    return a+b;
}
console.log('Kata 1 - Addition: ' + add(6,5));



//Kata 2 - Product
function multiply(a,b) {
    let product = 0;
    for (ctr1 = 0; ctr1 < b; ctr1++) {
        product += add(a,0);
    }
    return product;
}
console.log('Kata 2 - Product: ' + multiply(2,5))



//Kata 3 - Power
function power(x,n) {
    let power = 1;
    for (ctr2 = 0; ctr2 < n; ctr2++) {
        power *= multiply(x,1);
    }
    return power;
}
console.log('Kata 3 - Power: ' + power(2,5))



//Kata 4 - Factorial
function factorial(f) {
    let factorial = f;
    for (ctr3 = 1; ctr3 < f; ctr3++) {
        factorial *= multiply(ctr3,1);
    }
    return factorial;
}
console.log('Kata 4 - Factorial: ' + factorial(5))


//Kata Bonus - Fibonacci
function fibonacci(n) {
    let arr = [0, 1];
  
    if (n <= 2) return 1;
  
    for (let i = 2; i <= n; i++) {
      arr[i] = add(arr[add(i,-1)],arr[add(i,-2)]);
    }
  
    return arr[add(n, -1)];
  }


console.log('Kata Bonus - Fibonaci: ' + fibonacci(8));