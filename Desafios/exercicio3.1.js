const arr = [1,2,3,4,5];

// Sem Arrow Function

// const newArr = arr.map(function(item) {
    // return item + 10;
// });

// console.log(newArr);

// Com arrow Function

const newArr = arr.map(item => item + 10);

console.log(newArr);