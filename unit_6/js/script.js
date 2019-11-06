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
    for (let k = 0; k < 6; k++) {
        if (k % 2 == 0) {
            aut_t5 += '1';
        } else {
            aut_t5 += '0';
        }
    }
    aut_t5 += '<br>';
} sp_t5.innerHTML = aut_t5;

// Task 6 --------------------
let sp_t6 = document.getElementById('sp_t6');

aut_t6 = '';
for (let i = 0; i < 3; i++) {
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
    aut_t6 += '<br>';
} sp_t6.innerHTML = aut_t6;

// Task 7 --------------------
let sp_t7 = document.getElementById('sp_t7');

aut_t7 = '';
for (let i = 0; i < 4; i++) {
    for (let k = 0; k <= i; k++) {
        aut_t7 += '*';
    }
    aut_t7 += '<br>';
} sp_t7.innerHTML = aut_t7;

// Task 8 --------------------
let sp_t8 = document.getElementById('sp_t8');

aut_t8 = '';
for (let i = 5; i > 0; i--) {
    for (let k = i; k > 0; k--) {
        aut_t8 += '*';
    }
    aut_t8 += '<br>';
} sp_t8.innerHTML = aut_t8;

// Task 9 --------------------
let sp_t9 = document.getElementById('sp_t9');

aut_t9 = '';
for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= i; k++) {
        aut_t9 += k + ' ';
    }
    aut_t9 += '<br>';
} sp_t9.innerHTML = aut_t9;

// Task 10 --------------------
let sp_t10 = document.getElementById('sp_t10');

aut_t10 = '';
for (let i = 0; i < 5; i++) {
    for (let k = 1; k <= 10; k++) {
        if ((i * 10 + k) < 10) {
            aut_t10 += '0' + (i * 10 + k) + ' ';
        } else {
            aut_t10 += (i * 10 + k) + '&nbsp;';
        }
    }
    aut_t10 += '<br>';
} sp_t10.innerHTML = aut_t10;

// Задачи на прокачку
// Task 1 --------------------
let sp_pt1 = document.getElementById('sp_pt1');

let aut_pt1 = '';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 8; k++) {
        switch (true) {
            case k < 3:
                aut_pt1 += '&nbsp;';
                break;
            default:
                aut_pt1 += '*';
        }
    }
    aut_pt1 += '<br>';
} sp_pt1.innerHTML = aut_pt1;

// Task 2 --------------------
let sp_pt2 = document.getElementById('sp_pt2');

aut_pt2 = '';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 9; k++) {
        switch (true) {
            case k < 3:
                aut_pt2 += '&nbsp;';
                break;
            case (k % 2 == 0):
                aut_pt2 += '0';
                break;
            default:
                aut_pt2 += '1';
        }
    }
    aut_pt2 += '<br>';
} sp_pt2.innerHTML = aut_pt2;

// Task 3 --------------------
let sp_pt3 = document.getElementById('sp_pt3');

aut_pt3 = '';
for (let i = 0; i < 3; i++) {
    // aut_pt3 += '<br> &nbsp;&nbsp;&nbsp;';

    for (let k = 0; k < 9; k++) {
        if (k < 3) {
            aut_pt3 += '&nbsp;';
        } else if (k == 5 || k == 8) {
            aut_pt3 += 'x';
            continue;
        } else if (k % 2 == 0) {
            aut_pt3 += '0';
            continue;
        } else {
            aut_pt3 += '1';
        }
    }
    aut_pt3 += '<br>';
} sp_pt3.innerHTML = aut_pt3;

// Task 4 --------------------
let sp_pt4 = document.getElementById('sp_pt4');

aut_pt4 = '';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k <= i + 3; k++) {
        switch (true) {
            case k < 3:
                aut_pt4 += '&nbsp;';
                break;
            default:
                aut_pt4 += '*';
        }
    }
    aut_pt4 += '<br>';
} sp_pt4.innerHTML = aut_pt4;

// Task 5 --------------------
let sp_pt5 = document.getElementById('sp_pt5');

aut_pt5 = '';
for (let i = 5; i > 0; i--) {
    for (let k = 0; k < i + 3; k++) {
        switch (true) {
            case k < 3:
                aut_pt5 += '&nbsp;';
                break;
            default:
                aut_pt5 += '*';
        }
    }
    aut_pt5 += '<br>';
} sp_pt5.innerHTML = aut_pt5;

// Task 6 --------------------
let sp_pt6 = document.getElementById('sp_pt6');

aut_pt6 = '';
for (let i = 3; i > 0; i--) {
    // switch (i) {
    //     case 0:
    //         aut_pt6 += '<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    //         break;
    //     case 1:
    //         aut_pt6 += '<br> &nbsp;&nbsp;&nbsp;&nbsp;';
    //         break;
    //     case 2:
    //         aut_pt6 += '<br> &nbsp;&nbsp;&nbsp;';
    // }
    for (let k = 0; k < 5; k++) {
        switch (true) {
            case k < i + 2:
                aut_pt6 += '&nbsp;';
                break;
        }
    }
    aut_pt6 += '***** <br>';
} sp_pt6.innerHTML = aut_pt6;

// Task 7 --------------------
let sp_pt7 = document.getElementById('sp_pt7');

aut_pt7 = '';
for (let i = 0; i < 5; i++) {
    aut_pt7 += '<br>' + i + ' &nbsp;&nbsp;&nbsp;';

    for (let k = 0; k <= i; k++) {
        aut_pt7 += '*';
    }
} sp_pt7.innerHTML = aut_pt7;