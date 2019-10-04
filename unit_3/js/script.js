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

// Task 5
// Создайте на странице input,куда пользователь может вводить год рождения.
// Добавьте кнопку.
// При нажатии кнопки выполняйте функцию, которая
// если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения),
// если год рождения больше или равен 2000 - выводит в консоль возраст пользователя

let input_t5 = document.querySelector('.input_t5');
let button_t5 = document.querySelector('.button_t5');
let aut_t5 = document.querySelector('.aut_t5');


button_t5.onclick = () => {
    let vl_t5 = input_t5.value;

    if (vl_t5 < 2000) {
        aut_t5.innerHTML = 2019 - vl_t5;
    } else {
        console.log(2019 - vl_t5);
    }
}

// Task 6
// Создайте input куда пользователь может ввести номер квартиры.
// Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,
// если другое число - сообщение о том, что квартира не существует.

let input_t6 = document.querySelector('.input_t6');
let aut_t6 = document.querySelector('.aut_t6');

input_t6.oninput = () => {
    let vl_t6 = input_t6.value;

    if (vl_t6 >= 1 && vl_t6 <= 32) {
        aut_t6.innerHTML = 'Такая квартира есть!';
    } else if (vl_t6 == '') {
        aut_t6.innerHTML = '';
    } else {
        aut_t6.innerHTML = 'Квартира не существует!';
    }
}

// Task 7
// Создайте input куда пользователь может ввести число.
// После нажатия кнопки - на страницу должно выводиться сообщение - большие или меньше нуля это число.

let input_t7 = document.querySelector('.input_t7');
let button_t7 = document.querySelector('.button_t7');
let aut_t7 = document.querySelector('.aut_t7');

button_t7.onclick = () => {
    let vl_t7 = input_t7.value;

    if (vl_t7 < 0) {
        aut_t7.innerHTML = 'Меньше нуля это число';
    } else {
        aut_t7.innerHTML = 'Больше нуля это число';
    }
}

// Task 8.
// Создайте input куда пользователь может ввести число.
// После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет это число.
// Определить четное или нет число в JS очень просто.
// Нужно получить целый остаток от деления (читать за оператор), для этого используется оператор % .
// И проверить. Если остаток от деления 0 - то число четное, если нет - не четное.

let input_t8 = document.querySelector('.input_t8');
let button_t8 = document.querySelector('.button_t8');
let aut_t8 = document.querySelector('.aut_t8');

button_t8.onclick = () => {
    let vl_t8 = input_t8.value;

    if (vl_t8 % 2) {
        aut_t8.innerHTML = 'Число не четное';
    } else {
        aut_t8.innerHTML = 'Число четное';
    }
}

// Task 9.
// Создайте 2 инпута.
// Если оба инпута заполнены (не равны пустой строке),
// то по нажатию кнопки число из первого инпута возведите в степень из второго input.
// Результат выведите на страницу.

let input_t9_1 = document.querySelector('.input_t9_1');
let input_t9_2 = document.querySelector('.input_t9_2');
let button_t9 = document.querySelector('.button_t9');
let aut_t9 = document.querySelector('.aut_t9');

button_t9.onclick = () => {
    let vl_t9_1 = input_t9_1.value;
    let vl_t9_2 = input_t9_2.value;

    if (vl_t9_1 != '' && vl_t9_2 != '') {
        aut_t9.innerHTML = vl_t9_1 ** vl_t9_2;
    }
}