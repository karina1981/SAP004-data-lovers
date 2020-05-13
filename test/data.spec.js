import search from '../src/data.js';
import pokemons from '../src/data/pokemon/pokemon.js';

describe('filterData', () => {

  it('is a function', () => {
    expect(typeof search.filterData).toBe('function');
  });

  it('arguments types',() => {
    expect(() => search.filterData()).toThrow(TypeError);
    expect(() => search.filterData(0)).toThrow(TypeError);
    expect(() => search.filterData(null,[])).toThrow(TypeError);
    expect(() => search.filterData(0,0)).toThrow(TypeError)
  });

  it('apply filtered name', () => {
    let filteredData = search.filterData(pokemons.pokemon, { 'key': 'type', 'value': 'Poison'});
    let filtered = pokemons.pokemon.length > filteredData.length && filteredData.length > 0 ? true : false;
    expect(filtered).toBe(true);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof search.sortData).toBe('function');
  });

  it('arguments types',() =>{
    expect(() => search.sortData()).toThrow(TypeError);
    expect(() => search.sortData(0)).toThrow(TypeError);
    expect(() => search.sortData(null,[])).toThrow(TypeError);
    expect(() => search.sortData(0,0)).toThrow(TypeError)
  });

  it('apply sorted name ascendente', () => {
    let sortData = search.sortData(pokemons.pokemon, "ascendente");
    expect(sortData[0].name).toBe('Abra');
  });

  it('apply sorted name descendente', () => {
    let sortData = search.sortData(pokemons.pokemon, "descendente");
    expect(sortData[0].name).toBe('Zubat');
  });
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof search.computeStats).toBe('function');
  });

  it('is return string', () => {
    expect(search.computeStats()).toBe('ok filtrado');

  })
});