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
            aut_t10 += `0${i * 10 + k}&nbsp;`;
        } else {
            aut_t10 += `${i * 10 + k}&nbsp;`;
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
                aut_pt1 += '&nbsp;'; break;
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
            case k < 3: aut_pt2 += '&nbsp;'; break;
            case (k % 2 == 0): aut_pt2 += '0'; break;
            default: aut_pt2 += '1';
        }
    }
    aut_pt2 += '<br>';
} sp_pt2.innerHTML = aut_pt2;

// Task 3 --------------------
let sp_pt3 = document.getElementById('sp_pt3');

aut_pt3 = '';
for (let i = 0; i < 3; i++) {
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
            case k < 3: aut_pt4 += '&nbsp;'; break;
            default: aut_pt4 += '*';
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
            case k < 3: aut_pt5 += '&nbsp;'; break;
            default: aut_pt5 += '*';
        }
    }
    aut_pt5 += '<br>';
} sp_pt5.innerHTML = aut_pt5;

// Task 6 --------------------
let sp_pt6 = document.getElementById('sp_pt6');

aut_pt6 = '';
for (let i = 3; i > 0; i--) {
    for (let k = 0; k < 5; k++) {
        switch (true) {
            case k < i + 2: aut_pt6 += '&nbsp;';
        }
    }
    aut_pt6 += '***** <br>';
} sp_pt6.innerHTML = aut_pt6;

// Task 7 --------------------
let sp_pt7 = document.getElementById('sp_pt7');

let aut_pt7 = '';
let pt7_1 = 3;
let pt7_2 = 3;
let pt7_3 = 7;
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 9; k++) {
        switch (true) {
            case k < pt7_1 || k > pt7_2 || k > pt7_3: aut_pt7 += '&nbsp;'; break;
            default: aut_pt7 += '*';
        }
    }
    pt7_2++;
    pt7_3--;
    aut_pt7 += '<br>';
} sp_pt7.innerHTML = aut_pt7;

// Task 8 --------------------
let sp_pt8 = document.getElementById('sp_pt8');

let aut_pt8 = '';
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 10; k++) {
        if (k < 4 || k != 4 && k != 9 && i >= 1 && i <= 3) {
            aut_pt8 += '<tt>&nbsp;</tt>';
        } else {
            aut_pt8 += '<tt>*</tt>';
        }
    }
    aut_pt8 += '<br>';
} sp_pt8.innerHTML = aut_pt8;

// Task 9 --------------------
let sp_pt9 = document.getElementById('sp_pt9');
let inp_pt9 = document.getElementById('inp_pt9');

inp_pt9.oninput = () => {
    let aut_pt9 = '';
    let vl_pt9 = inp_pt9.value;
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 10; k++) {
            if (k < 4 || k != 4 && k != 9 && i >= 1 && i <= 3) {
                aut_pt9 += '<tt>&nbsp;</tt>';
            } else {
                aut_pt9 += '<tt>' + vl_pt9 + '</tt>';
            }
        }
        aut_pt9 += '<br>';
    } sp_pt9.innerHTML = aut_pt9;
    inp_pt9.value = '';
}

// Task 10 --------------------
let sp_pt10 = document.getElementById('sp_pt10');

let aut_pt10 = '';
for (let i = 6; i < 8; i++) {
    for (let k = 0; k <= 10; k++) {
        aut_pt10 += `${i} * ${k} =  ${i * k}<br>`;
    }
    aut_pt10 += '<hr>';
} sp_pt10.innerHTML = aut_pt10;

// Task 11 --------------------
let sp_pt11 = document.getElementById('sp_pt11');

let aut_pt11 = '';
for (let i = 1; i < 6; i++) {
    for (let k = 1; k < 6; k++) {
        switch (true) {
            case k <= i: aut_pt11 += k + ' ';
        }
    }
    aut_pt11 += '<br>';
} sp_pt11.innerHTML = aut_pt11;

// Task 12 --------------------
let sp_pt12 = document.getElementById('sp_pt12');

let aut_pt12 = '';
for (let i = 0; i < 5; i++) {
    for (let k = 1; k <= 10; k++) {
        switch (true) {
            case (i * 10 + k) < 10: aut_pt12 += `${i}${i * 10 + k}&nbsp;`; break;
            default: aut_pt12 += `${i * 10 + k}&nbsp;`;
        }
    }
    aut_pt12 += '<br>';
} sp_pt12.innerHTML = aut_pt12;

// Task 13 --------------------
let sp_pt13 = document.getElementById('sp_pt13');

let aut_pt13 = '';
for (let i = 5; i > 0; i--) {
    for (let k = 5; k > 0; k--) {
        switch (true) {
            case k <= i: aut_pt13 += k + ' ';
        }

    }
    aut_pt13 += '<br>';
} sp_pt13.innerHTML = aut_pt13;

// Task 14 --------------------
let sp_pt14 = document.getElementById('sp_pt14');

let aut_pt14 = '';
for (let i = 1; i < 6; i++) {
    for (let k = 5; k > 0; k--) {
        switch (true) {
            case i < k: aut_pt14 += `<tt>&nbsp;&nbsp;</tt>`; break;
            default: aut_pt14 += `<tt>${k}&nbsp;</tt>`;
        }
    }
    aut_pt14 += '<br>';
} sp_pt14.innerHTML = aut_pt14;

// Task 15 --------------------
let sp_pt15 = document.getElementById('sp_pt15');

let aut_pt15 = '';
for (let i = 1; i < 6; i++) {
    for (let k = 5; k > 0; k--) {
        switch (true) {
            case i < k: aut_pt15 += '<tt>X&nbsp;</tt>'; break;
            default: aut_pt15 += `<tt>${k}&nbsp;</tt>`;
        }
    }
    aut_pt15 += '<br>';
} sp_pt15.innerHTML = aut_pt15;

// Task 16 --------------------
let sp_pt16 = document.getElementById('sp_pt16');

let aut_pt16 = '';
let pt16_1 = 2;
for (let i = 1; i < 6; i++) {
    for (let k = 0; k < 10; k++) {
        switch (true) {
            case k < pt16_1: aut_pt16 += '&nbsp;'; break;
            case k < i + 2: aut_pt16 += i + '&nbsp;'; break;
            default: aut_pt16 += '&nbsp;';
        }
    }
    aut_pt16 += '<br>';
} sp_pt16.innerHTML = aut_pt16;

// Task 17 --------------------
let sp_pt17 = document.getElementById('sp_pt17');

let aut_pt17 = '';
// let pt16_1 = 2;
for (let i = 6; i > 0; i--) {
    for (let k = 0; k < 5; k++) {
        switch (true) {
            case k + 1 >= i: aut_pt17 += `${i}&nbsp;&nbsp;`;
        }
    }
    aut_pt17 += '<br>';
} sp_pt17.innerHTML = aut_pt17;

// Task 18 --------------------
let sp_pt18 = document.getElementById('sp_pt18');

let aut_pt18 = '';
for (let i = 5; i > 0; i--) {
    for (let k = 0; k <= 5; k++) {
        switch (true) {
            case k >= i && i % 2 == 0: aut_pt18 += `x&nbsp;&nbsp;`; break;
            case k >= i: aut_pt18 += `${i}&nbsp;&nbsp;`;
        }
    }
    aut_pt18 += '<br>';
} sp_pt18.innerHTML = aut_pt18;

// Task 19 --------------------
let sp_pt19 = document.getElementById('sp_pt19');

let aut_pt19 = '';
let pt19_1 = 5;
let pt19_2 = 9;
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 12; k++) {
        switch (true) {
            case k < pt19_1 || k > pt19_2: aut_pt19 += '&nbsp;'; break;
            default: aut_pt19 += '*';
        }
    }
    pt19_1--;
    pt19_2++;
    aut_pt19 += '<br>';
} sp_pt19.innerHTML = aut_pt19;

// Task 20 --------------------
let sp_pt20 = document.getElementById('sp_pt20');

let aut_pt20 = '';
let pt20_1 = 5;
let pt20_2 = 6;
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 12; k++) {
        switch (true) {
            case k < pt20_1 || k > pt20_2: aut_pt20 += '&nbsp;'; break;
            case i > 2 && k + 5 < pt20_2: aut_pt20 += '&nbsp;'; break;
            case i > 2 && k - 5 > pt20_1: aut_pt20 += '&nbsp;'; break;
            default: aut_pt20 += '*';
        }
    }
    pt20_1--;
    pt20_2++;
    aut_pt20 += '<br>';
} sp_pt20.innerHTML = aut_pt20;