// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt("Какая скидка?");

let totalSale = 0;

let total = 0;

let max = {};

let min = {};

let average = 0;

let arr = [
    {
        name: "Milk",
        price: 3.25,
    },
    {
        name: "Coffee",
        price: 1.5,
    },
    {
        name: "Ice Cream",
        price: 7.85,
    },
    {
        name: "Tomatos",
        price: 4.14,
    },
    {
        name: "Onion",
        price: 2.25,
    },
];

let arr_sale = [];

// Функция для выполнения всех задач
const setup = () => {
    // 1. Сохранить самый дорогой товар в переменную `max`
    max = arr.reduce((prev, curr) => (prev.price > curr.price ? prev : curr));

    // 2. Сохранить самый дешевый товар в переменную `min`
    min = arr.reduce((prev, curr) => (prev.price < curr.price ? prev : curr));

    // 3. Сохранить общую цену без скидок в переменную `total`
    total = arr.reduce((sum, item) => sum + item.price, 0);

    // 4. Сохранить общую цену со скидкой в переменную `totalSale`
    totalSale = total * (1 - discount / 100);

    // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale
    for (const price of arr) {
        price.price = price.price - (total / discount )* 100;
        arr_sale.push(price);
    }

    // 6. Сохранить в переменной `average` среднюю цену всех продуктов без скидок
    average = total / arr.length;
};

console.log("max", max);
console.log("min", min);
console.log("total", total);
console.log("totalSale", totalSale);
console.log("arr_sale", arr_sale);
console.log("average", average);

setup();