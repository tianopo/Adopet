import { Validacao } from "../models/validacao.js";
import { Mensagem } from "../view/mensagem.js";

export class ControllerHeranca{
    constructor(){
        this.validacao = new Validacao();
        this.mensagem = new Mensagem(document.querySelector('#caixa-mensagem'));
    }

    validacaoInfoLogin(local){
        if(!this.validacao.validaEmail()){
            this.mensagem.update('Tente um e-mail válido como: usuario@dominio.com');  
        }else{
            !this.validacao.validaSenha()?
                this.mensagem.update('A senha deve conter: 6 caracteres, 1 maíusculo, 1 caracter especial !#@$%&!#@$%&')
                : window.location.href = local;
        }
        setTimeout(() => this.mensagem.update(''),5000);
    }
}