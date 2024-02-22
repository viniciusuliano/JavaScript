function multiplicar(){
  let i = document.getElementById('multiplicador').value
  let resultado = document.getElementById('tabuada')
  for(var m=0; m <= 10; m++){
    let item = document.createElement('option')
    item.text = `${i} X ${m} = ${i * m} `
    resultado.appendChild(item)
  }
}