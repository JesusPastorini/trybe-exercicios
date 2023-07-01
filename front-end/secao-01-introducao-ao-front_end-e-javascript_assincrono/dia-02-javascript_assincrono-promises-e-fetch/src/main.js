import './style.css';

const urlApi = 'https://superheroapi.com/api/5417167581717334';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const randomId = () => Math.floor(Math.random() * 1000);

button.addEventListener('click', (event) => {
    event.preventDefault();
    const id = randomId;
    fetch(`${urlApi}\${id}`)
    .then((result) => result.json())
    .then((data) => {
        img.src = data.imagem.url;
        name.innerHTML = data.name;
    });

});
