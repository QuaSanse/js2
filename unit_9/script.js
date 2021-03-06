// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

function func_1() {
    let u1 = document.querySelector('.u-1');
    u1.style.width = '200px';
    u1.style.height = '100px';
    u1.style.border = '1px solid black';
    // u1.style.backgroundColor = 'orange';
}
func_1();

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

function func_2() {
    let u2 = document.querySelector('.u-2');
    u2.classList.add('css-1');
    u2.style.backgroundColor = 'green';
}
func_2();


// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.
let u3 = document.querySelectorAll('.u-3');

for (let i = 0; i < u3.length; i++) {
    u3[i].onclick = function func_3() {
        this.style.backgroundColor = 'red';
    }
}

// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.
let u4 = document.querySelectorAll('.u-4');

for (let i = 0; i < u4.length; i++) {
    u4[i].onclick = function func_4() {
        this.classList.add('css-2');
    }
}



// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.
let u5 = document.querySelectorAll('.u-5');

for (let i = 0; i < u5.length; i++) {
    u5[i].onclick = function func_5() {
        this.classList.remove('css-3');
    }
}

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.
let u6 = document.querySelector('.u-6');

u6.onclick = function func_6() {
    this.classList.toggle('active');
}

// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    console.log(document.querySelectorAll('.css-3').length);
}

func_7();

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    let pu1 = document.querySelectorAll('.u-1');
    for (let i = 0; i < pu1.length; i++) {
        pu1[i].setAttribute('data-title', 'test-data');
    }
}

func_8();

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.
let u9 = document.querySelectorAll('.u-9');

for (let i = 0; i < u9.length; i++) {
    u9[i].onclick = function func_9() {
        console.log(this.getAttribute('data'));
    }
}

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.
let u10 = document.querySelectorAll('.u-10__button');
let u10_out = document.querySelector('.u-10__out');

for (let i = 0; i < u10.length; i++) {
    u10[i].onclick = function func_10() {
        if (this.getAttribute('data-currency') == 'euro') {
            u10_out.innerHTML = '1.11 USD';
        } else if (this.getAttribute('data-currency') == 'usd') {
            u10_out.innerHTML = '1 USD';
        }
        else if (this.getAttribute('data-currency') == 'rub') {
            u10_out.innerHTML = '0.016091 USD';
        }
    }
}

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 

let u11_btn = document.querySelectorAll('.u-11__button');

for (let i = 0; i < u11_btn.length; i++) {
    u11_btn[i].onclick = function func_11() {
        let u11_inp = document.querySelector('.u-11__input').value;
        let u11_out = document.querySelector('.u-11_out');
        let sum = this.getAttribute('data-currency');
        u11_out.value = u11_inp * sum;
    }
}


// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

function func_12() {
    let div_12 = document.createElement('div');
    div_12.classList.add('css-4');
    return div_12;
}
console.log(func_12());

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

function func_13() {
    let span_13 = document.createElement('span');
    span_13.classList.add('span-13')
    span_13.innerHTML = ' 13';
    document.querySelector('.u-13').appendChild(span_13);
}
func_13();

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

function func_14() {
    let span_14 = document.createElement('span');
    span_14.classList.add('span-14');
    span_14.innerHTML = '14 ';
    document.querySelector('.u-14').prepend(span_14);
}
func_14();

// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

function func_15() {
    let span_15 = document.createElement('span');
    span_15.classList.add('span-15');
    span_15.innerHTML = '15';
    document.querySelector('.u-15').before(span_15);
}
func_15();

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

function func_16() {
    let btn_16 = document.createElement('button');
    btn_16.classList.add('u-16');
    btn_16.innerHTML = 'Push';
    document.querySelector('.u-16__out').before(btn_16);

    btn_16.onclick = () => {
        console.log(btn_16.innerHTML);
        document.querySelector('.u-16__out').innerHTML = btn_16.innerHTML;
    }
}
func_16();

// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

function func_17() {
    let p_17 = document.createElement('p');
    p_17.classList.add('p-17');
    p_17.innerHTML = '17';

    document.querySelector('.u-17').replaceWith(p_17);
}
func_17();

// TASK 18. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

let out_18 = document.querySelectorAll('.out-18');

for (let i = 0; i < out_18.length; i++) {
    out_18[i].onclick = function func_18() {
        this.remove(out_18[i]);
    }
}

// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(a) {
    let li_19 = document.createElement('li');
    li_19.classList.add('li-19');
    li_19.textContent = a;

    document.querySelector('.u-19').append(li_19);
}

func_19('Second');

// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.


let u_20 = document.querySelector('.u-20');

// input
let inp_20 = document.createElement('input');
inp_20.classList.add('inp-20');
inp_20.setAttribute('type', 'text')
inp_20.setAttribute('placeholder', 'Задача');
u_20.before(inp_20);

// checkbox
let ch_20 = document.createElement('input');
ch_20.setAttribute('type', 'checkbox');
ch_20.setAttribute('id', 'ch-20');
ch_20.classList.add('ch-20');
ch_20.style.marginLeft = '10px';
inp_20.after(ch_20);

// label for checkbox
let lab_20 = document.createElement('label');
lab_20.setAttribute('for', 'ch-20');
lab_20.innerHTML = 'Важное';
ch_20.after(lab_20);

// button
let btn_20 = document.createElement('button');
btn_20.classList.add('btn-20');
btn_20.textContent = 'Добавить задачу';
btn_20.style.marginLeft = '10px';
lab_20.after(btn_20);

btn_20.onclick = function func_20() {
    vl_20 = inp_20.value;

    let li_20 = document.createElement('li');
    if (ch_20.checked) {
        li_20.classList.add('css-5');
    }
    li_20.textContent = vl_20;
    u_20.appendChild(li_20);

    // clear
    inp_20.value = '';
}




