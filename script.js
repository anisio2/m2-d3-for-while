//For / While - loop - laços de repetição
//++ incremento pra somar e acrescentar a condição
// -- decremento

//1 - Criar um loop que conte de 1 até 10 usando FOR
/*for(entrada; condicao; fim){
    tarefa a ser executada(entrada)
}*/
for(let contagem = 1; contagem <= 10; contagem++ ){
    console.log(contagem)
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE
let x = 10;
while (x >= 1){
  console.log(x);
  x--
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100
for (let x = 1; x <= 100; x += 2){
  console.log(x)
}

//4- Criar um loop que conte todos os números pares de 0 a 100
for (let x = 0; x <= 100; x += 2){
  console.log(x)
}