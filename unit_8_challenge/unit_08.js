//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let out_t1 = '';
function t1() {
    let i = 0;
    while (i < 50) {
        i++;
        out_t1 += i + ' ';
    }
    document.querySelector('.out-1').textContent = out_t1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

let out_t2 = '';
function t2() {
    let i = 0;
    while (i < 122) {
        i = i + 2;
        out_t2 += i + ' ';
    }
    document.querySelector('.out-2').textContent = out_t2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

out_t3 = '';
function t3() {
    let k = 26;
    while (k > 7) {
        k--;
        out_t3 += k + ' ';
    }
    document.querySelector('.out-3').textContent = out_t3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.

out_t4 = '';
function t4() {
    let i = 77;
    while (i >= 35) {
        out_t4 += i + '_';
        i = i - 3;
    }
    document.querySelector('.out-4').textContent = out_t4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

out_t5 = '';
function t5() {
    let i = 1;
    while (i <= 17) {
        if (i % 2 == 0) { out_t5 += i + '_**' }
        else { out_t5 += i + '_*' }
        i++;
    }
    document.querySelector('.out-5').textContent = out_t5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.

out_t6 = '';
function t6() {
    let it = 0;
    let vl_6 = document.querySelector('.i-6').value;
    while (it < vl_6) {
        let str = 0;
        while (str < 6) {
            out_t6 += '*';
            str++;
        }
        out_t6 += ' ';
        it++;
    }
    document.querySelector('.out-6').innerHTML = out_t6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

out_t7 = '';
function t7() {
    let vl_t7 = document.querySelector('.i-7').value;
    while (vl_t7 >= 0) {

        out_t7 += vl_t7 + ' ';
        vl_t7--;
    }
    document.querySelector('.out-7').textContent = out_t7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.

out_t8 = '';
function t8() {
    let i_81 = document.querySelector('.i-81').value;
    let i_82 = document.querySelector('.i-82').value;

    while (i_81 <= i_82) {
        out_t8 += i_81 + ' ';
        i_81++;
    }
    document.querySelector('.out-8').textContent = out_t8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

out_t9 = '';
function t9() {
    let i_91 = document.querySelector('.i-91').value;
    let i_92 = document.querySelector('.i-92').value;

    if (i_91 < i_92) {
        while (i_91 <= i_92) {
            out_t9 += i_91 + ' ';
            i_91++;
        }
    } else {
        while (i_92 <= i_91) {
            out_t9 += i_92 + ' ';
            i_92++;
        }
    }
    document.querySelector('.out-9').textContent = out_t9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

out_t10 = '';
function t10() {
    let i = 1950;
    while (i <= 2000) {
        out_t10 += i + ' ';
        i = i + 2;
    }
    document.querySelector('.out-10').textContent = out_t10;
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
