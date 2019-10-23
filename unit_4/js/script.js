// Task 1 --------------------
let button_t1 = document.getElementById('button_t1');

button_t1.onclick = () => {
    alert('Task 1');
}

// Task 2 --------------------
let input_t2 = document.getElementById('input_t2');

input_t2.onclick = () => {
    alert('Task 2');
}

// Task 3 --------------------
let p_t3 = document.getElementById('p_t3');

p_t3.onclick = () => {
    alert('Task 3');
}

// Task 4 --------------------

let btn_t4 = document.getElementById('btn_t4');
let aut_t4 = document.getElementById('aut_t4');

btn_t4.onclick = () => {
    let check_t4 = document.getElementById('check_t4');

    if (check_t4.checked) {
        console.log('true');
        aut_t4.innerHTML = 'true';
    } else {
        console.log('false');
        aut_t4.innerHTML = 'false';
    }

}

// Task 5 --------------------
let btn_t5 = document.getElementById('btn_t5');
let aut_t5 = document.getElementById('aut_t5');

btn_t5.onclick = () => {
    let check_t5 = document.getElementById('check_t5');

    if (check_t5.checked) {
        aut_t5.innerHTML = check_t5.value;
    } else {
        aut_t5.innerHTML = 'false';
    }
}
// Task 6 --------------------
let inp_t6 = document.getElementById('inp_t6');
let btn_t6 = document.getElementById('btn_t6');

btn_t6.onclick = () => {
    alert(inp_t6.value);
}

// Task 7 --------------------
let inp_t7 = document.getElementById('inp_t7');
let btn_t7 = document.getElementById('btn_t7');

btn_t7.onclick = () => {
    if (inp_t7.value.length < 6) {
        console.log('длина пароля меньше 6 символов');
    } else {
        alert(inp_t7.value);
    }
}

// Task 8 --------------------
let div_t8 = document.getElementById('div_t8');
let btn_t8_1 = document.getElementById('btn_t8_1');

btn_t8_1.onclick = () => {
    div_t8.innerHTML =
        '<input type="text" id="inp_t8"></input>' + ' ' +
        '<button id="btn_t8_2">Push in div</button>'

    btn_t8_2.onclick = () => {
        alert(inp_t8.value);
        inp_t8.value = '';
    }
}

// Task 9 --------------------
let rad_t9 = document.getElementById('rad_t9');
let btn_t9 = document.getElementById('btn_t9');

btn_t9.onclick = () => {
    if (rad_t9.checked) {
        alert(rad_t9.value);
    } else {
        alert('false');
    }
}

// Task 10 --------------------
let col_t10 = document.getElementById('col_t10');
let btn_t10 = document.getElementById('btn_t10');
let div_t10 = document.getElementById('div_t10');

btn_t10.onclick = () => {
    console.log(col_t10.value);
    div_t10.style.backgroundColor = col_t10.value;
}

// Task 11 --------------------
let col_t11_1 = document.getElementById('col_t11_1');
let col_t11_2 = document.getElementById('col_t11_2');
let btn_t11 = document.getElementById('btn_t11');

btn_t11.onclick = () => {
    col_t11_2.value = col_t11_1.value;
}

// Task 12 --------------------
let date_t12 = document.getElementById('date_t12');
let btn_t12 = document.getElementById('btn_t12');
let sp_t12 = document.getElementById('sp_t12');

btn_t12.onclick = () => {
    sp_t12.innerHTML = date_t12.value;
}

// Task 13 --------------------
let ran_t13 = document.getElementById('ran_t13');
let btn_t13 = document.getElementById('btn_t13');
let sp_t13_1 = document.getElementById('sp_t13_1');
let sp_t13_2 = document.getElementById('sp_t13_2');

btn_t13.onclick = () => {
    sp_t13_1.innerHTML = ran_t13.value;
}

ran_t13.oninput = () => {
    sp_t13_2.innerHTML = ran_t13.value;
}

// Task 14 --------------------
let area_t14 = document.getElementById('area_t14');
let btn_t14 = document.getElementById('btn_t14');
let sp_t14 = document.getElementById('sp_t14');

btn_t14.onclick = () => {
    sp_t14.innerHTML = area_t14.value;
}

// Task 15 --------------------
let area_t15 = document.getElementById('area_t15');
let inp_t15 = document.getElementById('inp_t15');
let btn_t15 = document.getElementById('btn_t15');
let sp_t15 = document.getElementById('sp_t15');

btn_t15.onclick = () => {
    area_t15.innerHTML = inp_t15.value;
    sp_t15.innerHTML = inp_t15.value;
    inp_t15.value = '';
}

// Task 16 --------------------
let sel_t16 = document.getElementById('sel_t16');
let btn_t16 = document.getElementById('btn_t16');
let sp_t16 = document.getElementById('sp_t16');

btn_t16.onclick = () => {
    if (sel_t16.value == 'Пункт 1') {
        sp_t16.innerHTML = sel_t16.value;
    } else if (sel_t16.value == 'Пункт 2') {
        sp_t16.innerHTML = sel_t16.value;
    } else if (sel_t16.value == 'Пункт 3') {
        sp_t16.innerHTML = sel_t16.value;
    } else {
        sp_t16.innerHTML = sel_t16.value;
    }
}

// Task 17 --------------------


// Task 18 --------------------
let sel_t18 = document.getElementById('sel_t18');
let sp_t18 = document.getElementById('sp_t18');

sel_t18.onchange = () => {
    if (sel_t18.value == 'Пункт 1') {
        sp_t18.innerHTML = sel_t18.value;
    } else if (sel_t18.value == 'Пункт 2') {
        sp_t18.innerHTML = sel_t18.value;
    } else if (sel_t18.value == 'Пункт 3') {
        sp_t18.innerHTML = sel_t18.value;
    } else {
        sp_t18.innerHTML = sel_t18.value;
    }
}

// Task 19 --------------------
let inp_t19 = document.getElementById('inp_t19');
let pass_t19 = document.getElementById('pass_t19');
let btn_t19 = document.getElementById('btn_t19');

btn_t19.onclick = (event) => {
    event.preventDefault();
    console.log(inp_t19.value);
    console.log(pass_t19.value);
}

// Task 20 --------------------
let btn_t20 = document.getElementById('btn_t20');

btn_t20.onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('.form_t20');
    console.log(form.elements.inp_t20.value);
    console.log(form.elements.pass_t20.value);
}