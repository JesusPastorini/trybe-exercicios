const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));
  //  Verifique se o existe algum número que seja divisível por 3 e por 5.
  const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(verifyNumbers); // 30
//Verifique se o length de cada um dos nomes é igual a 5. 

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters()); // Irene
//Verifique se o id da música corresponde a '31031685'.
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  const findMusic = musicas.find((musica) => musica.id === '31031685');
  
  console.log(findMusic); // {id: '31031685', title: 'Partita in C moll BWV 997'}