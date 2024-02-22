var r = document.getElementById('resultado')
var c = document.getElementById('botao').addEventListener('click', () =>{
  for(var i=0;i<=10;i++){
    if(i % 2 == 0){
      r.textContent += ` ${i}`
    }
  }
})