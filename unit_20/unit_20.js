//console.log(event);
// console.log('charCode: ' + event.charCode); //код символа
// console.log('code: ' + event.code); //код клавиши привязанный к физическому расположению клавиши на клавиатуре
// console.log('key: ' + event.key); //символ клавиши
// console.log('keyCode: ' + event.keyCode);

// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    return document.querySelector('.out-1').innerHTML = event.key;
}

// ваше событие здесь!!!
document.querySelector('.i-1').onkeypress = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    return document.querySelector('.out-2').innerHTML = event.charCode;
}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

function t3(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        document.querySelector('.out-3').innerHTML = false;
    }
    else {
        document.querySelector('.out-3').innerHTML = true;
    }
}

// ваше событие здесь!!!
document.querySelector('.i-3').onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(e) {
    let out = '';
    out += e.key.toLowerCase();
    document.querySelector('.out-4').innerHTML += out;
}

// ваше событие здесь!!!
document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
    let out = '';
    out += e.key.toUpperCase();
    document.querySelector('.out-5').innerHTML += out;
}

// ваше событие здесь!!!
document.querySelector('.i-5').onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let out_t6 = '';

function t6(e) {
    let code = e.keyCode;

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        out_t6 += e.key.toLowerCase();
        document.querySelector('.i-6').value = out_t6;
    }
    return false;
}

// ваше событие здесь!!!
document.querySelector('.i-6').onkeypress = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5];

    // получаем случайное число с учетом длинны массива и возвращаем индекс
    function arrayRandElement(arr) {
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    document.querySelector('.out-7').innerHTML = arrayRandElement(a7);
}

// ваше событие здесь!!!
document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {

    let out = {
        "i": 1,
        "o": 0,
        "I": 7
    }

    document.querySelector('.i-8').value = out[event.key];
    return false;
}

// ваше событие здесь!!!
document.querySelector('.i-8').onkeypress = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let counter = 0;

function t9(event) {

    if (event.keyCode == 40) {
        counter = counter + 1;
    }

    document.querySelector('.out-9').innerHTML = counter;
}

// ваше событие здесь!!!
document.querySelector('.i-9').onkeyup = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let h10 = 75;
let w10 = 75;
let imgHeight = document.querySelector('.div-10 img').setAttribute('height', 75);
let imgWidth = document.querySelector('.div-10 img').setAttribute('width', 75);

function t10(event) {
    let img = document.querySelector('.div-10 img');
    let block = document.querySelector('.div-10');

    if (event.keyCode == 37 || event.keyCode == 39) {
        // block.style.width = `${w10}px`;
        img.setAttribute('width', w10);
        w10 = w10 + 1;
    }
    if (event.keyCode == 38 || event.keyCode == 40) {
        // block.style.height = `${h10}px`;
        img.setAttribute('height', h10);
        h10 = h10 + 1;
    }
}

// ваше событие здесь!!!
document.querySelector('.i-10').onkeyup = t10;

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

let kdKey = document.querySelectorAll('.key');

function t11(event) {

    for (let i = 0; i < kdKey.length; i++) {
        if (kdKey[i].getAttribute('data-key') == event.key || kdKey[i].getAttribute('data-key') == event.code) {
            //условие для кнопки Tab
            if (event.keyCode == 9) { event.preventDefault(); }

            //условие для кнопки CapsLock
            if (event.keyCode == 20 && kdKey[i].classList.contains("highlight") == true) {
                kdKey[i].classList.toggle("highlight");
                break;
            }

            //Добавление класса к элементу
            // kdKey[i].style.backgroundColor = 'slategray';
            kdKey[i].classList.add("highlight");

            //перехват события onkeyup и удаление класса для элемента
            document.querySelector('.i-11').addEventListener('keyup', () => {
                if (event.keyCode == 20) return false;
                // kdKey[i].style.backgroundColor = '';
                kdKey[i].classList.remove("highlight");
            })
        }
    }
}

// ваше событие здесь!!!
document.querySelector('.i-11').onkeydown = t11;

