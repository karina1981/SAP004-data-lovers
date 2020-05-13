import search from './data.js';

import data from './data/pokemon/pokemon.js';

//pokeData = array. Banco de dados
const pokeData = data.pokemon;
const rootElement = document.getElementById("root"); //importanto div do html

//estrutura do card
const pokeCard = function (pokemon) {
  return `<div class="pokecard">
            <div class="pokeimg">
              <img class='miniaturaPokemon' src="${pokemon.img}" alt ='miniatura pokemon'>
            </div>
            <div class='pokelist'> 
              Nome: ${pokemon.name} <br>
              Tipo: ${pokemon.type} <br>
              Weaknesses: ${pokemon.weaknesses}
            </div>
          </div>`
};

//função que gera e coloca o conteúdo na div. Os parametros dentro de pokeCard estão assim um embaixo do outro para melhor leitura. 
const drawCard = function (pokemon) {
  rootElement.innerHTML += pokeCard(pokemon)
};

//mapeando todos os 151 pokemons e chamando a função que gera o card. Todos os pokemons de pokeData aparecem. 
pokeData.map(drawCard);

//-----função filtrar por tipo------
function filterType() {
  const tipoEscolhido = document.getElementById("select-type").value

  const filteredData = search.filterData(pokeData, { 'key': 'type', 'value': tipoEscolhido}) 

  rootElement.innerHTML = '' //apaga todos os 151 cards que estavam aparecendo.
  filteredData.map(drawCard) //mapea os pokemons filtrados e chama a função drawCard, que gera o card.
}

//-------função filtra pelo nome buscado na caixa------
function filterSearchBox () {
  let nameSearched = document.getElementById("search-box").value
  nameSearched = nameSearched.charAt(0).toUpperCase() + nameSearched.slice(1).toLowerCase(); //deixando a inicial maiúscula e o restante minúscula.

  const filteredData = search.filterData(pokeData, { 'key': 'name', 'value': nameSearched}) 

  rootElement.innerHTML = ''
  filteredData.map(drawCard)
}

//-------função ordenar az za------------
function OrderByAlphabet () {
  const orderDefined = document.getElementById("order-by-alphabet").value

  const orderedList = search.sortData(pokeData, orderDefined);

  rootElement.innerHTML = "" 
  orderedList.map(drawCard) 
}

//verificando eventos
document.getElementById("select-type").addEventListener("change", filterType);
document.getElementById("order-by-alphabet").addEventListener("change", OrderByAlphabet);
document.getElementById("search-box").addEventListener("input", filterSearchBox);
