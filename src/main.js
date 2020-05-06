//import { search } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokeData = data.pokemon; //pokeData = array
const rootElement = document.getElementById("root") //importanto div do html



function filterType(){
   const tipoEscolhido = document.getElementById("select-type").value //pegando o tipo escolhido pelo usuário. const tipoEscolhido recebe.
   
   const filteredData = pokeData.filter(function (pokemon){ //const filteredData é onde vai receber o resultado filtrado. pokeData (array com o data.pokemon).filter e escrevo a função que executa o filtro
     return pokemon.type.includes(tipoEscolhido) //includes compara elementos de outra array, pois type é uma array dentro da array pokeData. 
   })
  console.log(filteredData)
}




document.getElementById("select-type").addEventListener("change", filterType) //verificando evento.

