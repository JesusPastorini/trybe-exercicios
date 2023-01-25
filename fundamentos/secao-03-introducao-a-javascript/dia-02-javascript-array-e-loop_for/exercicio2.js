let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array)*/
  let multiplicacao=[];
  for(let i=0;i<array.length;i+=1){
   if(array[i+1]!==undefined){
    multiplicacao.push(array[i]*array[i+1]);
}else{
    multiplicacao.push(array[i]*2);
}
console.log(multiplicacao[i])
}