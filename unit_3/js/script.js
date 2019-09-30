// Task 1
// Создайте переменную a = 4.
// Используя конструкцию if проверьте что a == 4.
// Выведите сообщение в консоль.

let a = 4;

if (a == 4) {
    console.log('true');
}

// Task 2
// Создайте b = 8 и с = 10.
// С помощью if, else выведите в консоль сообщение о том, какая из переменных больше.

let b = 8;
let c = 10;

if (b > c) {
    console.log('Переменная "b" больше переменной "с"');
} else {
    console.log('Переменная "с" больше переменной "b"');
}

// Task 3
// Используя else if добавьте в предыдущую задачу проверку на равенство.

let b_3 = 8;
let c_3 = 10;

if (b_3 > c_3) {
    console.log('Переменная "b_3" больше переменной "c_3"');
} else if (b_3 == c_3) {
    console.log('Переменная "b_3" равна переменной "c_3"');
} else {
    console.log('Переменная "c_3" больше переменной "b_3"');
}

// Task 4
// Создайте на странице 2 input,
// куда пользователь может вводить числа.
// Добавьте кнопку.
// При нажатии кнопки выполняйте функцию, которая сравнит два числа и выведет большее на страницу.
// Если числа равны - выводится строка "равны".

let input_t4_1 = document.querySelector('.input_t4_1');
let input_t4_2 = document.querySelector('.input_t4_2');
let button_t4 = document.querySelector('.button_t4');
let aut_t4 = document.querySelector('.aut_t4');

button_t4.onclick = () => {
    let vl_t4_1 = input_t4_1.value;
    let vl_t4_2 = input_t4_2.value;

    if (vl_t4_1 > vl_t4_2) {
        aut_t4.innerHTML = vl_t4_1;
    } else if (vl_t4_1 == vl_t4_2) {
        aut_t4.innerHTML = 'равны';
    } else {
        aut_t4.innerHTML = vl_t4_2;
    }
}
