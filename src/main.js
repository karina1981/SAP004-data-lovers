import search from './data.js';

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
  const tipoEscolhido = document.getElementById("select-type").value

  const filteredData = search.filterByType(pokeData, tipoEscolhido) 
   
  rootElement.innerHTML = '' //apaga todos os 151 cards que estavam aparecendo.
  filteredData.map(drawCard) //mapea os pokemons filtrados e chama a função drawCard, que gera o card.
}

//-------função filtra pelo nome buscado na caixa------
function filterSearchBox () {
  let nameSearched = document.getElementById("search-box").value
  nameSearched = nameSearched.charAt(0).toUpperCase() + nameSearched.slice(1).toLowerCase(); //deixando a inicial maiúscula e o restante minúscula.
  
  const filteredData = search.filterByName(pokeData, nameSearched) 
    
  rootElement.innerHTML = ''
  filteredData.map(drawCard)
}

//-------função ordenar az za------------

function OrderByAlphabet () {
  const orderDefined = document.getElementById("order-by-alphabet").value

  let orderedList
  if(orderDefined === "ascendente") {
    orderedList = pokeData.sort(function (a, b) {
      const nomeA = a.name.toUpperCase()
      const nomeB = a.name.toUpperCase()
      
      if(nomeA > nomeB ) {
        return 1
      }
      if(nomeA < nomeB) {
        return -1
      }
      return 0
    })
  }

  if (orderDefined === "descendente") {
    orderedList = pokeData.sort(function (a, b) {
      const nomeA = a.name.toUpperCase()
      const nomeB = b.name.toUpperCase()
      
      if(nomeA < nomeB) {
        return 1
      }
      if(nomeA > nomeB) {
        return -1
      }
      return 0
    })
  }  
   
  rootElement.innerHTML = "" 
  orderedList.map(drawCard) 
}




//verificando eventos
document.getElementById("select-type").addEventListener("change", filterType);
document.getElementById("order-by-alphabet").addEventListener("change", OrderByAlphabet);
document.getElementById("search-box").addEventListener("input", filterSearchBox);
