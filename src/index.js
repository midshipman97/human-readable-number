module.exports = function toReadable (number) {
  /*Создаём массивы со всеми возможными значениями от 0 до 999*/
  const l1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
const l2 = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
const l3 = [ " ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];
const hundred = ' hundred ';
/* Делаем переменные, которые определяют числа от 0 до 9, от 10 до 99 и от 100 до 999*/
let numbers = number % 10;
let dozens = (number % 100) - numbers;
let hundreds = number - dozens - numbers;
/* Начинаем перебирать */
if (number >= 0 && number < 10) { // Проверка на цифру от 0 до 9
    return l1[numbers];
} else if (number >= 10 && number < 20) { // проверка на числа от 10 до 19
    return l2[numbers];

} else if (number >= 20 && number < 100 && numbers === 0) { //проверка на числа кратные 10 от 20 до 99
    return l3[dozens / 10];

} else if (number >= 20 && number < 100) { //проверка на остальные числа от 20 до 99
    return (l3[dozens / 10] + " " + l1[numbers]).trim(); 

} else if (number >= 100 && number < 1000 && (number%100) >= 10 && (number%100) < 20) { //проверка на числа в диапазоне от 110 до 119, от 210 до 219 и т.д.
    return (l1[hundreds / 100] + hundred + l2[numbers]).trim();

} else if (number >= 100 && number < 1000 && numbers === 0) { //проверка на числа кратные 10 в диапазоне от 120 до 199, от 220 до 299 и т.д.
    return (l1[hundreds / 100] + hundred + l3[dozens / 10]).trim();

} else if (number >= 100 && number < 1000 && dozens === 0) { //проверка на чиnpm installсла от 101 до 109, от 201 до 209 и т.д.
    return (l1[hundreds / 100] + hundred + l1[numbers]).trim();

} else if (number >= 100 && number < 1000) { //все оставшиеся числа в указанном диапазоне
    return (l1[hundreds / 100] + hundred + l3[dozens / 10] + " " + l1[numbers]).trim();

} else {
    return "Nothing to return"; // Если число не входит в проверяемый диапазон, то возвращаем эту строку
}
};