import { Controller } from "./controller/controller.js";
import { Cabecalho } from "./controller/home.js";
import { Input } from "./models/input.js";

const $ = document.querySelector.bind(document);
const login = $('#botao-login');
const controller = new Controller();

login.addEventListener('click',event => {
    event.preventDefault();
    
    controller.adicionaLogin()

});

Input.inputOlho('#senha');