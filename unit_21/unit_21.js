
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').textContent = 'touch';
}

// ваше событие здесь!!!
document.querySelector('.div-1').ontouchstart = t1;

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let counter = 0;

function t2(event) {
    if (event.type == 'touchstart') counter = counter + 1;
    document.querySelector('.out-2').textContent = counter;
}

// ваше событие здесь!!!
document.querySelector('.div-2').ontouchstart = t2;

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
    document.querySelector('.div-3_1').addEventListener('touchstart', touchDiv3_1);
    document.querySelector('.div-3_2').addEventListener('touchstart', touchDiv3_2);

    function touchDiv3_1() {
        document.querySelector('.out-3').textContent = '3-1';
    }
    function touchDiv3_2() {
        document.querySelector('.out-3').textContent = '3-2';
    }
}

// ваше событие здесь!!!
t3();

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.div-4').addEventListener('touchstart', touchStart);

}
//функция выполнения по событию
function touchStart() {
    document.querySelector('.out-4').innerHTML = 'touch';
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener('touchstart', touchStart);
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').innerHTML = 'touchend';
}

// ваше событие здесь!!!
document.querySelector('.div-4').ontouchend = t6;

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.backgroundColor = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').ontouchstart = t7;

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
    // получаем случайное число с учетом длинны массива и возвращаем индекс
    function arrayRandElement(arr) {
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }
    document.querySelector('.div-8').style.backgroundColor = arrayRandElement(a8);
}

// ваше событие здесь!!!
document.querySelector('.div-8').ontouchstart = t8;

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9() {
    document.querySelector('.out-9').innerHTML = event.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-9').ontouchstart = t9;

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let w10 = 75;
function t10() {
    document.querySelector('.div-10').style.width = `${w10}px`;
    w10 = w10 + 1;
}

// ваше событие здесь!!!
document.querySelector('.div-10').ontouchmove = t10;

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11() {
    document.querySelector('.out-11').innerHTML = `${event.touches[0].radiusX} ${event.touches[0].radiusY}`;
}

// ваше событие здесь!!!
document.querySelector('.div-11').ontouchstart = t11;

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
const imagesMax = document.querySelector('.div-12-max');

let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const reset = document.querySelector('.reset');

let imgMax = document.createElement('img'); //элемент картинки
imgMax.src = `img/${count + 1}.png`; //путь у картинкам
imgMax.className = "img-12-max";
imagesMax.append(imgMax);

function nextFunction() {
    images[count].classList.remove('active-img');

    if (count + 1 == images.length) {
        count = 0;
        imgMax.src = `img/${count + 1}.png`;
    }
    else {
        count++;
        imgMax.src = `img/${count + 1}.png`;
    }

    images[count].classList.add('active-img');
}

function prevFunction() {
    images[count].classList.remove('active-img');

    if (count == 0) {
        count = images.length - 1;
        imgMax.src = `img/${count + 1}.png`;
    }
    else {
        count--;
        imgMax.src = `img/${count + 1}.png`;
    }

    images[count].classList.add('active-img');
}

function resetFunction() {
    images[count].classList.remove('active-img');
    count = 0;
    images[count].classList.add('active-img');
    imgMax.src = `img/${count + 1}.png`;
}

// ваше событие здесь!!!
// document.querySelector('.next').onclick = nextFunction;
// Определяем устройсто, мобильное или ПК
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
    next.ontouchstart = nextFunction;
    prev.ontouchstart = prevFunction;
    reset.ontouchstart = resetFunction;
} else {
    // код для обычных устройств
    next.onclick = nextFunction;
    prev.onclick = prevFunction;
    reset.onclick = resetFunction;
}