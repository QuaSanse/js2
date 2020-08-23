/*
*  class Goods2 наследуется от class Goods
*
*/

class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw() {
        if (this.sale == true) {
            document.querySelector('.out-6').innerHTML =
                `
            <img src= img/${ this.image}> <br>
            Название товара: ${this.name}<br>
            Количество на кладе: ${this.count}<br>
            Цена: ${this.amount}
            `
        }

    }
}