// Unit 2

// Task 1 --------------------
let a = 7;
let b = 9;
console.log(a * b);

// Task 2 --------------------
let c = 7;
let d = 9;
document.querySelector('.aut_t2').innerHTML = c / d;

// Task 3 --------------------
let e = 3;
let f = 5;
document.querySelector('.aut_t3').innerHTML = e + f;

// Task 4 --------------------
let e1 = '3';
let f1 = 5;
document.querySelector('.aut_t4').innerHTML = e1 + f1;

// Task 5 --------------------
let e2 = 3;
let f2 = 0;
document.querySelector('.aut_t5').innerHTML = e2 / f2;

// Task 6 --------------------
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.aut_t6').innerHTML = e3 + f3;

// Task 7 --------------------
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.aut_t7').innerHTML = e4 * f4;

// Task 8 --------------------
let inputIn_1 = document.querySelector('.input_in1');
let button_1 = document.querySelector('.button_1');

button_1.onclick = function () {
    console.log(inputIn_1.value);
}

// Task 9 --------------------
let inputIn_2 = document.querySelector('.input_in2');
let button_2 = document.querySelector('.button_2');
let aut_2 = document.querySelector('.aut_2');

button_2.onclick = function () {
    let vl_2 = inputIn_2.value;
    //console.log(vl_2); вывод в консоль
    aut_2.innerHTML = vl_2;
    inputIn_2.value = '';
}

// Task 10 --------------------
let input_t10 = document.querySelector('.input_t10');
let button_t10 = document.querySelector('.button_t10');
let aut_10 = document.querySelector('.aut_10');

button_t10.onclick = function () {
    let vl_10 = +input_t10.value;
    aut_10.innerHTML = vl_10 * 10;
    input_t10.value = '';
}

// Task 11 --------------------
let input_t11 = document.querySelector('.input_t11');
let button_t11 = document.querySelector('.button_t11');
let aut_t11 = document.querySelector('.aut_t11');

button_t11.onclick = function () {
    let vl_t11 = +input_t11.value;
    aut_t11.innerHTML = vl_t11 + 10;
    input_t11.value = '';
}

// Task 12 --------------------
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

// Task 13 --------------------
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

// Task 14 --------------------
let input_t14 = document.querySelector('.input_t14');
input_t14.value = 'Hello';

// Task 15 --------------------
let y = document.querySelector('.input_t15');
y.style.border = '2px solid red';

// Task 16 --------------------
let input_t16_1 = document.querySelector('.input_t16_1');
let input_t16_2 = document.querySelector('.input_t16_2');
let aut_t16 = document.querySelector('.aut_t16');

input_t16_2.oninput = function () {
    let vl_t16_1 = +input_t16_1.value;
    let vl_t16_2 = +input_t16_2.value;

    aut_t16.innerHTML = vl_t16_1 + vl_t16_2;
}

// Task 17 --------------------
let input_t17 = document.querySelector('.input_t17');
let button_t17 = document.querySelector('.button_t17');

button_t17.onclick = function () {
    let vl_t17 = input_t17.value;
    console.log(vl_t17 = parseInt(vl_t17));
}

// Task 18 --------------------
let input_t18 = document.querySelector('.input_t18');
let button_t18 = document.querySelector('.button_t18');

button_t18.onclick = function () {
    let vl_t18 = input_t18.value;
    console.log(vl_t18 = parseFloat(vl_t18));
}

// Task 19 --------------------
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

// Task 20 --------------------
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