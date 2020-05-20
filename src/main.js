import search from './data.js';

import data from './data/pokemon/pokemon.js';

const pokeData = data.pokemon;
const rootElement = document.getElementById("root");
const percentElement = document.getElementById("percent")

const pokeCard = function (pokemon) {
  let pokemonStringFy = JSON.stringify(pokemon);
  return `<div class="pokecard" data-pokemon='${pokemonStringFy}'>
            <div class="pokeimg">
              ${pokemon.num} <br>
              <img class='miniaturaPokemon' src="${pokemon.img}" alt ='miniatura pokemon'>
            </div>
            <div class='pokelist'>
              <b>Nome</b>: ${pokemon.name} <br>
              <b>Tipo</b>: ${pokemon.type} <br>
              
            </div>
          </div>`
};

const drawCard = function (pokemon) {
  rootElement.innerHTML += pokeCard(pokemon)
};

pokeData.map(drawCard);

function filterType() {
  const selectedType = document.getElementById("select-type").value
  const filteredData = search.filterData(pokeData, { 'key': 'type', 'value': selectedType })

  rootElement.innerHTML = ''
  filteredData.map(drawCard)

  const finalPercentage = search.computeStats(pokeData, selectedType)
  percentElement.innerHTML = `${finalPercentage}% dos Pokémon são do tipo ${selectedType}`
  limparCaixaPesquisa()
  limparOrder()
}

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

function OrderByAlphabet() {
  const orderDefined = document.getElementById("order-by-alphabet").value

  const orderedList = search.sortData(pokeData, orderDefined);

  percentElement.innerHTML = ""
  rootElement.innerHTML = ""
  orderedList.map(drawCard)
  limparFiltrarTipo()
  limparCaixaPesquisa()
}

function limparOrder() {
  document.getElementById("order-by-alphabet").value = ""
}

function limparCaixaPesquisa() {
  document.getElementById("search-box").value = ""
}

function limparFiltrarTipo() {
  document.getElementById("select-type").value = ""
}

document.getElementById("select-type").addEventListener("change", filterType);
document.getElementById("order-by-alphabet").addEventListener("change", OrderByAlphabet);
document.getElementById("search-box").addEventListener("input", filterSearchBox);

let closeModal = (event) => {
  if (event.target.className == "modal_background" || event.target.className == "buttonCloseModal") {
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
        let detailPokemon = `<div class="pokeimg-modal">
            <img class='miniaturaPokemon-modal' src="${pokemon.img}" alt ='miniatura pokemon'>
          </div>
          <div class='pokelist-modal'> 
            <b>Nome</b>: ${pokemon.name} <br>
            <b>Tipo</b>: ${pokemon.type} <br>
            <b>Tamanho</b>: ${pokemon.height} <br>
            <b>Peso</b>: ${pokemon.weight} <br>`;

        if (pokemon.candy) {
          detailPokemon += `<b>Doces</b>: ${pokemon.candy} <br>`
        }

        if (pokemon.candy_cont) {
          detailPokemon += `<b>Quantidade de Doces</b>: ${pokemon.candy_count} <br>`
        }

        if (pokemon.egg) {
          detailPokemon += `<b>Choca em ovo</b>: ${pokemon.egg} <br>`
        }

        if (pokemon.spawn_chance) {
          detailPokemon += `<b>Chance de Aparecer</b>: ${pokemon.spawn_chance} <br>`
        }

        if (pokemon.avg_spawns) {
          detailPokemon += `<b>Média de Desova</b>: ${pokemon.avg_spawns} <br>`
        }

        if (pokemon.spawn_time) {
          detailPokemon += `<b>Tempo de Desova</b>: ${pokemon.spawn_time} <br>`
        }

        if (pokemon.multipliers) {
          detailPokemon += `<b>Multiplicadores</b>: ${pokemon.multipliers} <br>`
        }

        if (pokemon.weaknesses) {
          detailPokemon += `<b>Weaknesses</b>: ${pokemon.weaknesses} <br>`
        }

        detailPokemon += `</div>`;

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

const listTypes = (pokeList) => {
  let pokeAllTypes = {}
  for (let i = 0; i < pokeList.length; i++) {
    for (let j = 0; j < pokeList[i].type.length; j++) {
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