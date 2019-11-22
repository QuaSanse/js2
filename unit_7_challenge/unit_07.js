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
function t5() {
    let yourName = document.querySelector('.inp_t5').value;
    return `Hello ${yourName}`;
}

document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').textContent = t5();
    document.querySelector('.inp_t5').value = '';
}


// Task 6
let out_t6 = document.querySelector('.out-6');
function t6(a, b) {
    switch (true) {
        case a >= b: return out_t6.innerHTML = a;
        default: return out_t6.innerHTML = b;
    }
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(1, 7);
}


// Task 7
function t7(a) {
    return 2019 - a;
}
document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').textContent = t7(1978);
}


// Task 8
function t8(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('.b-8').onclick = function () {
    document.querySelector('.out-8').innerHTML = t8(1, 10);
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
