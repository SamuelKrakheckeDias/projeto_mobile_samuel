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

function mostrarPares() {
  console.log(' entrando na função mostrarPares')
  const tabelaPares = document.getElementById('tabelaPares').getElementsByTagName('tbody')[0];


    console.log('limpando a tabela')
    tabelaPares.innerHTML = ''; // Limpa a tabela antes de adicionar novos Valores


    vetor.forEach(valor => {
     console.log('dentro do for')

      if (valor % 2 === 0) {
        console.log('dentro do if')

         const novaLinha = tabelaPares.insertRow();
         const celula = novaLinha.insertCell(0);
         celula.textContent = valor;

      }
   });

}
