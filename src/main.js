import { search } from './data.js';

import data from './data/pokemon/pokemon.js';


/*---------------Obs: são só testes dos botoes
function searchPokemon(){
  let pokemonBuscado =document.getElementById("search-box").value
  console.log(pokemonBuscado)
}


function filterType(){
   let escolhaTipo = document.getElementById("select-type").value
   console.log(escolhaTipo)
}

function orderByAlphabet(){
    let escolhaOrdem = document.getElementById("order-by-alphabet").value
    console.log(escolhaOrdem)
}
----------*/


/* BOTÃO BUSCAR*/ 
document.getElementById("search-box").addEventListener("input", searchPokemon);
/* FILTRAR TIPO*/ 
document.getElementById("select-type").addEventListener("change", filterType);
/* ORDENAR */ 
document.getElementById("order-by-alphabet").addEventListener("change", orderByAlphabet);










//console.log(example, data);