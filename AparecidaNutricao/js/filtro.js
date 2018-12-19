var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function() {
    var pesquisa = this.value;

    var pacientes = document.querySelectorAll('.paciente');

    if ( pesquisa.length > 0 ) {
        pacientes.forEach(function(paciente){
            var nomeTd = paciente.querySelector('.info-nome');
            var nome = nomeTd.textContent;
            var expressao = new RegExp(pesquisa, 'i');

            if ( !expressao.test(nome) ) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        })
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove('invisivel');
        })
    }
})