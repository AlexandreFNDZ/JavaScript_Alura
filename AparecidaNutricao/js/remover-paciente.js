var tabela = document.querySelector('tbody');

tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target; // TD da tabela (quem está sendo clicado)
    var paiDoAlvo = alvoEvento.parentNode; // TR da tabela (Pai do TD que está sendo clicado)

    paiDoAlvo.classList.add('fadeOut');

    setTimeout(function(){ // Espera 0,5s para executar
        paiDoAlvo.remove();
    },500)
})
