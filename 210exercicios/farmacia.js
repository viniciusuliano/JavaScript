let bt = document.getElementById('botao').addEventListener('click', ()=>{
  var n = Number(document.getElementById('prec').value)
  var m = document.getElementById('mostraPromo')
  var med = document.getElementById('med').value
  var descontoTotal = Math.floor(n) * 2
  m.textContent = ` ${med}: LEVE 2 POR ${descontoTotal}`
  
})