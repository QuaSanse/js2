/*
*  class Valid2 наследуется от class Valid
*   добавлены свойства emaiError и passwordError
*   добавлены условия для вывода ошибок
*/

class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.emaiError = '';
        this.passwordError = '';
    }
    validate() {
        super.validate();

        if (this.email == '' || this.password.length < 6) {
            this.isValid = false;
        }
        if (this.email == '') {
            this.emaiError = 'email empty';
        }

        if (this.password.length < 6) {
            this.passwordError = 'min length 6';
        }

    }
}