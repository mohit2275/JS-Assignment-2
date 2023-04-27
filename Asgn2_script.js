// Ques 4 - Characters of String
// let a = "Mohit";
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }



// Ques 5 - Print 1 to 10 Number
// for (let x = 1; x <= 10; x++) {
// console.log(x);
// }



//Ques 6 - Print Even no. b/w 1-10
// let x;
// for (x = 1; x <= 10; x++) {
//     if (x % 2 == 0) {
//         console.log(x);
//     }
// }



//Ques 7 - Print Odd no. b/w 1-10
// let x;
// for (x = 1; x <= 10; x++) {
//     if (x % 2 == !0) {
//         console.log(x);
//     }
// }



//Ques 8 - Iterate in the prprts of an object
// let obj = {
//     key1: 'Value 1',
//     key2: 'Value 2',
//     key3: 'Value 3',
//     key4: 'Value 4'
// }
// for (let i in obj) {
//     console.log(i + " : " + obj[i]);
// }



// Ques 9 - Iterate in the keys of an object
// let obj = {
//     key1: 'Value 1',
//     key2: 'Value 2',
//     key3: 'Value 3',
//     key4: 'Value 4'
// }
// for (let i in obj) {
//     console.log(i);
// }



// Ques 10 - Iterate in the Values of an object
// let obj = {
//     key1: 'Value 1',
//     key2: 'Value 2',
//     key3: 'Value 3',
//     key4: 'Value 4'
// }
// for (let i in obj) {
//     console.log(obj[i]);
// }



// ---------- CODING QUESTIONS ----------------///


// Answer 1 - True when the no. is Even
// function even(x) {
//     if (x == 0) {
//         return 'Neither odd nor even'
//     }
//     else if (x % 2 == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// let x = 0;
// console.log(even(x));



// Answer 2 - String is empty
// function empty(x) {
//     if (x == "" && x.length == 0) {
//         return 'It is an Empty String';
//     } else {
//         return 'It is an not Empty String';
//     }
// }
// let y = "";
// console.log(empty(y));



//  Answer 3 - Empty Araay
// function empty(x) {
//     if (x.length == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let arr = [9];
// console.log(empty(arr));




// //  Answer 4 - Empty Object
// function empty(x) {
//     let count = 0;
//     for (let i in x) {
//         count++
//     }
//     if (count == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// let obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4'
// }
// console.log(empty(obj));



// Answer 5 - Sum of numbers in array
// function sum(x) {
//     let sum = 0;
//     for (i = 0; i < x.length; i++) {
//         sum = sum + x[i]
//     }
//     return sum
// }
// let arr = [1, 2, 3, 4]
// console.log(sum(arr));



// Answer 6 -  returns length of longest string
// function longestString(x) {
//     let long = 0;
//     for (i = 0; i < x.length; i++) {
//         if (x[i].length > long) {
//             long = x[i].length
//         }
//     }
//     return long
// }
// arr = ["qwe", "qwerty", "jh", "qwq"]
// console.log(longestString(arr));



// Answer 7 - Specific object
// function specific(arr, propname) {
//     let count = 0;
//     for (i = 0; i < arr.length; i++) {
//         for (let key in arr[i]) {
//             if (key == propname) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// let arr = [
//     obj1 = {
//         name: 'Mohit',
//         age: 26
//     },

//     obj2 = {
//         name: 'Dixit',
//         age: 28
//     },

//     obj3 = {
//         name: 'Vikas',
//     }
// ]

// console.log(specific(arr, 'age'));



// Answer 8 - New array multiplied by 2
// function double(x) {
//     let arr2 = [];
//     for (i = 0; i < x.length; i++) {
//         arr2.push(x[i] * 2);
//     }
//     return arr2
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(double(arr));



// Answer 9 - New array each string capitalised
// function capital(arr) {
//     let arr2 = [];
//     let small = 'abcdefghijklmnopqrstuvwxyz';
//     let big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     for (i = 0; i < arr.length; i++) {
//         let bag = '';
//         for (let j = 0; j < arr[i].length; j++) {
//             for (k = 0; k < 26; k++) {
//                 if (arr[i][j] == small[k]) {
//                     bag = bag + big[k];
//                 }
//                 else if (arr[i][j] == big[k]) {
//                     bag = bag + arr[i][j];
//                 }
//             }
//         }
//         arr2.push(bag);
//     }
//     return arr2;
// }
// let arr = ["Mohit", "dixit"]
// console.log(capital(arr));


// Answer 10 -

function specific(arr, propname) {
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            if (key == propname) {
                arr2.push(arr[i])
            }
        }
    }
    return arr2;
}
let arr = [
    obj1 = {
        name: 'Mohit',
        age: 26
    },

    obj2 = {
        name: 'Dixit',
        age: 28
    },

    obj3 = {
        name: 'Vikas',
    }
]

console.log(specific(arr, 'name'));