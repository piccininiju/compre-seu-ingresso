
function comprar () {
    //recuperar que produto foi selecionado e quantidade
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    //recuperar as quantidades disponiveis
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    //atualizar cada quantidade conforme comprado
    if (tipo == 'pista') {
        if (quantidade > qtdPista && qtdPista !== 0) {
            alert(`A quantidade de ingressos disponíveis é apenas ${qtdPista}. Escolha outra quantidade.`);
        } else if (qtdPista !== 0) {
            qtdPista =  qtdPista - quantidade;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!')
        } else {
            alert('Os ingressos desse setor estão esgotados!');
        }
    }
    if (tipo == 'superior') {
        if (quantidade > qtdSuperior && qtdSuperior !== 0) {
            alert(`A quantidade de ingressos disponíveis é apenas ${qtdSuperior}. Escolha outra quantidade.`);
        } else if (qtdSuperior !== 0) {
            qtdSuperior =  qtdSuperior - quantidade;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            alert('Compra realizada com sucesso!')
        } else {
            alert('Os ingressos desse setor estão esgotados!');
        }
        
    }
    if (tipo == 'inferior') {
        if (quantidade > qtdInferior && qtdInferior !== 0) {
            alert(`A quantidade de ingressos disponíveis é apenas ${qtdInferior}. Escolha outra quantidade.`);
        } else if (qtdInferior !== 0) {
            qtdInferior =  qtdInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert('Compra realizada com sucesso!')
        } else {
            alert('Os ingressos desse setor estão esgotados!');
        }
        
    }
}