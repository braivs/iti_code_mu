// Работа с if-else
// == 1 ==
/*
let a = -3;
if (a === 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}*/

// == 2 ==
/*let a = -3;
if (a > 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}*/

// == 3 ==
/*
let a = -3;
if (a < 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}*/

// == 4 ==
/*let a = -3;
if (a >= 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}*/

// == 5 ==
/*let a = -3;
if (a <= 0) console.log('Верно'); else console.log('Неверно')*/

// == 6 ==
/*
let a = -3;
if (a != 0) console.log('Верно'); else console.log('Неверно');*/

// == 7 ==
/*
let a = 3;
if (a == 'test') console.log('Верно'); else console.log('Неверно');*/

// == 8 ==
/*
let a = 1;
if (a === '1') console.log('Верно'); else console.log('Неверно');*/

// Работа с логическими переменными
// 9.1
/*
let test = true;
// if (test == true) console.log('Верно'); else console.log('Неверно');
// 9.2
if (test) console.log('Верно'); else console.log('Неверно');*/

// 10.1
/*let test = true;
// if (test != true) console.log('Верно'); else console.log('Неверно');
// 10.2
if (!test) console.log('Верно'); else console.log('Неверно');*/

// Работа с && (и) и || (или)
// 11
/*let a = 2;
if (a > 0 && a < 5) console.log('Верно'); else console.log('Неверно');*/

// 12
/*let a = 2;
if (a == 0 || a == 2) a += 7; else a /= 10;
console.log(a);*/

// 13
/*
let a = 3;
let b = 5;
if (a <= 1 && b >= 3 ) console.log(a + b); else console.log(a - b);*/

// 14
/*
let a = 12;
let b = 13;
if ((a > 2 && a < 11) || (b >= 6 && b < 14) ) console.log('Верно'); else console.log('Неверно');*/

// На switch-case
/*
let num = 3
let result;
switch (num) {
  case 1:
    result = 'зима';
    break;
  case 2:
    result = 'весна';
    break;
  case 3:
    result = 'лето';
    break;
  case 4:
    result = 'осень';
    break;
  default:
    result = 'Время год не определено';
    break;
}
console.log(result);*/

// Задачи
// == 16 ==
/*let day = -7;
if (day >= 1 && day <= 10) {
  console.log('1-я декада');
} else if (day >= 11 && day <= 20) {
  console.log('2-я декада');
} else if (day >= 21 && day <= 31) {
  console.log('3-я декада');
} else {
  console.log('неверная дата');
}*/

// 17
/*
let month = 11;
if (month == 12 || month == 1 || month == 2 ) console.log('зима');
if (month >= 3 && month <= 5) console.log('весна');
if (month >= 6 && month <= 8) console.log('лето');
if (month >= 9 && month <= 11) console.log('осень');*/

// 18
/*let str = 'ajil';
if (str[0] === 'a') console.log('да'); else console.log('нет');*/

// 19
/*let str = '12345';
if (str[0] == 1) console.log('да'); else console.log('нет');*/

// 20
/*
let str = '135';
console.log(Number(str[0]) + Number(str[1]) + Number(str[2]));*/

// 21
let str = '123006';
if (Number(str[0]) + Number(str[1]) + Number(str[2]) === Number(str[3]) + Number(str[4]) + Number(str[5])) {
  console.log('да');
} else {
  console.log('нет');
}
