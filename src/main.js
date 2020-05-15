import search from './data.js';

import data from './data/pokemon/pokemon.js';

//pokeData = array. Banco de dados
const pokeData = data.pokemon;
const rootElement = document.getElementById("root"); //importanto div do html
const percentElement = document.getElementById("percent")

//escrevendo o html. estrutura do card
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

//função que coloca o conteúdo do html na div. 
const drawCard = function (pokemon) {
  rootElement.innerHTML += pokeCard(pokemon)
};

//map todos os 151 pokemons e chamando a função que gera o card. Todos os pokemons de pokeData aparecem. 
pokeData.map(drawCard);


//-----função filtrar por tipo-----
function filterType() {
  const tipoEscolhido = document.getElementById("select-type").value

  const filteredData = search.filterData(pokeData, { 'key': 'type', 'value': tipoEscolhido })

  rootElement.innerHTML = '' //apaga todos os 151 cards que estavam aparecendo.
  filteredData.map(drawCard) //mapea os pokemons filtrados e chama a função drawCard, que gera o card.

  //----calculando porcentagem----
  const porcentagemFinal = search.computeStats(pokeData, tipoEscolhido)

  percentElement.innerHTML = `${porcentagemFinal}% dos Pokemons são do tipo ${tipoEscolhido}`
  
  limparCaixaPesquisa()
  limparOrder()

}

//-------função filtra pelo nome buscado na caixa------
function filterSearchBox() {
  let nameSearched = document.getElementById("search-box").value
  nameSearched = nameSearched.charAt(0).toUpperCase() + nameSearched.slice(1).toLowerCase(); //deixando a inicial maiúscula e o restante minúscula.


  const filteredData = search.filterData(pokeData, { 'key': 'name', 'value': nameSearched })
  percentElement.innerHTML = ""
  rootElement.innerHTML = ""

  filteredData.map(drawCard)
  limparFiltrarTipo()
  limparOrder()
}

//-------função ordenar az za------------

function OrderByAlphabet() {
  const orderDefined = document.getElementById("order-by-alphabet").value

  const orderedList = search.sortData(pokeData, orderDefined);

  percentElement.innerHTML = ""
  rootElement.innerHTML = ""
  orderedList.map(drawCard)
  limparFiltrarTipo()
  limparCaixaPesquisa()
}

//------funções limpar------
function limparOrder() {
  document.getElementById("order-by-alphabet").value = ""
}

function limparCaixaPesquisa() {
  document.getElementById("search-box").value = ""
}

function limparFiltrarTipo() {
  document.getElementById("select-type").value = ""
}

//verificando eventos
document.getElementById("select-type").addEventListener("change", filterType);
document.getElementById("order-by-alphabet").addEventListener("change", OrderByAlphabet);
document.getElementById("search-box").addEventListener("input", filterSearchBox)