import { ControllerHeranca } from "./controller_heranca.js";

export class Controller extends ControllerHeranca{

    adicionaLogin(){
        this.validacaoInfoLogin('home.html');
    }
}

