const pre = document.querySelector('.pre-carregamento')

function carrega(){
    pre.style.opacity = 0;

    setTimeout(() => {
        pre.style.display = 'none';
    }, 500);
};