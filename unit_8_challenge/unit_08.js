//  Task 1

let out_t1 = '';
function t1() {
    let i = 0;
    while (i <= 100) {
        if (i == 100) { out_t1 += `${i}&nbsp;` }
        else { out_t1 += i + ' ' }
        i++;
    }
    document.querySelector('.out-1').innerHTML = out_t1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2

let out_t2 = '';
function t2() {
    let i_p2_1 = +document.querySelector('.i-p2_1').value;
    let i_p2_2 = +document.querySelector('.i-p2_2').value;

    while (i_p2_1 <= i_p2_2) {
        out_t2 += i_p2_1 + ' ';
        i_p2_1++;
    }
    document.querySelector('.out-2').textContent = out_t2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3

out_t3 = '';
function t3() {
    let i_p3_1 = +document.querySelector('.i-p3_1').value;
    let i_p3_2 = +document.querySelector('.i-p3_2').value;

    if (i_p3_1 < i_p3_2) {
        while (i_p3_1 <= i_p3_2) {

            out_t3 += i_p3_1 + ' ';
            i_p3_1++;
        }
    } else {
        while (i_p3_2 <= i_p3_1) {

            out_t3 += i_p3_2 + ' ';
            i_p3_2++;
        }
    }
    document.querySelector('.out-3').textContent = out_t3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4

out_t4 = '';
function t4() {
    let i_p4_1 = +document.querySelector('.i-p4_1').value;
    let i_p4_2 = +document.querySelector('.i-p4_2').value;
    let i_p4_3 = +document.querySelector('.i-p4_3').value;

    if (i_p4_1 < i_p4_2) {
        while (i_p4_1 <= i_p4_2) {

            out_t4 += i_p4_1 + ' ';
            i_p4_1 = i_p4_1 + i_p4_3;
        }
    } else {
        while (i_p4_2 <= i_p4_1) {

            out_t4 += i_p4_2 + ' ';
            i_p4_2 = i_p4_2 + i_p4_3;
        }
    }
    document.querySelector('.out-4').textContent = out_t4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5

out_t5 = 0;
function t5() {
    let i = 0;
    while (i <= 20) {
        out_t5 += i;
        i++;
    }
    document.querySelector('.out-5').textContent = out_t5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6

out_t6 = '';
function t6() {
    let vl_6_1 = +document.querySelector('.i-p6_1').value;
    let vl_6_2 = +document.querySelector('.i-p6_2').value;

    if (vl_6_1 < vl_6_2) {
        let sum = 0;

        while (vl_6_1 <= vl_6_2) {
            sum += vl_6_1;
            vl_6_1++;
        }
        out_t6 = sum;
    } else { out_t6 = false }
    document.querySelector('.out-6').innerHTML = out_t6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7

out_t7 = '';
function t7() {
    let vl_7_1 = +document.querySelector('.i-p7_1').value;
    let vl_7_2 = +document.querySelector('.i-p7_2').value;

    if (vl_7_1 < vl_7_2) {
        mult = 1;
        while (vl_7_1 <= vl_7_2) {
            mult = mult * vl_7_1;
            vl_7_1++;
        }
        out_t7 = mult;
    } else { out_t7 = false }
    document.querySelector('.out-7').innerHTML = out_t7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8

out_t8 = '';
function t8() {
    let start = 333;
    let and = 1000000;
    let day = 1;

    while (start <= and) {
        start = start + 333;
        day++;
        out_t8 = day;
    }
    document.querySelector('.out-8').textContent = out_t8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9

out_t9 = '';
function t9() {
    let i_p9_1 = +document.querySelector('.i-p9_1').value;
    let i_p9_2 = +document.querySelector('.i-p9_2').value;

    switch (true) {
        // case i_p9_1 % 2 == 0 || i_p9_2 % 2 == 0: out_t9 += 0; continue;
        case (i_p9_1 < i_p9_2):
            while (i_p9_1 <= i_p9_2) {
                if (i_p9_1 % 2 == 0) { out_t9 += 0 + ' '; }
                else { out_t9 += i_p9_1 + ' '; }
                i_p9_1++;
            }; break;
        case (i_p9_2 < i_p9_1):
            while (i_p9_2 <= i_p9_1) {
                if (i_p9_2 % 2 == 0) { out_t9 += 0 + ' '; }
                else { out_t9 += i_p9_2 + ' '; }
                i_p9_2++;
            }
    }
    document.querySelector('.out-9').textContent = out_t9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10

out_t10 = '';
function t10() {
    let i = 1;
    while (i < 7) {
        let k = 0;
        while (k < 6) {
            k++;
            if (k < 5) { out_t10 += '&nbsp;'; }
            else if (k >= 5 && i % 2 != 0) out_t10 += '*';
            else if (i % 2 == 0 && k >= 5) { out_t10 += '*'; break }
        }
        out_t10 += '<br>';
        i++;
    }
    document.querySelector('.out-10').innerHTML = out_t10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11

out_t11 = '';
function t11() {
    let i = 1;
    let k = 10
    while (i <= 10) {
        out_t11 += `${k} ${i} `;
        k--;
        i++;
    }
    document.querySelector('.out-11').textContent = out_t11;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12

out_t12 = '';
function t12() {
    let a = 0;
    do {
        out_t12 = 'do while work';
    } while (a < 0);

    let b = 0;
    while (b < 0) {
        out_t12 = 'while work';
    }
    document.querySelector('.out-12').textContent = out_t12;
}
document.querySelector('.b-12').onclick = t12;

//  Task 13

out_t13 = '';
function t13() {

    let i = 100;
    do {
        out_t13 += i + ' ';
        i--;
    } while (i >= 0);
    document.querySelector('.out-13').textContent = out_t13;
}

document.querySelector('.b-13').onclick = t13;

//  Task 14

out_t14 = '';
function t14(percent) {
    let st = 5;
    let en = 132;
    let day = 1;
    // let percent = 30;

    do {
        st = (st / 100 * percent) + st;
        day++;
        out_t14 = day;
    } while (st <= en);
    document.querySelector('.out-14').textContent = out_t14;
}

document.querySelector('.b-14').onclick = () => {
    t14(30);
}


//  Task 15

let out_t15 = '';

function t15(per) {
    let st = 1.1;
    let en = 568;
    let day = 1;

    do {
        st = st + per;
        day++;
        out_t15 = day;
    } while (st <= en);

    document.querySelector('.out-15').textContent = out_t15;
}

document.querySelector('.b-15').onclick = () => {
    t15(0.3);
}

//  Task 16

let pt16 = document.querySelectorAll('.task-16');

function t16() {
    let i = 0;
    do {
        pt16[i].innerHTML = i + 1;
        i++;
    } while (i < pt16.length);
}

document.querySelector('.b-16').onclick = () => {
    t16();
}

//  Task 17

let pt17 = document.querySelectorAll('.task-17');

function t17() {
    let i = 0;
    let k = 3;
    do {
        pt17[i].innerHTML = k;
        i++;
        k--;
    } while (i < pt17.length);

}

document.querySelector('.b-17').onclick = () => {
    t17();
}

//  Task 18

out_t18 = '';
function t18() {
    let i = 1;
    do {
        if (i % 2 != 0) {
            out_t18 += i;
        } else { out_t18 += '*' }
        i++;
    } while (i < 20);
    document.querySelector('.out-18').textContent = out_t18;
}

document.querySelector('.b-18').onclick = () => {
    t18();
}

//  Task 18

out_t19 = '';
function t19() {
    let i = 0;
    let k = 0;
    do {
        do {
            if (i == 5 && k == 0) { out_t19 += '1 ' }
            if (i == 6 && k == 1) { out_t19 += '1 ' }
            if (i == 7 && k == 2) { out_t19 += '1 ' }
            if (i == 8 && k == 3) { out_t19 += '1 ' }
            if (i < 5) { out_t19 += '&nbsp;' }
            if (
                (i > 5 && i != 5 && k == 0) ||
                (i >= 5 && i != 6 && k == 1) ||
                (i >= 5 && i != 7 && k == 2) ||
                (i >= 5 && i != 8 && k == 3)
            ) { out_t19 += '* ' }
            i++;
        } while (i <= 8);
        out_t19 += '<br>';
        k++;
        i = 0;
    } while (k < 4);
    document.querySelector('.out-19').innerHTML = out_t19;
}

document.querySelector('.b-19').onclick = () => {
    t19();
}