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
        return -1;
        
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

        return -1;
      });
    }
    return orderedList;
  },

  computeStats: (pokeData, selectedType) => {
    if (!pokeData || !selectedType) {
      throw TypeError('no data has been provided');
    }

    let numSelectedType = 0
    for (let i = 0; i < pokeData.length; i++) {
      if (pokeData[i].type.includes(selectedType)) {
        numSelectedType++;
      }
    }
    let finalPercentage = numSelectedType / pokeData.length * 100
    return finalPercentage.toFixed(2)
  }
}



export default search;