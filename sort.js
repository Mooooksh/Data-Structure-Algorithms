const numbers = [ 5,9,8,62,3,4,5,1,0]

// function normalSort(numbers){
//     let swap ;
//     for(let i = 0 ; i < numbers.length ; i++){
//         for(let j = i + 1  ; j < numbers.length ; j++){
//             if(numbers[j] < numbers[i]){
//                 swap = numbers[j]
//                 numbers[j] = numbers[i]
//                 numbers[i] = swap
//             }
//         }
//     }
//     return numbers
// }

// console.log(normalSort(numbers))
//                  j,i
// const numbers = [5,9,8,62,3,4,5,1,0]
function insertionSort(numbers){
    let length = numbers.length ;
    for(let i = 1 ; i < length ; i++){
        let key = numbers[i]
        let j = i - 1;
        while(j >=0 && numbers[j] > key){
            numbers[j + 1] = numbers[j]
            j--
        }
        numbers[j+1] = key
    }
    return numbers
}


console.log(insertionSort(numbers))