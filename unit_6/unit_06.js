//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let out_1 = document.querySelector('.out-1');
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            out_1.innerHTML += '*';
        }
        out_1.innerHTML += '_';
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
    let out_2 = document.querySelector('.out-2');

    for (let i = 1; i < 4; i++) {
        out_2.innerHTML += i + '<br>';
        for (let k = 0; k < 3; k++) {
            out_2.innerHTML += '*_'
        }
        out_2.innerHTML += '<br>'
    }
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    let out_3 = document.querySelector('.out-3');

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            out_3.innerHTML += '*_';
        }
        out_3.innerHTML += '<br>';
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл  - числа на нечетных позициях  (от 10 до 0).</p>
function t4() {
    let out_4 = document.querySelector('.out-4');

    for (let i = 0; i <= 10; i++) {
        out_4.innerHTML += i + '_';
        for (let k = 0; k < 1; k++) {
            out_4.innerHTML += 10 - i + '_';
        }
    }
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    let out_5 = document.querySelector('.out-5');

    aut_t5 = '';
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                aut_t5 += '1';
            } else {
                aut_t5 += '0';
            }
        }
        aut_t5 += '<br>';
    } out_5.innerHTML = aut_t5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
    let out_6 = document.querySelector('.out-6');

    aut_t6 = '';
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            switch (true) {
                case k == 2 || k == 5: aut_t6 += 'x'; break;
                case (k % 2 == 0): aut_t6 += '1'; break;
                default: aut_t6 += '0';
            }
        }
        aut_t6 += '<br>';
    } out_6.innerHTML = aut_t6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
    let aut_7 = document.querySelector('.out-7');

    aut_t7 = '';
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k <= i; k++) {
            aut_t7 += '*';
        }
        aut_t7 += '<br>';
    } aut_7.innerHTML = aut_t7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
    let aut_8 = document.querySelector('.out-8');

    aut_t8 = '';
    for (let i = 5; i > 0; i--) {
        for (let k = i; k > 0; k--) {
            aut_t8 += '*';
        }
        aut_t8 += '<br>';
    } aut_8.innerHTML = aut_t8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
    let aut_9 = document.querySelector('.out-9');

    aut_t9 = '';
    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            aut_t9 += k + ' ';
        }
        aut_t9 += '<br>';
    } aut_9.innerHTML = aut_t9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    let aut_10 = document.querySelector('.out-10');

    aut_t10 = '';
    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= 10; k++) {
            if ((i * 10 + k) < 10) {
                aut_t10 += `0${i * 10 + k}&nbsp;`;
            } else {
                aut_t10 += `${i * 10 + k}&nbsp;`;
            }
        }
        aut_t10 += '<br>';
    } aut_10.innerHTML = aut_t10;
}

document.querySelector('.b-10').onclick = t10;