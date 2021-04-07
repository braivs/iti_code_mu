function square(num) {
  return num * num;
}

const sum = (num1, num2) => {
  return num1 + num2;
}

const tripleDo = (num1, num2, num3) => {
  return (num1 - num2) / num3;
}

const russianDayOfWeek = (number) => {
  dayNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
  return dayNames[number - 1];
}