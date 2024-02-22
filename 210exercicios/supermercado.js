const botao = document.getElementById('botao').addEventListener('click', ()=>{
    let n = Number(document.getElementById('numero').value)
    let produto = document.getElementById('produto').value
    let percentoDesc = (n * 0.5)
    let somaTotal = (n * 2) + percentoDesc
    let mostra = document.getElementById('mostraPromo')
    mostra.innerHTML = `${produto} ${somaTotal}`
  })