/*
*  class Goods
*
*/

class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw() {
        document.querySelector('.out-4').innerHTML =
            `
            <img src= img/${ this.image}> <br>
            Название товара: ${this.name}<br>
            Количество на кладе: ${this.count}<br>
            Цена: ${this.amount}
        `
    }
}