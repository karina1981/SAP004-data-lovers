// funções de exemplo

const search = {
  filterByType: (data, type) => {
    if (!data) {
      throw TypeError('No data has been provided');
    }
    const filteredData = data.filter(function (pokemon) {
      return pokemon.type.includes(type)
    })

    return filteredData
  },

  filterByName: (data, name) => {
    if (!data) {
      throw TypeError('No data has been provided');
    }
    const filteredData = data.filter(function (pokemon) {
      return pokemon.name.includes(name)
    })

    return filteredData
  },
  
  sortData: () => {
    return 'ok filtrado'
},
  computeStats: () => {
    return 'ok filtrado'
}
}

    
export default search 
 /*export const search = {
  example: () => {
    return 'example';
  },
  anotherExample: () => {
    return 'OMG';
  },
  filterData: (data) => {
    if (!data) {
      throw TypeError('Hello');
    }
    return 'ok filtrado';
  },
  sortData: () => {
    return 'ok filtrado'
  },
  computeStats: () => {
    return 'ok filtrado'
  }
} */
