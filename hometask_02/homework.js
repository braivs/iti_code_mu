// 1
/*
for (let i = 1; i <= 100; i++) {
  document.write(i + '<br>');
}*/

// 2
/*for (let i = 100; i >= 1; i--) {
  document.write(i + '<br>');
}*/

// 3
/*
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    document.write(i + '<br>');
  }
}*/

// 4
/*let arr = [];
for (i = 1; i <= 10; i++) {
  arr.push('x');
}
console.log(arr);*/

// 5
// let arr = [];
// for (i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// 6
/*let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.random().toFixed(2))
}
console.log(arr);*/

// 7
/*
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 8 + 2))
}
console.log(arr);*/

// 8
/*let arr = [-5, 0.89, -0.5, 0.8790, 1.789, 10000, 0.99, 10.1, 2, 5, -2, -5, 10, 1]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] < 10) {
    document.write(arr[i] + '<br>')
  }
}*/

// 9
/*
let arr = [-5, 0.89, -0.5, 0.8790, 5, 1.789, 10000, 0.99, 10.1, 2, 5, -2, -5, 10, 1]
for (let i = 0; i < arr.length; i++) {
  console.log('Просмотре элемента: ' + arr[i])
  if (arr[i] === 5) {
    document.write('Есть');
    console.log('Break!');
    break;
  }
}*/

// 10
/*
let arr = [4, 8, 12, 11, 20, 2, 0, 0, 1, 2];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);*/

// 11
/*
let arr = [4, 8, 12, 11, 20, 2, 0, 0, 1, 2];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i] * arr[i];
}
console.log(sum);*/

// 12
/*let arr = [4, 8, 12, 11, 20, 2, 0, 0, 1, 2];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let result = sum / arr.length;
console.log(result);*/
