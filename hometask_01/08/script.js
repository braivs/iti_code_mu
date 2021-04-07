// Работа с concat
// 01
/*
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2);
console.log(result);*/

//Работа с reverse
// 02
/*
let arr = [1, 2, 3];
console.log(arr.reverse());*/

//Работа с push, unshift
// 03
/*
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);*/

//04
/*
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);*/

// Работа с shift, pop
// 05
/*let arr = ['js', 'css', 'jq'];
document.write(arr.shift());*/

// 06
/*
let arr = ['js', 'css', 'jq'];
document.write(arr.pop());*/

//Работа с slice
// 07
/*
let arr = [1, 2, 3, 4, 5];
let arrNew = arr.slice(0, 3);
document.write(arrNew);*/

// 08
/*
let arr = [1, 2, 3, 4, 5];
let arrNew = arr.slice(3);
document.write(arrNew);*/

// Работа с splice
// 09
/*
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);*/

// 10
/*
let arr = [1, 2, 3, 4, 5];
let del = arr.splice(1,3);
console.log(del);*/

// 11
/*
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);*/

// 12
/*let arr = [1, 2, 3, 4, 5];
arr.splice(1,0,'a','b');
arr.splice(-1,0,'c');
arr.splice(arr.length, 0, 'e');
console.log(arr);*/

//Работа с sort
// 13
/*
let arr = [3, 4, 1, 2, 7];
console.log(arr.sort());*/

//Работа с Object.keys
// 14
let arr = {js:'test', jq: 'hello', css: 'world'};
let keys = Object.keys(arr);
console.log(keys);
