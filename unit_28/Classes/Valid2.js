/*
*  class Valid2 наследуется от class Valid
*
*/

class Valid2 extends Valid {
    constructor(email, password, isValid, emaiError, passwordError) {
        super(email, password, isValid);
        this.emaiError = emaiError;
        this.passwordError = passwordError;
    }
    validate() {
        if (this.password.length >= 6) {
            this.isValid = true;
        }
        if (this.password.length < 6) {
            this.isValid = false;
        }
        if (this.email == '') {
            this.isValid = false;
        }
        if (this.email == '') {
            this.emaiError = 'email empty';
        }
        if (this.password == '') {
            this.passwordError = 'min length 6';
        }
    }
}