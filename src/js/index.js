import { Click } from "./models/click.js";


const btn_conta = document.querySelector("#botao__conta");
const btn_cadastro = document.querySelector("#botao__cadastrar");

Click.eventoClique(btn_conta,"login.html");
Click.eventoClique(btn_cadastro,"cadastro.html");