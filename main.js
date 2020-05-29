//Kata 1 - Addition
function add(a,b) {
    return a+b;
}
//Output Addition
console.log('Kata 1 - Addition: ' + add(6,5));



//Kata 2 - Product
function multiply(a,b) {
    let product = 0;
    for (ctr1 = 0; ctr1 < b; ctr1++) {
        product = add(product, add(a,0));
    }
    return product;
}
//Output Product
console.log('Kata 2 - Product: ' + multiply(2,5))



//Kata 3 - Power
function power(x,n) {
    let pow = 1;
    for (ctr2 = 0; ctr2 < n; ctr2++) {
        pow = multiply(pow, multiply(x,1));
    }
    return pow;
}
//Output Power
console.log('Kata 3 - Power: ' + power(2,5))



//Kata 4 - Factorial
function factorial(f) {
    let fact = f;
    for (ctr3 = 1; ctr3 < f; ctr3++) {
        fact = multiply(fact, multiply(ctr3,1));
    }
    return fact;
}
//Output Factorial
console.log('Kata 4 - Factorial: ' + factorial(5))


//Kata Bonus - Fibonacci
function fibonacci(n) {
    //Start an array of first 2 Fibonacci sequence
    let arr = [0, 1];

    //Return first 3 values
    if (n < 0 || n == 0) return 'Invalid Input';
    if (n == 1) return 0;
    if (n <= 2) return 1;

    //Calculate rest of sequence if input greater than 3
    for (let ctr4 = 2; ctr4 <= n; ctr4++) {
      arr[ctr4] = add(arr[add(ctr4,-1)],arr[add(ctr4,-2)]);
    }
    return arr[add(n, -1)]; //Return position taking into account possition 0 of the array
}
//Output Fibonacci
console.log('Kata Bonus - Fibonaci: ' + fibonacci(10));