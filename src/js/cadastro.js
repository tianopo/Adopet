import { ControllerCadastro } from "./controller/controller_cadastro.js";
import { Input } from "./models/input.js";
import { Mensagem } from "./view/mensagem.js";

const $ = document.querySelector.bind(document);
const senha = $('#senha');
const con_senha = $('#con_senha');

const mensagem = new Mensagem($('#caixa-mensagem')); 
const controller = new ControllerCadastro();

const btn_cadastrar = $('#cadastro-conta');

btn_cadastrar.addEventListener('click', (event) => {
    event.preventDefault();

    senha.value == con_senha.value?
       controller.adicionaCadastro()
       : mensagem.update("A 'Confirmação de Senha' e a 'Senha' devem ser iguais !");
    
});

Input.inputOlho('#senha');
Input.inputOlho('#con_senha');

let db = openDatabase