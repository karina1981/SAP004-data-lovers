//import { search } from './data.js';

import data from './data/pokemon/pokemon.js';

//pokeData = array. Banco de dados
const pokeData = data.pokemon;
const rootElement = document.getElementById("root"); //importanto div do html

//estrutura do card
const pokeCard = function (num, img, name, type, weaknesses) {
 return `<div class="pokecard">
            ${num}
            <img class="miniaturaPokemon" src="${img}" alt ="miniatura pokemon"> 
            ${name} 
            Type: ${type} 
            Weaknesses: ${weaknesses}
         </div>`
}

//função que gera e coloca o conteúdo na div. Os parametros dentro de pokeCard estão assim um embaixo do outro para melhor leitura. 
const drawCard = function (pokemon) {
  rootElement.innerHTML += pokeCard(pokemon.num,
                                    pokemon.img, 
                                    pokemon.name, 
                                    pokemon.type, 
                                    pokemon.weaknesses)
}

//mapeando todos os 151 pokemons e chamando a função que gera o card. Todos os pokemons de pokeData aparecem. 
pokeData.map(drawCard) 

//-----função filtrar por tipo------
function filterType() {
  const tipoEscolhido = document.getElementById("select-type").value //pegando o tipo escolhido pelo usuário. const tipoEscolhido recebe.

  const filteredData = pokeData.filter(function (pokemon) { //const filteredData é onde vai receber o resultado filtrado. pokeData (array com o data.pokemon).filter e escrevo a função que executa o filtro
    return pokemon.type.includes(tipoEscolhido) //includes compara elementos de outra array, pois type é uma array dentro da array pokeData. 
  })
 
  rootElement.innerHTML = '' //apaga todos os 151 cards que estavam aparecendo.
  filteredData.map(drawCard) //mapea os pokemons filtrados e chama a função drawCard, que gera o card.
}

//-------função filtra pelo nome buscado na caixa------
function filterSearchBox () {
  let nameSearched = document.getElementById("search-box").value
  nameSearched = nameSearched.charAt(0).toUpperCase() + nameSearched.slice(1); //deixando a inicial maiúscula
  const filteredName = pokeData.filter(function (pokemon) {
    return pokemon.name.includes(nameSearched)
  })
  rootElement.innerHTML = ''
  filteredName.map(drawCard)
}




//verificando eventos
document.getElementById("select-type").addEventListener("change", filterType);
//document.getElementById("order-by-alphabet").addEventListener("change", OrderByAlphabet);
document.getElementById("search-box").addEventListener("input", filterSearchBox)
