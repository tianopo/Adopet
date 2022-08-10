export class Click{
    constructor(){}

    static eventoClique(alvo,local){
        alvo.addEventListener("click", function(event){
            event.preventDefault();
        
            window.location.href = local;
        });
    }

    static cliqueHome(caixa,local){
    
        for(let i = 0; i < caixa.length; i++){
            caixa[i].addEventListener('click', function(event){
                event.preventDefault();
    
                window.location.href = local;
            })
        }    
    }
}