var totalClientes = document.querySelectorAll('.paciente');

for ( var i = 0 ; i < totalClientes.length ; i++) {

    paciente = totalClientes[i];
    
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoOk = validaPeso(peso);
    var alturaOk = validaAltura(altura);

    if ( !pesoOk ) {
        tdImc.textContent = 'Peso Inválido';
    }

    if ( !alturaOk ) {
        tdImc.textContent = 'Altura Inválida';
    }

    if ( pesoOk && alturaOk ) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        if ( !pesoOk && !alturaOk ) {
            tdImc.textContent = 'Peso e Altura Iválidos';
        }
        paciente.classList.add('paciente-invalido');
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if ( (peso >= 0) && (peso < 1000) ) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if ( (altura >= 0) && (altura < 3) ) {
        return true;
    } else {
        return false;
    }
}