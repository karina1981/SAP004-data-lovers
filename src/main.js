//import { search } from './data.js';

import data from './data/pokemon/pokemon.js';

//pokeData = array. Banco de dados
const pokeData = data.pokemon;
const rootElement = document.getElementById("root"); //importanto div do html


//estruturando o card
const pokeCard = function (num, img, name, type, weaknesses) {
 return `<div class="pokecard">
            ${num}
            <img class="miniaturaPokemon" src="${img}" alt ="miniatura pokemon"> 
            ${name} 
            Type: ${type} 
            Weaknesses: ${weaknesses}
         </div>`
}

//usando map para gerar o card
pokeData.map(function (pokemon) {
  rootElement.innerHTML += pokeCard(pokemon.num,
                                    pokemon.img, 
                                    pokemon.name, 
                                    pokemon.type, 
                                    pokemon.weaknesses)
})


//função filtrar por tipo
function filterType() {
  const tipoEscolhido = document.getElementById("select-type").value //pegando o tipo escolhido pelo usuário. const tipoEscolhido recebe.

  const filteredData = pokeData.filter(function (pokemon) { //const filteredData é onde vai receber o resultado filtrado. pokeData (array com o data.pokemon).filter e escrevo a função que executa o filtro
    return pokemon.type.includes(tipoEscolhido) //includes compara elementos de outra array, pois type é uma array dentro da array pokeData. 
  })
  console.log(filteredData)
}



//verificando eventos
document.getElementById("select-type").addEventListener("change", filterType); //verificando evento.

