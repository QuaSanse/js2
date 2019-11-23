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
function t8() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
}

document.querySelector('.b-8').onclick = function () {
    document.querySelector('.out-8').innerHTML = t8();
}


// Task 9
function t9(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(5, 20);
}


// Task 10
function t10(x, y, z) {
    return `rgb(${Math.floor(Math.random(x) * 256)},${Math.floor(Math.random(y) * 256)},${Math.floor(Math.random(z) * 256)})`;
}

document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10();
    document.querySelector('.out-10').style.backgroundColor = t10();
}

// Task 11
function f11(a) {
    return a;
}
let par1 = f11(2);
console.log(par1);

function f11_2(a, b) {
    return a * b;
}

document.querySelector('.b-11').onclick = function () {
    document.querySelector('.out-11').textContent = f11_2(par1, 5);
}


// Task 12
function toNum(inp = document.querySelector('.inpt12')) {
    return +inp.value;
}

document.querySelector('.b-12').onclick = () => {
    document.querySelector('.out-12').textContent = toNum();
    document.querySelector('.inpt12').value = '';
}


// Task 13
function emptyInput(inp = document.querySelector('.inpt13')) {
    if (inp.value.trim() == '') { return false; }
    else { return inp.value.trim(); }
}

document.querySelector('.b-13').onclick = () => {
    document.querySelector('.out-13').textContent = emptyInput();
}


// Task 14
function t14(inp = document.querySelector('.inpt14').value) {
    switch (true) {
        // case inp != isInteger(inp): return 'Ваше число дробное'; break;
        case isNaN(inp): return 'Не число'; break;
        case inp.length === 0 || !inp.trim(): return 'Введите число'; break;
        case inp != parseInt(inp): return 'Ваше число дробное'; break;
        case (inp ^ 0) === inp: return 'Ваше число дробное'; break;
        case +inp % 2 == 0: return 'Ваше число четное'; break;
        default: return 'Ваше число не четное';
    }
}

document.querySelector('.b-14').onclick = () => {
    document.querySelector('.out-14_1').textContent = document.querySelector('.inpt14').value;
    document.querySelector('.out-14_2').textContent = t14();
    document.querySelector('.inpt14').value = '';
}