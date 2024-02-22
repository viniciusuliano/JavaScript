var c = document.getElementById('botao')
var r = document.getElementById('resultado')
c.addEventListener('click', function(){
  for(var i=0;i<=10;i++){
    if(i % 2 == 0){
      r.innerHTML += `<mark> ${i} </mark>`
    }else {
      r.innerHTML += ` ${i}`
    }
  }
})