const calcular = document.getElementById('calcular');

function imc() {
    const nome =document.getElementById('nome').value;
    const altura =document.getElementById('altura').value;
    const peso =document.getElementById('peso').value;
    const resultado =document.getElementById('resultado');

    if (nome == '' || altura == '' || peso == '') {
        resultado.textContent = 'Preencha todos os campos!!!'  
    } else if (altura <= 0 || peso <= 0) {
        resultado.textContent = 'Os valores não pode ser negativo'
    } else {
        const valorAltura = parseFloat(altura);
        const valorPeso = parseFloat(peso);

        if (!isNaN(valorAltura) && !isNaN(valorPeso) && valorAltura > 0 && valorPeso > 0) {
            
            var valorIMC = (valorPeso/(valorAltura*valorAltura)).toFixed(1);

        }

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'Com Peso ideal. PARABÉNS!!!'
        } else if (valorIMC < 30) {
            classificacao = 'Levemente acima do peso.'
        } else if (valorIMC < 35) {
            classificacao = 'Com Obesidade grau I.'
        } else if (valorIMC < 40) {
            classificacao = 'Com Obesidade grau II.'
        } else {
            classificacao = 'Com Obesidade grau III. CUIDADO!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }
    

}

calcular.addEventListener('click', imc);
