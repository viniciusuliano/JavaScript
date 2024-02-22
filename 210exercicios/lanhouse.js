let botao = document.getElementById('botao').addEventListener('click', () =>{
  var tempoUso = Number(document.getElementById('tempo').value)
  var valorUso = Number(document.getElementById('valor').value)
  let somaUso = Math.ceil(tempoUso / 15) * valorUso
  var mostra = document.getElementById('mostra')
  mostra.textContent = `${somaUso}`  
})