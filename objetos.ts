// Atividades sobre typescript - Softex Data 29/07/2024
const fullname: string = "Capitain Hook";
const fullAge: number = 25;
const isDeveloper: boolean = true;
console.log(fullname);
console.log(fullAge);
console.log(isDeveloper);

// Função para somar
function somar (num1: number, num2:number):number{
return  num1 + num2
}
console.log(somar(1,8));


// Função para contar caracter 
function contar (palavra: string):number{
  return palavra.length
}
console.log(contar("aula"))

//Função Para verificar se o número é positivo, negativo ou nulo

function verificadorDeSinal (num: number):string{
  if (num<0){
    return `  ${num} é negativo`
  }

  else if(num ==0 ) {
    return ` ${num} é nulo`
    
  } else {
    
  
    return ` ${num} é positivo`
  }
}
console.log(verificadorDeSinal(-15));
