// МОДУЛЬ 10.6 - Задание 6
// УСЛОВИЕ:
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

// РЕШЕНИЕ:
const items = [1, 4, 3, 1, 6, 5, 1];

// ниже два варианта массива для проверки работы кода со всеми одинаковыми значениями и всеми разными
// const items = [1, 1, 1, 1, 1, 1, 1];
// const items = [1, 2, 3, 4, 5, 6, 7];

const firstItem = items[0];
let isSame = true;
let hasRepeate = false;

// сравнивает все элементы массива одинаковые они или нет, как по заданию
for (let index = 1; index < items.length; index++) {
    isSame = isSame && (firstItem === items[index]);
}
console.log(isSame);

// сравнивает внутренние элементы массива на повторы между собой
for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
        if (i === j) continue;
        hasRepeate = hasRepeate || (items[i] === items[j]);
    }
}
console.log(hasRepeate);