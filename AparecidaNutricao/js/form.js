var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function() {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    
    var paciente = extrairForm(form);

    var erros = validaPaciente(paciente);

    if ( erros.length > 0 ) {
        exibeErros(erros);
        return;
    }

    adicionaPaciente(paciente);

    form.reset();
    document.querySelector('#erro').innerHTML = '';
});

function adicionaPaciente(paciente) {
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function extrairForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td'); 
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if( !validaPeso(paciente.peso) ) {
        erros.push('Peso Inválido');
    }

    if( !validaAltura(paciente.altura) ) {
        erros.push('Altura Inválida');
    }

    if ( paciente.nome.length == 0 ) {
        erros.push('Campo Nome precisa ser preenchido');
    }

    if ( paciente.gordura.length == 0 ) {
        erros.push('Campo Gordura precisa ser preenchido');
    }

    if ( paciente.peso.length == 0 ) {
        erros.push('Campo Peso precisa ser preenchido');
    }

    if ( paciente.altura.length == 0 ) {
        erros.push('Campo Altura precisa ser preenchido');
    }

    return erros;
}

function exibeErros(erros) {
    var erroUl = document.querySelector('#erro');

    erroUl.innerHTML = '';

    erros.forEach(function(erro){ // Mesma coisa do for abaixo
        var erroLi = document.createElement('li');
        erroLi.textContent = erro;

        erroUl.appendChild(erroLi);
    }) 

    // for ( var i = 0; i < erros.length; i++ ) {
    //     var erroLi = document.createElement('li');
    //     erroLi.textContent = erros[i];

    //     erroUl.appendChild(erroLi);
    // }
}