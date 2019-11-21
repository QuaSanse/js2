// Task 1
function t1() {
    return 'Dima';
}

document.querySelector('.b-1').onclick = () => {
    document.querySelector('.out-1').innerHTML = t1();
}


// Task 2.
function t2(name2 = 'Ivan') {
    return name2;
}

document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2('Sergey');
}


// Task 3.
function t3(a) {
    return a * 10;
}
console.log(t3(6));

document.querySelector('.b-3').onclick = function () {
    document.querySelector('.out-3').textContent = t3(22);
}


// Task 4
function t4() {
    return 'red';
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.b-4').style.backgroundColor = t4();
}


// Task 5
function t5(yourName) {
    return `Hello ${yourName}`;
}

document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').textContent = t5('Alex');
}



// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. 

function t6(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(1, 7);
}


// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t7() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return `rgb(${x},${y},${z})`;
}
document.querySelector('.b-7').onclick = function () {
    let out7 = document.querySelector('.out-7');
    out7.innerHTML = t7();
    out7.style.backgroundColor = t7();
}


// Task 8
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки.Т.е.принимает _hello_(где знак _ символизирует пробел), а возвращает hello.Для удаления пробелов - используйте trim.

function t8(str) {
    return str.trim();
    // return str;
}

document.querySelector('.b-8').onclick = function () {
    // document.querySelector('.out-8').textContent = t8('  Hello  ');
    document.querySelector('.out-8').textContent = t8('     Hello     ');
}


// Task 9
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное. 

function t9(num) {
    if (num % 2 == 0) { return true; }
    else { return false };
}

document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(15);
}


// Task 10
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них.В случае равенства - любое из чисел.

function t10(a, b) {
    switch (true) {
        case a > b: return a;
        default: return b;
    }
}

document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(3, 9);
}
