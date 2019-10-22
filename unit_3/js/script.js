// Task 1 --------------------

let a = 4;

if (a == 4) {
    console.log('true');
}

// Task 2 --------------------

let b = 8;
let c = 10;

if (b > c) {
    console.log('Переменная "b" больше переменной "с"');
} else {
    console.log('Переменная "с" больше переменной "b"');
}

// Task 3 --------------------

let b_3 = 8;
let c_3 = 10;

if (b_3 > c_3) {
    console.log('Переменная "b_3" больше переменной "c_3"');
} else if (b_3 == c_3) {
    console.log('Переменная "b_3" равна переменной "c_3"');
} else {
    console.log('Переменная "c_3" больше переменной "b_3"');
}

// Task 4 --------------------

let input_t4_1 = document.querySelector('.input_t4_1');
let input_t4_2 = document.querySelector('.input_t4_2');
let button_t4 = document.querySelector('.button_t4');
let aut_t4 = document.querySelector('.aut_t4');

button_t4.onclick = () => {
    let vl_t4_1 = +input_t4_1.value;
    let vl_t4_2 = +input_t4_2.value;

    if (vl_t4_1 > vl_t4_2) {
        aut_t4.innerHTML = vl_t4_1;
    } else if (vl_t4_1 == vl_t4_2) {
        aut_t4.innerHTML = 'равны';
    } else {
        aut_t4.innerHTML = vl_t4_2;
    }
}

// Task 5 --------------------

let input_t5 = document.querySelector('.input_t5');
let button_t5 = document.querySelector('.button_t5');
let aut_t5 = document.querySelector('.aut_t5');


button_t5.onclick = () => {
    let vl_t5 = +input_t5.value;

    if (vl_t5 < 2000) {
        aut_t5.innerHTML = 2019 - vl_t5;
    } else {
        console.log(2019 - vl_t5);
    }
}

// Task 6 --------------------

let input_t6 = document.querySelector('.input_t6');
let aut_t6 = document.querySelector('.aut_t6');

input_t6.oninput = () => {
    let vl_t6 = +input_t6.value;

    if (vl_t6 >= 1 && vl_t6 <= 32) {
        aut_t6.innerHTML = 'Такая квартира есть!';
    } else if (vl_t6 == '') {
        aut_t6.innerHTML = '';
    } else {
        aut_t6.innerHTML = 'Квартира не существует!';
    }
}

// Task 7 --------------------

let input_t7 = document.querySelector('.input_t7');
let button_t7 = document.querySelector('.button_t7');
let aut_t7 = document.querySelector('.aut_t7');

button_t7.onclick = () => {
    let vl_t7 = +input_t7.value;

    if (vl_t7 < 0) {
        aut_t7.innerHTML = 'Меньше нуля это число';
    } else {
        aut_t7.innerHTML = 'Больше нуля это число';
    }
}

// Task 8 --------------------

let input_t8 = document.querySelector('.input_t8');
let button_t8 = document.querySelector('.button_t8');
let aut_t8 = document.querySelector('.aut_t8');

button_t8.onclick = () => {
    let vl_t8 = +input_t8.value;

    if (vl_t8 % 2) {
        aut_t8.innerHTML = 'Число не четное';
    } else {
        aut_t8.innerHTML = 'Число четное';
    }
}

// Task 9 --------------------

let input_t9_1 = document.querySelector('.input_t9_1');
let input_t9_2 = document.querySelector('.input_t9_2');
let button_t9 = document.querySelector('.button_t9');
let aut_t9 = document.querySelector('.aut_t9');

button_t9.onclick = () => {
    let vl_t9_1 = +input_t9_1.value;
    let vl_t9_2 = +input_t9_2.value;

    if (vl_t9_1 != '' && vl_t9_2 != '') {
        aut_t9.innerHTML = vl_t9_1 ** vl_t9_2;
    }
}

// Task 10 --------------------

let input_t10 = document.querySelector('.input_t10');
let button_t10 = document.querySelector('.button_t10');

button_t10.onclick = () => {
    let vl_t10 = input_t10.value;

    if (vl_t10 == '' || vl_t10 == ' ') {
        alert('Введите ваше имя!');
    } else {
        alert('Hello ' + vl_t10 + '!');
    }
}

// Task 11 --------------------

let input_t11 = document.querySelector('.input_t11');
let button_t11 = document.querySelector('.button_t11');

button_t11.onclick = () => {
    let vl_t11 = input_t11.value;
    vl_t11 = vl_t11.trim();

    if (vl_t11 == '') {
        alert('Введите ваше имя!');
    } else {
        alert('Hello ' + vl_t11 + '!');
    }
}

// Task 12 --------------------

let input_t12 = document.querySelector('.input_t12');
let button_t12 = document.querySelector('.button_t12');

button_t12.onclick = () => {
    let vl_t12 = +input_t12.value;

    switch (vl_t12) {
        case 1:
            console.log('один');
            break;
        case 2:
            console.log('два');
            break;
        case 3:
            console.log('три');
            break;
    }
}

// Task 13 --------------------

let input_t13 = document.querySelector('.input_t13');
let button_t13 = document.querySelector('.button_t13');
let aut_t13 = document.querySelector('.aut_t13');

button_t13.onclick = () => {
    let vl_t13 = +input_t13.value;

    if (vl_t13 >= 1 && vl_t13 <= 5) {
        aut_t13.innerHTML = 'улица 1';
    } else if (vl_t13 >= 6 && vl_t13 <= 11) {
        aut_t13.innerHTML = 'улица 2';
    } else if (vl_t13 >= 11 && vl_t13 <= 20) {
        aut_t13.innerHTML = 'улица 3';
    } else {
        aut_t13.innerHTML = '';
    }
    input_t13.value = '';
}

// Task 14 --------------------

let input_t14 = document.querySelector('.input_t14');
let button_t14 = document.querySelector('.button_t14');
let aut_t14 = document.querySelector('.aut_t14');

button_t14.onclick = () => {
    let vl_t14 = +input_t14.value;

    if (vl_t14 >= 0 && vl_t14 <= 25) {
        aut_t14.innerHTML = 'не обнаруживается';
    } else if (vl_t14 > 25 && vl_t14 <= 50) {
        aut_t14.innerHTML = 'снижение числа лимфоцитов';
    } else if (vl_t14 > 50 && vl_t14 <= 100) {
        aut_t14.innerHTML = 'вялость, рвота, до 150 - смертность 5%';
    } else if (vl_t14 > 100 && vl_t14 <= 350) {
        aut_t14.innerHTML = 'смертность 50% за 30 суток';
    } else if (vl_t14 > 350 && vl_t14 <= 600) {
        aut_t14.innerHTML = '90% смертность за 2 недели';
    } else if (vl_t14 > 600) {
        aut_t14.innerHTML = 'смертность 100%';
    } else {
        aut_t14.innerHTML = '';
    } input_t14.value = '';
}

// Task 15 --------------------

let x = 1;
let y = 0;

//console.log(x && y);
console.log(x || y);

// Task 16 --------------------

let input_t16 = document.querySelector('.input_t16');
let button_t16 = document.querySelector('.button_t16');
let aut_t16 = document.querySelector('.aut_t16');

button_t16.onclick = () => {
    let vl_t16 = +input_t16.value;

    switch (true) {
        case vl_t16 >= 0 && vl_t16 <= 499:
            aut_t16.innerHTML = '2525 тенге';
            break;
        case vl_t16 >= 500 && vl_t16 <= 1199:
            aut_t16.innerHTML = '5050 тенге';
            break;
        case vl_t16 >= 1200 && vl_t16 <= 1599:
            aut_t16.innerHTML = '8275 тенге';
            break;
        case vl_t16 >= 1600 && vl_t16 <= 1899:
            aut_t16.innerHTML = '9675 тенге';
            break;
        case vl_t16 >= 1900 && vl_t16 <= 1999:
            aut_t16.innerHTML = '11075тенге тенге';
            break;
        default:
            aut_t16.innerHTML = '15000 тенге';
    }
    input_t16.value = '';
}

// Task 17 --------------------
let input_t17_1 = document.querySelector('.input_t17_1');
let input_t17_2 = document.querySelector('.input_t17_2');
let button_t17 = document.querySelector('.button_t17');
let aut_t17 = document.querySelector('.aut_t17');

button_t17.onclick = () => {
    let vl_t17_1 = +input_t17_1.value;
    let vl_t17_2 = input_t17_2.value;

    if (vl_t17_2 == 'euro') {
        aut_t17.innerHTML = vl_t17_1 * 0.91;
    } else if (vl_t17_2 == 'rub') {
        aut_t17.innerHTML = vl_t17_1 * 64.22;
    } else if (vl_t17_2 == 'uah') {
        aut_t17.innerHTML = vl_t17_1 * 24.52;
    }
}

// Task 18 --------------------

let input_t18_1 = document.querySelector('.input_t18_1');
let input_t18_2 = document.querySelector('.input_t18_2');
let button_t18 = document.querySelector('.button_t18');
let aut_t18 = document.querySelector('.aut_t18');

button_t18.onclick = () => {
    let vl_t18_1 = +input_t18_1.value;
    let vl_t18_2 = input_t18_2.value;

    switch (vl_t18_2) {
        case 'euro':
            aut_t18.innerHTML = vl_t18_1 * 0.91;
            break;
        case 'rub':
            aut_t18.innerHTML = vl_t18_1 * 64.22;
            break;
        case 'uah':
            aut_t18.innerHTML = vl_t18_1 * 24.52;
    }
}

// Task 19 --------------------

let input_t19_1 = document.querySelector('.input_t19_1');
let input_t19_2 = document.querySelector('.input_t19_2');
let input_t19_3 = document.querySelector('.input_t19_3');
let button_t19 = document.querySelector('.button_t19');
let aut_t19 = document.querySelector('.aut_t19');

button_t19.onclick = () => {
    let vl_t19_1 = +input_t19_1.value;
    let vl_t19_2 = input_t19_2.value;
    let vl_t19_3 = +input_t19_3.value;

    if (vl_t19_2 == '-') {
        aut_t19.innerHTML = vl_t19_1 - vl_t19_3;
    } else if (vl_t19_2 == '+') {
        aut_t19.innerHTML = vl_t19_1 + vl_t19_3;
    } else if (vl_t19_2 == '*') {
        aut_t19.innerHTML = vl_t19_1 * vl_t19_3;
    } else if (vl_t19_2 == '/') {
        aut_t19.innerHTML = vl_t19_1 / vl_t19_3;
    }
}

// Task 20 --------------------

let input_t20_1 = document.querySelector('.input_t20_1');
let input_t20_2 = document.querySelector('.input_t20_2');
let input_t20_3 = document.querySelector('.input_t20_3');
let button_t20 = document.querySelector('.button_t20');
let aut_t20 = document.querySelector('.aut_t20');

button_t20.onclick = () => {
    let vl_t20_1 = +input_t20_1.value;
    let vl_t20_2 = input_t20_2.value;
    let vl_t20_3 = +input_t20_3.value;

    switch (vl_t20_2) {
        case '-':
            aut_t20.innerHTML = vl_t20_1 - vl_t20_3;
            break;
        case '+':
            aut_t20.innerHTML = vl_t20_1 + vl_t20_3;
            break;
        case '*':
            aut_t20.innerHTML = vl_t20_1 * vl_t20_3;
            break;
        case '/':
            aut_t20.innerHTML = vl_t20_1 / vl_t20_3;
    }
}