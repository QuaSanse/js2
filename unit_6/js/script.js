// Task 1 --------------------
let sp_t1 = document.getElementById('sp_t1');

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        sp_t1.innerHTML += '*';
    }
    sp_t1.innerHTML += '_';
}

// Task 2 --------------------
let sp_t2 = document.getElementById('sp_t2');

for (let i = 1; i < 4; i++) {
    sp_t2.innerHTML += i + '<br>';
    for (let k = 0; k < 3; k++) {
        sp_t2.innerHTML += '*_'
    }
    sp_t2.innerHTML += '<br>'
}

// Task 3 --------------------
let sp_t3 = document.getElementById('sp_t3');

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 3; k++) {
        sp_t3.innerHTML += '*_';
    }
    sp_t3.innerHTML += '<br>';
}

// Task 4 --------------------
let sp_t4 = document.getElementById('sp_t4');

let aut_t4 = '';
for (let i = 0; i <= 10; i++) {
    // 1
    aut_t4 += i + '_';
    for (let k = 0; k < 1; k++) {
        // 1
        aut_t4 += 10 - i + '_';
    }
} sp_t4.innerHTML = aut_t4;