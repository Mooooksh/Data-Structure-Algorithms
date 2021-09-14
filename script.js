// // // function Booo(n){
// // //     let hi = [];
// // //     for(let i = 0; i < n; i++){
// // //         hi[i] = 'hi';
// // //     }
// // //     return hi;
// // // }

// // // console.log(Booo(200));

// // // const county = function(numbers, target){
// // //     let count = 0
// // //     for (let i = 0 ; i < numbers.length ; i ++){
// // //         if(numbers[i] == target) count++
// // //     }
// // //     return count
// // // }

// // // console.log(county([1,2,6,5,87],5))

// // // const HasPairSum = function(data, sum){
// // //     const low = 0;
// // //     const high = data.length -1 ;
// // //     while(low < high){
// // //         const s = data[low] + data[high]
// // //         if(s == sum) return true
// // //     }
// // //     return false
// // // }

// // // console.log(HasPairSum([1,2,4,4],8))

// // // given 2 array , create a function that , lets a user know (true / false ) whether these 2 arrays contains any common items 
// // // for example 
// // const array1 = ['a','b','c','d']
// // const array2 = ['e','f','g','h']
// // // should return false 
// // // ---------------------------------
// // const array3 = ['a','b','c','d']
// // const array4 = ['d','f','g','h']
// // // should return true



// // // const matchWord = function(arr1 , arr2){
// // //     for(let word1 = 0 ; word1 < arr1.length ; word1++){
// // //         for(let word2 = 0 ; word2 < arr2.length ; word2++){
// // //             if(arr1[word1] === arr2[word2]) return true
// // //         }
// // //     }
// // //     return false
// // // }

// // // console.log(matchWord(array3, array4))

// // const matchWord = function(arr1 , arr2){
// //     let map = {}
// //     for(let word1 = 0 ; word1 < arr1.length ; word1++){
// //         if(!map[arr1[word1]]){
// //             map[arr1[word1]] = true
// //         }
// //     }
// //     for(let word2 = 0 ; word2 < arr2.length ; word2++){
// //         if(map[arr2[word2]]){
// //             return true
// //         }
// //     }
// //     return false
// // }
// // console.log(matchWord(array3, array4))

// // // another simpler solution for the same problem

// // const matchWord3 = function(arr1 , arr2){
// //     return arr1.some(item => arr2.includes(item))
// // }

// // console.log(matchWord3(array1, array2))

// // const reverseWords = function(str){
// //     // let words = "";
// //     // for(let i = str.length -1 ; i >= 0 ; i--){
// //     //     words += str[i];
// //     // }
// //     // return words;
// //     return str.split("").reverse()
// // }

// // const name = prompt(" enter your name ...")
// // const result = reverseWords(name)
// // console.log(result)

//--------------------------------------------------------------------------

// // two sum probled #1
// var twoSum = function(nums, target) {
//     const storage = {};
//     for(let [index,num] of nums.entries()){
//         if(storage[num] !== undefined) return [storage[num], index]
//         storage[target-num] = index;
//     }
//     return [storage,target]
// };

// console.log(twoSum([2,7,11,15],18));
//--------------------------------------------------------------------------

// // google question #firstRecurringCharacter problem #2

// const numbers = [2,5,5,2,3,5,1,2,4]
// // it should return 5  => because the 5 is the first recurring number  

// function firstRecurringCharacter (number){
//     let storage = {};
//     for(let i = 0 ; i < number.length; i++){
//         let num = number[i]
//         if(storage[num] !== undefined){
//             return num;
//         }
//         else{
//             storage[num] = i;
//         }
//     } return storage

// }

// console.log(firstRecurringCharacter(numbers))
//--------------------------------------------------------------------------

// // secondly should return 2 => because the  2 is the most frequent recuring number.
// // [2,5,5,2,3,5,1,2,4] should return 2 
// // [2] [5,5,2,3,5,1,2,4] 
// function mostFrequentNumber (number){
//     let maxNumber = 0;
//     let element = 0;
//     for(let i = 0; i<number.length ; i++){
//         let count = 1;
//         for(let j = i + 1; j<number.length ; j++){
//             if(number[i] == number[j]){
//                 count++
//             }
//         }
//         if(maxNumber < count){
//             maxNumber = count
//             element = number[i];
//         }
//     }
//     console.log(`
//     the most frequent number in this array is : (${element})
//     and it's repeted (${maxNumber}) times
//     `)
// }

// console.log(mostFrequentNumber([2,5,5,2,3,5,1,2,4,5]))
//--------------------------------------------------------------------------

// const mostFrequentString = function (string){
//     let MaxString = 0;
//     let element = 0
//     for(let i =0; i< string.length; i++){
//         let count = 1;
//         for(let j = i + 1 ; j<string.length;j++){
//             if(string[i] == string[j]){
//                 count++
//             }
//         }
//         if(MaxString < count){
//             MaxString = count;
//             element = string[i]
//         }
//     }
//     console.log(element, MaxString)
// }

// console.log(mostFrequentString('mohammed abdalla'))
//--------------------------------------------------------------------------

// // let nums = [1,0,1,1,0,1]
// // var findMaxConsecutiveOnes = function(nums) {
// //     for(let i = 0; i < nums.length ;i++){
// //         if(nums[i]){
// //             nums[i]++
// //         console.log(nums[i])            
// //         }
// //     }
// // };

// // console.log(findMaxConsecutiveOnes(nums))
//--------------------------------------------------------------------------

// class LinkedList {
//     constructor(value){
//         this.head = {
//             value:value,
//             next : null
//         }
//         this.tail = this.head
//         this.length = 1
//     }
//     append(value){
//         const newValue = {
//             value : value,
//             next : null
//         }
//         this.tail.next = newValue;
//         this.tail = newValue
//         this.length++
//         return this
//     }
//     prepend(value){
//         const newNode = {
//             value : value,
//             next:null
//         }
//         newNode.next = this.head
//         this.head = newNode
//         this.length++
//         return this
//     }
//     printList(){
//         let array = [];
//         let currentValue = this.head;
//         while(currentValue !== null){
//             array.push(currentValue.value)
//             currentValue = currentValue.next;
//         }
//         return array;
//     }
//     insert(index,value){
//         // if the index is higher than the list value
//         if(index >= this.length){
//         return this.append(value)
//             }
//         const newValue = {
//             value:value,
//             next:null
//         }
//         let leader = this.treverseToIndex(index - 1);
//         const holdingPointer = leader.next
//         leader.next = newValue
//         newValue.next = holdingPointer
//         this.length++
//         return this.printList()

//     }
//     treverseToIndex(index){
//         let counter = 0;
//         let currentNode = this.head;
//         while(counter !== index){
//             currentNode = currentNode.next;
//             counter++
//         }
//         return currentNode
//     }
//     remove(index){

//         const leader = this.treverseToIndex(index - 1)
//         console.log(leader)
//         let unWantedIndex = leader.next
//         console.log(unWantedIndex)
//         leader.next = unWantedIndex.next
//         this.length--
//         return this.printList()
//     }
// }

// const NewLinkedList = new LinkedList(10)
// console.log(NewLinkedList.append(15))
// console.log(NewLinkedList.append(20))
// console.log(NewLinkedList.append(40))
// console.log(NewLinkedList.printList())
// console.log(NewLinkedList.prepend(2))
// console.log(NewLinkedList.insert(4,205))
// console.log(NewLinkedList.remove(1))
//--------------------------------------------------------------------------

// let array = [55,5,8,7,6,56,0,5,6,98,236,41,2,5,7]

// function SmallestNumber(arr){
//     let smallest = arr[0]
//     for(let i=0 ;i<arr.length; i++){
//         let num = arr[i]
//         if(num > smallest){
//             smallest = num
//         }
//     }
//     return smallest
// }

// console.log(SmallestNumber(array))
//--------------------------------------------------------------------------

function sort(arr){
    let swap;
    for(let i=0 ; i < arr.length ; i++){
        for(let j= i + 1 ; j < arr.length ; j++){
            if(arr[j] < arr[i]){
                swap = arr[j]
                arr[j] = arr[i]
                arr[i] = swap
            }
        }     
    }
    return arr;
}
// //array = [55,5,8,7,6,56]
// console.log(sort(array))
//--------------------------------------------------------------------------

// // example arr = [1,2,3,4,5,6,7] , d = 2  , n = 7
// // A = [1,2] B =[3,4,5,6,7]
// // Reverse A, we get ArevB = [2,1,3,4,5,6,7]
// // Reverse B, we get ArevBrev = [2,1,7,6,5,4,3]
// // Reverse All, we get (ArevBrev)Rev = [3,4,5,6,7,1,2]

//--------------------------------------------------------------------------
// reversal Algorithms for array rotation # problem 
// let arr = [1,2,3,4,5,6,7];
// function reverse(arr){
//     let arrRev = [];
//     for(let i = arr.length - 1 ; i>= 0 ; i--){
//         arrRev.push(arr[i]);
//     }
//     return arrRev;
// }

// function ReversalAlgorithm(arr,d){
//     let a = [];
//     let b = [];
//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i] <= arr[d - 1]){
//             a.push(arr[i])
//         }else {
//             b.push(arr[i])
//         }
//     }
//     let RevA = reverse(a).concat(b);
//     let RevB = reverse(a).concat(reverse(b));
//     //RevA.push(b)
//     return `My Final Reversal will be : [${reverse(RevB)}]`
// }

// console.log(ReversalAlgorithm(arr,3))
//--------------------------------------------------------------------------
// Example 4. Median of Two Sorted Arrays

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// additional Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
let num1 = [0,0],num2 = [0,0]

function findMedianSortedArrays(num1, num2){
    let nums = num1.concat(num2)
    let swap;
    for(let i=0 ; i < nums.length ; i++){
        for(let j= i + 1 ; j < nums.length ; j++){
            if(nums[j] < nums[i]){
                swap = nums[j]
                nums[j] = nums[i]
                nums[i] = swap
            }
        }   
    }
    let medianIndex = (nums.length) / 2 ;
    if(medianIndex >= 1){
        let median = (medianIndex + (medianIndex + 1)) / 2
        return median
    }else{
        return 0.0000

    }
}

console.log(findMedianSortedArrays(num1,num2))

