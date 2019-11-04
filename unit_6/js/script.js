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

// Task 5 --------------------
let sp_t5 = document.getElementById('sp_t5');

aut_t5 = '';
for (let i = 0; i < 3; i++) {
    if (i != 0) {
        aut_t5 += '<br>';
    }
    for (let k = 0; k < 6; k++) {
        if (k % 2 == 0) {
            aut_t5 += '1';
        } else {
            aut_t5 += '0';
        }
    }
} sp_t5.innerHTML = aut_t5;

// Task 6 --------------------
let sp_t6 = document.getElementById('sp_t6');

aut_t6 = '';
for (let i = 0; i < 3; i++) {
    if (i != 0) {
        aut_t6 += '<br>';
    }
    for (let k = 0; k < 6; k++) {
        switch (true) {
            case k == 2 || k == 5:
                aut_t6 += 'x';
                break;
            case (k % 2 == 0):
                aut_t6 += '1';
                break;
            default:
                aut_t6 += '0';
        }
    }
} sp_t6.innerHTML = aut_t6;

// Task 7 --------------------
let sp_t7 = document.getElementById('sp_t7');

aut_t7 = '';
for (let i = 0; i < 4; i++) {
    if (i != 0) {
        aut_t7 += '<br>';
    }
    for (let k = 0; k <= i; k++) {
        aut_t7 += '*';
    }
} sp_t7.innerHTML = aut_t7;

// Task 8 --------------------
let sp_t8 = document.getElementById('sp_t8');

aut_t8 = '';
for (let i = 5; i >= 0; i--) {
    if (i != 5) {
        aut_t8 += '<br>';
    }
    for (let k = i; k > 0; k--) {
        aut_t8 += '*';
    }
} sp_t8.innerHTML = aut_t8;