// МОДУЛЬ 10.6 - Задание 7
// УСЛОВИЕ:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// РЕШЕНИЕ:

let arr = [8, 3, 2, 0, 1, 4, 9, 0, 8, 6, 5, 'g', 'p', 'e'];
let even = 0;
let odd = 0;
let zero = 0;

// вывод в консоль количество чётных чисел
for (let i = 0; i < arr.length; i++) {

    // проверяем на тип number
    if (typeof arr[i] !== 'number') {
        continue;
    }

    // проверяем на количество нулей
    if (arr[i] === 0) {
        zero++;
        continue;
    }

    // проверяем на чётность
    if (arr[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
console.log('Чётных чисел: ', even);
console.log('Нечётных чисел: ', odd);
console.log('Нулей: ', zero);