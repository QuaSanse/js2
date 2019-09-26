// Unit 2

// Task 1
let a = 7;
let b = 9;
console.log(a * b);

// Task 2
let c = 7;
let d = 9;
console.log(c / d);

// Task 3
let e = 3;
let f = 5;
console.log(e + f);

// Task 4
let e1 = '3';
let f1 = 5;
console.log(e1 + f1); // Значение переменной e1 принимается как строковое,
// поэтому происходит конкотенация

// Task 5
let e2 = 3;
let f2 = 0;
console.log(e2 / f2);

// Task 6
let e3 = 3;
let f3 = 'Hello';
console.log(e3 + f3);

// Task 7
let e4 = 3;
let f4 = 'Hello';
console.log(e4 * f4);

// Task 8
let inputIn_1 = document.querySelector('.input_in1');
let button_1 = document.querySelector('.button_1');

button_1.onclick = function () {
    console.log(inputIn_1.value);
}

// Task 9
let inputIn_2 = document.querySelector('.input_in2');
let button_2 = document.querySelector('.button_2');
let aut_2 = document.querySelector('.aut_2');

button_2.onclick = function () {
    let vl_2 = inputIn_2.value;
    //console.log(vl_2); вывод в консоль
    aut_2.innerHTML = vl_2; // вывод на страницу
    inputIn_2.value = ''; // очистка поля после вывода
}

// Task 10
let input_t10 = document.querySelector('.input_t10'); // получаем input
let button_t10 = document.querySelector('.button_t10'); // получаем button
let aut_10 = document.querySelector('.aut_10'); // получаем место для вывода значения

button_t10.onclick = function () {
    let vl_10 = +input_t10.value; // получаем введенное значение
    aut_10.innerHTML = vl_10 * 10; // присваиваем значение
    input_t10.value = ''; // очистка поля после вывода
}

// Task 11
let input_t11 = document.querySelector('.input_t11');
let button_t11 = document.querySelector('.button_t11');
let aut_t11 = document.querySelector('.aut_t11');

button_t11.onclick = function () {
    let vl_t11 = +input_t11.value;
    aut_t11.innerHTML = vl_t11 + 10;
    input_t11.value = '';
}

// Task 12
let name_t12 = document.querySelector('.input_t12_1');
let surname_t12 = document.querySelector('.input_t12_2');
let button_t12 = document.querySelector('.button_t12');

button_t12.onclick = function () {
    let vl_name_12 = name_t12.value;
    let vl_surname_t12 = surname_t12.value;
    console.log('Hello ' + vl_name_12 + ' ' + vl_surname_t12);
    name_t12.value = '';
    surname_t12.value = '';
}

// Task 13
let input_t13_1 = document.querySelector('.input_t13_1');
let input_t13_2 = document.querySelector('.input_t13_2');
let button_t13 = document.querySelector('.button_t13');
let aut_t13 = document.querySelector('.aut_t13');

button_t13.onclick = function () {
    let vl_t13_1 = +input_t13_1.value;
    let vl_t13_2 = +input_t13_2.value;
    aut_t13.innerHTML = vl_t13_1 + vl_t13_2;
    input_t13_1.value = '';
    input_t13_2.value = '';
}

// Task 14
let input_t14 = document.querySelector('.input_t14');
input_t14.value = 'Hello';

// Task 15
let y = document.querySelector('.input_t15');
y.style.border = '2px solid red';

// Task 16
let input_t16_1 = document.querySelector('.input_t16_1');
let input_t16_2 = document.querySelector('.input_t16_2');
let aut_t16 = document.querySelector('.aut_t16');



input_t16_2.oninput = function () {
    let vl_t16_1 = +input_t16_1.value;
    let vl_t16_2 = +input_t16_2.value;

    aut_t16.innerHTML = vl_t16_1 + vl_t16_2;
}