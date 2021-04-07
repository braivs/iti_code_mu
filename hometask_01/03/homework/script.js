//Работа с массивами
// == 1 ==
/*let arr = ['a', 'b', 'c'];
console.log('==1==');
console.log(arr);*/

// == 2 ==
/*console.log('==2==');
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);*/

// == 3 ==
/*console.log('==3==');
let arr2 = ['a', 'b', 'c', 'd'];
console.log(arr2[0] + '+' + arr2[1] + ', ' + arr2[2] + '+' + arr2[3]);*/

// == 4 ==
/*let arr3 = [2, 5, 3, 9];
let result = arr3[0] * arr3[1] + arr3[2] * arr3[3];
console.log(result);*/

// Объекты (ассоциативные массивы)
// == 5 ==
/*
let obj = {a: 1, b: 2, c: 3};
console.log(obj['c']);
console.log(obj.c);*/

// == 6 ==
/*
let obj = {Коля: '1000', Вася: '500', Петя: '200'};
console.log(obj.Петя);
console.log(obj['Коля']);*/

// == 7 ==
/*let daysOfWeek = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'}
console.log(daysOfWeek[5])*/

// == 8 ==
/*
let daysOfWeek = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'}
let day = 3;
console.log(daysOfWeek[day]);*/

// == 9 ==
/*
let mas = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(mas[1][0]);*/

// == 10 ==
/*
let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj.js[0]);*/

// == 11 ==
/*let daysOfWeek = {
  'ru': ['Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
  "en": ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
console.log(daysOfWeek.ru[0]);
console.log(daysOfWeek.en[2]);*/

// == 12 ==
let daysOfWeek = {
  'ru': ['Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
  "en": ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
let lang = 'ru';
let day = 2;
console.log(daysOfWeek[lang][day]);
