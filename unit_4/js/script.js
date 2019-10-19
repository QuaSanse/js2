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