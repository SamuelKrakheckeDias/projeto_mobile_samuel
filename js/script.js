let vetor = [];

function adicionarValor() {

  const valor = Number(document.getElementById('valor').value);



  if (!isNaN(valor)) {
    vetor.push(valor);



    const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];


    const novaLinha = tabela.insertRow();
    const celula = novaLinha.insertCell(0);
    celula.textContent = valor;

    document.getElementById('valor').value = '';
    document.getElementById('valor').focus();

  }
}
