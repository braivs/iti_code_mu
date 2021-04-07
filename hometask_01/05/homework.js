// Циклы while и for
// 1
/*
for (let i = 1; i <= 100; i++) {
  document.write(i + '<br>');
}*/

// 2
/*for (let i = 11; i <= 33; i++) {
  document.write(i + '<br>');
}*/

// 3
/*for (let i = 0; i <= 100; i += 2) {
  document.write(i + '<br>');
}*/

// 4
/*
let i = 0;
let result = 0;
while (i <= 100) {
  result += i;
  i++;
}
document.write(result);*/

// Работа с for для массивов
// 5
/*
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i]+" ");
}*/

// 6
/*let arr = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
document.write(result);*/

// 7
/*let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for (key in obj) {
  document.write(key + '<br>');
}*/

// 8
/*
let obj = {'Коля': 200, 'Вася': 300, 'Петя': 400};
for (key in obj) {
  document.write(`${key} - зарплата ${obj[key]} долларов` + '<br>')
}*/

// Задачи
// 9
/*
let arr = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >=3 && arr[i] <= 10) {
    document.write(arr[i] + '<br>')
  }
}*/

// 10
/*let arr = [-1, 1, -2, 3, -6, 5, -5, 3];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    result += arr[i];
  }
}
document.write(result);*/

// 11
/*let arr = [1, 2, 4, 9, 5, 13, 1, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    document.write('Есть!');
    break;
  }
}*/

// 12
/*let arr = [10, 20, 30, 50, 235, 3000];
let arrStr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].toString()[0] == 1 || arr[i].toString()[0] == 2 || arr[i].toString()[0] == 5 ) {
    document.write(arr[i] + '<br>');
  }
}*/

// 13
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
resultSrt = '-'
for (let i = 0; i < arr.length; i++) {
  resultSrt += arr[i] + '-';
}
document.write(resultSrt);*/

// 14
/*
let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < arr.length; i++) {
  if (i === 5 || i === 6) {
    document.write(`<b>${arr[i]}</b><br>`)
  } else {
    document.write(arr[i] + '<br>')
  }
}*/

// 15
/*
let arr = ['Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let day = 'Пятница';
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === day) {
    document.write(`<i>${arr[i]}</i><br>`)
  } else {
    document.write(arr[i] + '<br>')
  }
}*/

let n = 1000;
let result = n / 2;
let num = 1;
while (result > 50) {
 result /= 2;
 num++;
}
document.write(`
  Получилось число: ${result}<br>
  Число итераций: ${num}
`);

