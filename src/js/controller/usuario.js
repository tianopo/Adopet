import { Click } from "../models/click.js"

export class Usuario {
    constructor(){
        this.perfil = document.querySelector('#usuario');
    }

    user(){
        Click.eventoClique(this.perfil,'perfil.html');
    }
}