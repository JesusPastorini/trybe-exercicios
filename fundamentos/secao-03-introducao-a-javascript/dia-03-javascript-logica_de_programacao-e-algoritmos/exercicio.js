//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
let n=5;cont='';cont2='';cont3='';cont4=n-1;cont5='*';
    for(let i=0;i<n;i+=1){   
         cont=cont+'*';
    }
       for(let j=0;j<n;j+=1){           
            console.log(cont);
        }console.log('----------------------------------------');
  //      Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:       
  for(let h=0;h<n;h+=1){
    cont2=cont2+'*';
   for(let m=0;m<n;m+=1){
    }console.log(cont2)}console.log('----------------------------------------');
    //Agora inverta o lado do triângulo. Por exemplo:
    for(let k=0;k<n;k+=1){
        
       for(let r=0;r<n;r+=1){
        if (r < cont4){
            cont3+=' ';
        }else{
            cont3=cont3+cont5;
        }}
        cont4-=1;console.log(cont3);}console.log('----------------------------------------');
        //let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
