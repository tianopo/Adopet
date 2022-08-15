export class Input{
    constructor(){}

    static inputOlho(senha){         
        const $ = document.querySelector.bind(document);

        const olho = $('.input--icone');

        olho.addEventListener('click', function(event) {
            event.preventDefault();
            const input = $(senha);

            if(input.getAttribute('type') == 'password') {
                input.setAttribute('type', 'text');
            } else {
                input.setAttribute('type', 'password');
            }
        });
    }
}