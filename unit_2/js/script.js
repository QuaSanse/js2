// Unit 2

// Task 1
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);

// Task 2
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7;
let d = 9;
console.log(c / d);

// Task 3
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
let e = 3;
let f = 5;
console.log(e + f);

// Task 4
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1.
// Объясните разницу Ответ: Значение переменной e1 принимается как строковое, поэтому происходит конкотенация
let e1 = '3';
let f1 = 5;
console.log(e1 + f1);

// Task 5
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
console.log(e2 / f2);

// Task 6
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
console.log(e3 + f3);

// Task 7
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
console.log(e4 * f4);

// Task 8
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let inputIn_1 = document.querySelector('.input_in1');
let button_1 = document.querySelector('.button_1');

button_1.onclick = function () {
    console.log(inputIn_1.value);
}

// Task 9
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input.
// Добавьте очистку input после нажатия кнопки.
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
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let input_t10 = document.querySelector('.input_t10'); // получаем input
let button_t10 = document.querySelector('.button_t10'); // получаем button
let aut_10 = document.querySelector('.aut_10'); // получаем место для вывода значения

button_t10.onclick = function () {
    let vl_10 = +input_t10.value; // получаем введенное значение
    aut_10.innerHTML = vl_10 * 10; // присваиваем значение
    input_t10.value = ''; // очистка поля после вывода
}

// Task 11
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
let input_t11 = document.querySelector('.input_t11');
let button_t11 = document.querySelector('.button_t11');
let aut_t11 = document.querySelector('.aut_t11');

button_t11.onclick = function () {
    let vl_t11 = +input_t11.value;
    aut_t11.innerHTML = vl_t11 + 10;
    input_t11.value = '';
}

// Task 12.
// Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию.
// При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
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

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа.
// При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
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

// Task 14.
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
let input_t14 = document.querySelector('.input_t14');
input_t14.value = 'Hello';

// Task 15.
// Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
let y = document.querySelector('.input_t15');
y.style.border = '2px solid red';

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
let input_t16_1 = document.querySelector('.input_t16_1');
let input_t16_2 = document.querySelector('.input_t16_2');
let aut_t16 = document.querySelector('.aut_t16');

input_t16_2.oninput = function () {
    let vl_t16_1 = +input_t16_1.value;
    let vl_t16_2 = +input_t16_2.value;

    aut_t16.innerHTML = vl_t16_1 + vl_t16_2;
}

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число.
// Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. 
// А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию.
// Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let input_t17 = document.querySelector('.input_t17');
let button_t17 = document.querySelector('.button_t17');

button_t17.onclick = function () {
    let vl_t17 = input_t17.value;
    console.log(vl_t17 = parseInt(vl_t17));
}

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку.
// Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль.
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let input_t18 = document.querySelector('.input_t18');
let button_t18 = document.querySelector('.button_t18');

button_t18.onclick = function () {
    let vl_t18 = input_t18.value;
    console.log(vl_t18 = parseFloat(vl_t18));
}

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел.
// Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let input_t19_1 = document.querySelector('.input_t19_1');
let input_t19_2 = document.querySelector('.input_t19_2');
let button_t19 = document.querySelector('.button_t19');
let aut_t19 = document.querySelector('.aut_t19');

button_t19.onclick = function () {
    let vl_t19_1 = input_t19_1.value;
    let vl_t19_2 = input_t19_2.value;

    aut_t19.innerHTML = parseInt(vl_t19_1) + parseInt(vl_t19_2);
    input_t19_1.value = '';
    input_t19_2.value = '';
}

// Task 20.
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку.
// По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...'
// куда поставьте соответствующие данные из inputов.
let t20_name = document.querySelector('.t20_name');
let t20_surname = document.querySelector('.t20_surname');
let t20_age = document.querySelector('.t20_age');
let t20_occupation = document.querySelector('.t20_occupation');
let button_t20 = document.querySelector('.button_t20');
let aut_t20 = document.querySelector('.aut_t20');

button_t20.onclick = function () {
    let vl_t20_name = t20_name.value;
    let vl_t20_surname = t20_surname.value;
    let vl_t20_age = t20_age.value;
    let vl_t20_occupation = t20_occupation.value;

    aut_t20.innerHTML = 'Уважаемый ' + vl_t20_name + ' ' + vl_t20_surname + ',  ваш возраст ' + vl_t20_age + ' года, по професси вы ' + vl_t20_occupation + '.';
}