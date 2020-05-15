const search = {
  filterData: (data, conditions) => {
    if (!data) {
      throw TypeError('no data has been provided');
    }
    const filteredData = data.filter((pokemon) => {
      return pokemon[conditions.key].includes(conditions.value);
    })
    return filteredData;
  },

  sortData: (pokeData, orderDefined) => {
    if (!pokeData || !orderDefined) {
      throw TypeError('no data has been provided');
    }

    let orderedList
    if (orderDefined === "ascendente") {
      orderedList = pokeData.sort(function (a, b) {
        const nomeA = a.name.toUpperCase();
        const nomeB = b.name.toUpperCase();

        if (nomeA > nomeB) {
          return 1;
        }

        if (nomeA < nomeB) {
          return -1;
        }
        // return 0;
      });
    }

    if (orderDefined === "descendente") {
      orderedList = pokeData.sort(function (a, b) {
        const nomeA = a.name.toUpperCase();
        const nomeB = b.name.toUpperCase();

        if (nomeA < nomeB) {
          return 1;
        }

        if (nomeA > nomeB) {
          return -1;
        }
        // return 0;
      });
    }
    return orderedList;
  },
  computeStats: (pokeData, tipoEscolhido) => {
    if (!pokeData || tipoEscolhido) {
      throw TypeError('no data has been provided');
    }
    let quantidadeTipoEscolhido = 0
    for (let i = 0; i < pokeData.length; i++) {
      if (pokeData[i].type.includes(tipoEscolhido)) {
        quantidadeTipoEscolhido++
      }
    }
    let porcentagemFinal = quantidadeTipoEscolhido / pokeData.length * 100
    porcentagemFinal = porcentagemFinal.toFixed(2)
  }
}



export default search;