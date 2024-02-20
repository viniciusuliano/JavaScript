function multiplicar(){
  let inicio = document.getElementById('multiplicador')
  let resultado = document.getElementById('tabuada')
  
  let i = Number(inicio.value)
  for(var m=0; m <= 10; m++){
    let item = document.createElement('option')
    item.text = `${i} X ${m} = ${i * m} `
    resultado.appendChild(item)
  }
}