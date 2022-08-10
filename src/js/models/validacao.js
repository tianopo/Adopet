export class Validacao{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._email = $('#email');
        this._senha = $('#senha')
    }

    validaEmail(){
        const exp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        this._email.focus();
        return exp.test(this._email.value);
    }

    validaSenha(){
        const senha = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;
        return senha.test(this._senha.value);
    }
}