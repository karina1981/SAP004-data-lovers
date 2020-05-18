import search from './data.js';

import data from './data/pokemon/pokemon.js';

//pokeData = array. Banco de dados
const pokeData = data.pokemon;
const rootElement = document.getElementById("root"); //importanto div do html
const percentElement = document.getElementById("percent")

//escrevendo o html. estrutura do card
const pokeCard = function (pokemon) {
  let pokemonStringFy = JSON.stringify(pokemon);
  return `<div class="pokecard" data-pokemon='${pokemonStringFy}'>
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
  const selectedType = document.getElementById("select-type").value

  const filteredData = search.filterData(pokeData, { 'key': 'type', 'value': selectedType})

  rootElement.innerHTML = '' //apaga todos os 151 cards que estavam aparecendo.
  filteredData.map(drawCard) //mapea os pokemons filtrados e chama a função drawCard, que gera o card.

  //----calculando porcentagem----
  const finalPercentage = search.computeStats(pokeData, selectedType)

  percentElement.innerHTML = `${finalPercentage}% dos Pokémon são do tipo ${selectedType}`
  
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
document.getElementById("search-box").addEventListener("input", filterSearchBox);

let closeModal = (event) => {
  console.log(event.target.className)
  if (event.target.className == "modal_background" || event.target.className == "buttonCloseModal"){
    document.querySelector(".modal_background").style.display = "none"
  }
}
document.querySelector(".modal_background").addEventListener("click", closeModal);

document.querySelector(".buttonCloseModal").addEventListener("click", closeModal);

document.getElementById("root").addEventListener("click", (event) => { 

  if (event.target) {
    let target = event.target;

    let setPokecardDetails = (obj) => {
      if (obj.className == 'pokecard') {

        let pokemon = JSON.parse(obj.getAttribute('data-pokemon'));
        
        console.log('setPokecardDetails', pokemon);

        let detailPokemon = `<div class="pokeimg-modal">
            <img class='miniaturaPokemon-modal' src="${pokemon.img}" alt ='miniatura pokemon'>
          </div>
          <div class='pokelist-modal'> 
            Nome: ${pokemon.name} <br>
            Tipo: ${pokemon.type} <br>
            Tamanho: ${pokemon.height} <br>
            Peso: ${pokemon.weight} <br>
            Doces: ${pokemon.candy} <br>
            Quantidade de Doces: ${pokemon.candy_count} <br>
            Choca em ovo: ${pokemon.egg} <br>
            Chance de Aparecer: ${pokemon.spawn_chance} <br>
            Média de Desova: ${pokemon.avg_spawns} <br>
            Tempo de Desova: ${pokemon.spawn_time} <br>
            Multiplicadores: ${pokemon.multipliers} <br>
            Weaknesses: ${pokemon.weaknesses} <br>
          </div>`;
console.log("detailPokemon")
        let modal_background = document.querySelector('.modal_background');
        modal_background.style.display = 
        'flex'

        let modalContent = document.querySelector('.modal_pokemon_content');
        modalContent.innerHTML = detailPokemon;

      } else {
        if (obj.parentElement) {
          return setPokecardDetails(obj.parentElement);
        }
      }
    }

    setPokecardDetails(target);

  }
});

//função para deixar o select dinamico

// criar uma função, que tem um parametro de entrada que é uma lista de pokemon
// criar uma variável que vai guardar todos tipos de pokemon que existir na lista de pokemons 
// percorrer a lista de pokemons e add na variavel tipos de pokemon os tipos que encontrar nesta lista
// retornar a variável lista de pokemons
// criar uma variável que armazena o html select
// pecorrer a lista de tipos de pokemon e add option aos select

const listTypes = (pokeList) => {
  let pokeAllTypes = {}
  for (let i = 0; i < pokeList.length; i++){
    for (let j = 0; j < pokeList[i].type.length; j++){
      let type = pokeList[i].type[j];
      pokeAllTypes[type] = type;
    }
  }
  return pokeAllTypes;
}

let selectType = document.querySelector("#select-type")
let listType = Object.keys(listTypes(pokeData));
for (let k = 0; k < listType.length; k++) {
  let opcao = new Option(listType[k].toUpperCase(), listType[k])
  selectType.add(opcao)
}