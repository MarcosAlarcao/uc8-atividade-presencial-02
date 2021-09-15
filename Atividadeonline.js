var dataEvento=' 08/09/2021'
var dataHoje= ' 14/09/2121'
var idadePessoa= 16
var listaParticipantes=['participante1,'participante2']
var listaPalestrantes=['Palestrante1','Palestrante2']
if (dataEvento<dataHoje){
  console.log('o cadastro não será permitido por data inválida')
}

if (idadePessoa<18){
  console.log('o cadastro não é permitido pela idade!')
}
for (let i=0;i<listaPalestrantes.length;i++){
  console.log(listaPalestrantes[i])
}
for (let i=0;i<listaParticipantes.length;i++){
  console.log(listaParticipantes[i])
}
if (listaParticipantes>100){
  console.log('o cadastro não será permitido por ter excedido o limite')
}

