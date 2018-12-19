var botaoImportar = document.querySelector('#buscar-pacientes');
botaoImportar.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function(){
        var mensagemErro = document.querySelector('#erro-buscar');

        if ( xhr.status == 200 ) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach( function(cliente){
                adicionaPaciente(cliente);
            })

            mensagemErro.classList.add('invisivel');
        } else {
            mensagemErro.classList.remove('invisivel');
        }
    })
    xhr.send();
})