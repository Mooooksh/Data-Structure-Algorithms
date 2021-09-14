// let counter = 0;
// function increseCounter(){
//     console.log(counter)
//     if(counter > 9) return "Done"
//     counter++
//     return increseCounter();
// }

// console.log(increseCounter())

// question one Factorial 5! = 5 * 4 * 3 * 2 * 1 = 120;
// function findFactorialRecursive(number){
//     if(number === 2 ) return 2
//     console.log(number)
//     return number * findFactorialRecursive(number - 1);

// }

// console.log(findFactorialRecursive(5))


// question 2 --> given Number(n) return the index value of the
// fibototshi sequence where the sequence is 
// 0, 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89 , 144 and so on 
// the pattern of the sequence is that each value is the sum of 2 previous 2 values 
// that means that for N(5) ==> 2+3

function fibonacciIterative(n){
    if(n < 2) return n
    return fibonacciIterative(n - 1) + fibonacciIterative(n - 2)
  
}

console.log(fibonacciIterative(5))
