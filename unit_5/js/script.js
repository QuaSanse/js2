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
