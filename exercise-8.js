// МОДУЛЬ 10.7 - Задание 7
// УСЛОВИЕ:
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y». Используйте шаблонные строки.

// РЕШЕНИЕ:

const user = new Map();

user.set('name', 'Дима');
user.set('age', '48');
user.set('country', 'Россия');
user.set('city', 'Краснодар');

const keys = user.keys();
for (let key of keys) {

    console.log(`Ключ — ${key}, значение — ${user.get(key)}`);

}