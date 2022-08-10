import { ControllerHeranca } from "./controller_heranca.js";

export class ControllerCadastro extends ControllerHeranca{

    adicionaCadastro(){
        this.validacaoInfoLogin('index.html');
    }
}