// Task 1 --------------------
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2 --------------------
let sp_t2 = document.querySelector('.sp_t2');
let aut_t2 = '';
for (let i = 1; i <= 10; i++) {
    aut_t2 += i + ' ';
} sp_t2.innerHTML = aut_t2;

// Task 3 --------------------
let sp_t3 = document.querySelector('.sp_t3');
let aut_t3 = '';
for (let i = 10; i >= 0; i--) {
    aut_t3 += i + ' ';
} sp_t3.innerHTML = aut_t3;

// Task 4 --------------------
let sp_t4 = document.querySelector('.sp_t4');
let aut_t4 = '';
for (let i = 0; i <= 10; i = i + 2) {
    aut_t4 += i + ' ';
} sp_t4.innerHTML = aut_t4;

// Task 5 --------------------
let sp_t5 = document.querySelector('.sp_t5');
let aut_t5 = '';
for (let i = 21; i >= 0; i = i - 3) {
    aut_t5 += i + ' ';
} sp_t5.innerHTML = aut_t5;

//Task 6 --------------------
let sp_t6 = document.querySelector('.sp_t6');
let aut_t6 = '';
for (let i = 0; i <= 5; i++) {
    aut_t6 += '*************' + '<br>';
} sp_t6.innerHTML = aut_t6;

//Task 7 --------------------
let inp_t7 = document.querySelector('.inp_t7');
let btn_t7 = document.querySelector('.btn_t7');
let sp_t7 = document.querySelector('.sp_t7');

let aut_t7 = '';
btn_t7.onclick = () => {
    let vl_t7 = +inp_t7.value;
    for (let i = vl_t7; i >= 0; i--) {
        aut_t7 += i + ' ';
    } sp_t7.innerHTML = aut_t7;
}

//Task 8 --------------------
let inp_t8_1 = document.querySelector('.inp_t8_1');
let inp_t8_2 = document.querySelector('.inp_t8_2');
let btn_t8 = document.querySelector('.btn_t8');
let sp_t8 = document.querySelector('.sp_t8');

let aut_t8 = '';
btn_t8.onclick = () => {
    let vl_t8_1 = +inp_t8_1.value;
    let vl_t8_2 = +inp_t8_2.value;

    for (let i = vl_t8_1; i <= vl_t8_2; i++) {
        aut_t8 += i + ' ';
    } sp_t8.innerHTML = aut_t8;
}

//Task 9 --------------------
let inp_t9_1 = document.querySelector('.inp_t9_1');
let inp_t9_2 = document.querySelector('.inp_t9_2');
let btn_t9 = document.querySelector('.btn_t9');
let sp_t9 = document.querySelector('.sp_t9');

let aut_t9 = '';
btn_t9.onclick = () => {
    let vl_t9_1 = +inp_t9_1.value;
    let vl_t9_2 = +inp_t9_2.value;

    if (vl_t9_2 > vl_t9_1) {
        for (let i = vl_t9_1; i <= vl_t9_2; i++) {
            aut_t9 += i + ' ';
        } sp_t9.innerHTML = aut_t9;
    } else {
        alert('Ошибка, первое число больше второго!');
    }
}

//Task 10 --------------------
let sp_t10 = document.querySelector('.sp_t10');

let aut_t10 = '';
for (let i = 1901; i <= 1950; i++) {
    if (i % 2 == 0) {
        aut_t10 += i + ' ';
    }
} sp_t10.innerHTML = aut_t10;

//Task 11 --------------------
let div = document.querySelectorAll('.one');
let sp_t11 = document.querySelector('.sp_t11');

aut_t11 = '';
for (let i = 0; i <= div.length; i++) {
    aut_t11 = i;
} sp_t11.innerHTML = 'Количество div.one: ' + aut_t11;

//Task 12 --------------------
let btn_t12 = document.querySelector('.btn_t12');

btn_t12.onclick = () => {
    for (let i = 0; i < div.length; i++) {
        div[i].style.background = 'orange';
    }
}

//Task 13 --------------------
let btn_t13 = document.querySelector('.btn_t13');

btn_t13.onclick = () => {
    for (let i = 0; i < div.length; i++) {
        console.log(div[i]);
    }
}

//Task 14 --------------------
let input = document.querySelectorAll('input[type="text"]');
let btn_t14 = document.querySelector('.btn_t14');
//console.log(input);
btn_t14.onclick = () => {
    for (let i = 0; i < input.length; i++) {
        input[i].placeholder = 'Введите данные';
    }
}

//Task 15 --------------------
let btn_t15 = document.querySelector('.btn_t15');

aut_t15 = '';
btn_t15.onclick = () => {
    for (let i = 0; i < input.length; i++) {
        aut_t15 = input.length;
    } console.log('Количество input: ' + aut_t15);
}
