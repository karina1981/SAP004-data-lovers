// funções de exemplo

export const data = {
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
}

export const filterData = () => {
  return 'ok filtrado';
};

export const sortData = () => {
  return 'ok filtrado'
};

export const computeStats = () => {
  return 'ok filtrado'
}