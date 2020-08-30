/*
*  class Goods2 наследуется от class Goods 
*   добавлено свойство sale, если sale=false товар не отображается на странице
*/

class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);

        this.sale = sale;
    }

    draw(domElem) {
        if (this.sale == true) {
            super.draw(domElem);
        }

    }
}