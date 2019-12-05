//  Task 1

let out_t1 = '';
function t1() {
    let i = 0;
    while (i <= 100) {
        if (i == 100) { out_t1 += `${i}&nbsp;` }
        else { out_t1 += i + ' ' }
        i++;
    }
    document.querySelector('.out-1').innerHTML = out_t1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2

let out_t2 = '';
function t2() {
    let i_p2_1 = +document.querySelector('.i-p2_1').value;
    let i_p2_2 = +document.querySelector('.i-p2_2').value;

    while (i_p2_1 <= i_p2_2) {
        out_t2 += i_p2_1 + ' ';
        i_p2_1++;
    }
    document.querySelector('.out-2').textContent = out_t2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3

out_t3 = '';
function t3() {
    let i_p3_1 = +document.querySelector('.i-p3_1').value;
    let i_p3_2 = +document.querySelector('.i-p3_2').value;

    if (i_p3_1 < i_p3_2) {
        while (i_p3_1 <= i_p3_2) {

            out_t3 += i_p3_1 + ' ';
            i_p3_1++;
        }
    } else {
        while (i_p3_2 <= i_p3_1) {

            out_t3 += i_p3_2 + ' ';
            i_p3_2++;
        }
    }
    document.querySelector('.out-3').textContent = out_t3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4

out_t4 = '';
function t4() {
    let i_p4_1 = +document.querySelector('.i-p4_1').value;
    let i_p4_2 = +document.querySelector('.i-p4_2').value;
    let i_p4_3 = +document.querySelector('.i-p4_3').value;

    if (i_p4_1 < i_p4_2) {
        while (i_p4_1 <= i_p4_2) {

            out_t4 += i_p4_1 + ' ';
            i_p4_1 = i_p4_1 + i_p4_3;
        }
    } else {
        while (i_p4_2 <= i_p4_1) {

            out_t4 += i_p4_2 + ' ';
            i_p4_2 = i_p4_2 + i_p4_3;
        }
    }
    document.querySelector('.out-4').textContent = out_t4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5

out_t5 = 0;
function t5() {
    let i = 0;
    while (i <= 20) {
        out_t5 += i;
        i++;
    }
    document.querySelector('.out-5').textContent = out_t5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6

out_t6 = '';
function t6() {
    let vl_6_1 = +document.querySelector('.i-p6_1').value;
    let vl_6_2 = +document.querySelector('.i-p6_2').value;

    if (vl_6_1 < vl_6_2) {
        let sum = 0;

        while (vl_6_1 <= vl_6_2) {
            sum += vl_6_1;
            vl_6_1++;
        }
        out_t6 = sum;
    } else { out_t6 = false }
    document.querySelector('.out-6').innerHTML = out_t6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7

out_t7 = '';
function t7() {
    let vl_7_1 = +document.querySelector('.i-p7_1').value;
    let vl_7_2 = +document.querySelector('.i-p7_2').value;

    if (vl_7_1 < vl_7_2) {
        mult = 1;
        while (vl_7_1 <= vl_7_2) {
            mult = mult * vl_7_1;
            vl_7_1++;
        }
        out_t7 = mult;
    } else { out_t7 = false }
    document.querySelector('.out-7').innerHTML = out_t7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8

out_t8 = '';
function t8() {
    let start = 333;
    let and = 1000000;
    let day = 1;

    while (start <= and) {
        start = start + 333;
        day++;
        out_t8 = day;
    }
    document.querySelector('.out-8').textContent = out_t8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9

out_t9 = '';
function t9() {
    let i_p9_1 = +document.querySelector('.i-p9_1').value;
    let i_p9_2 = +document.querySelector('.i-p9_2').value;

    switch (true) {
        // case i_p9_1 % 2 == 0 || i_p9_2 % 2 == 0: out_t9 += 0; continue;
        case (i_p9_1 < i_p9_2):
            while (i_p9_1 <= i_p9_2) {
                if (i_p9_1 % 2 == 0) { out_t9 += 0 + ' '; }
                else { out_t9 += i_p9_1 + ' '; }
                i_p9_1++;
            }; break;
        case (i_p9_2 < i_p9_1):
            while (i_p9_2 <= i_p9_1) {
                if (i_p9_2 % 2 == 0) { out_t9 += 0 + ' '; }
                else { out_t9 += i_p9_2 + ' '; }
                i_p9_2++;
            }

    }
    document.querySelector('.out-9').textContent = out_t9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10

out_t10 = '';
function t10() {
    let i = 1;
    while (i < 7) {
        let k = 0;
        while (k < 6) {
            k++;
            if (k < 5) { out_t10 += '&nbsp;'; }
            else if (k >= 5 && i % 2 != 0) out_t10 += '*';
            else if (i % 2 == 0 && k >= 5) { out_t10 += '*'; break }
        }
        out_t10 += '<br>';
        i++;
    }
    document.querySelector('.out-10').innerHTML = out_t10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


out_t11 = '';
function t11() {
    let div_11 = document.querySelectorAll('.div-11');

    let i = 0;
    while (i < div_11.length) {
        out_t11 += div_11[i].textContent + ' ';
        i++;
    }
    document.querySelector('.out-11').textContent = out_t11;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

function t12() {
    let div_12 = document.querySelectorAll('.div-12');
    let i = 0;
    while (i < div_12.length) {
        div_12[i].style.background = 'orange';
        i++;
    }
}
document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let i_13 = document.querySelectorAll('.i-13');

    let i = 0;
    while (i < i_13.length) {
        i_13[i].value = i + 1;
        i++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let i_14 = document.querySelectorAll('.i-14');

    let i = 0;
    while (i < i_14.length) {
        switch (true) {
            case i_14[i].checked: document.querySelector('.out-14').textContent = i_14[i].value; break;
        }
        i++;
    }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

let out_t15 = '';

function t15() {
    let i = 0;
    let k = 10;

    while (i <= 10) {
        out_t15 += `${k} ${i} `;
        i++;
        k--;
    }
    document.querySelector('.out-15').textContent = out_t15;
}

document.querySelector('.b-15').onclick = t15;
