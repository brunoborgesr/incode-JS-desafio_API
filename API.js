const Url = 'https://dragonball-api.com/api/characters';
const informacoes = document.querySelector('#informacoes');
let button = document.querySelector("#btn");

function chamarPersonagem() {
  const ID = document.querySelector('#ID').value;

  fetch(`${Url}/${ID}`) 
    .then((resposta) => resposta.json())
    .then(character => {
      informacoes.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}" style="max-width: 200px; height: auto; border-radius: 10px;" />
        <p><strong>Descrição:</strong> ${character.description}</p>
        <p><strong>Raça:</strong> ${character.race}</p>
        <p><strong>Gênero:</strong> ${character.gender}</p>
        <p><strong>Ki:</strong> ${character.ki}</p>
        <p><strong>Ki Máximo:</strong> ${character.maxKi}</p>
        <p><strong>Afiliado a:</strong> ${character.affiliation}</p>`;
    })
}

button.addEventListener("click", chamarPersonagem);
