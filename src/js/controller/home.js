import { Click } from "../models/click.js";

export class Cabecalho{
    constructor(){
        const $ = document.querySelector.bind(document);

        this.home = $('#home');
        this.mensagem = $('#mensagem');
    }

    cliqueCabecalho(){
        Click.eventoClique(this.home,'index.html');
        Click.eventoClique(this.mensagem,'mensagem.html');
    }
}

