let selSity = document.getElementById('sel_sity');
let sity = 524894; //по умолчанию Москва
let lang = 'ru'; //язык вывода описания
let units = 'metric'; //единицы измерения

//Создание элемента li
let lilast2 = document.createElement('li');

function weat() {

    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${sity}&lang=${lang}&units=${units}&appid=feaff5ca86fd7dbb69557aec1bdbefcc`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            //console.log(data);
            document.querySelector('.sity-name').textContent = data.name;
            document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;`;
            document.querySelector('.description').textContent = data.weather[0].description;
            document.querySelector('.features li').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;


            lilast2.textContent = `ветер ${data.wind.speed} м/с`;
            document.querySelector('.features li').after(lilast2);
        })
}
weat();

//вызов по событию
selSity.onchange = () => {
    sity = document.getElementById('sel_sity').value;
    weat();
};

