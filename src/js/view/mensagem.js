export class Mensagem{
    constructor(elemento){
        this.elemento = elemento;
    }

    template(model){
        return model? `<li class="mensagem-email">${model}</li>` : `<li></li>`;
    }

    update(model){
        this.elemento.innerHTML = this.template(model);
    }
}