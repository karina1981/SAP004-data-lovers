<<<<<<< HEAD
import { example, anotherExample, filterData, sortData, computeStats} from '../src/data.js';
=======
import { data } from '../src/data.js';
>>>>>>> d9d71affd5d8dc72ed6497997acfcd90f1be2500


describe('example', () => {
  it('is a function', () => {
    expect(typeof data.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(data.example()).toBe('example');
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof data.anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(data.anotherExample()).toBe('OMG');
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof data.filterData).toBe('function');
  });
  it('arguments types',() =>{
    expect( function(){ return data.filterData(); } ).toThrow(TypeError);
    expect(() => data.filterData(0)).toThrow(TypeError);
    expect(() => data.filterData(null,[])).toThrow(TypeError);
    expect(() => data.filterData(0,0)).toThrow(TypeError)
  })
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof data.sortData).toBe('function');
  });
});

<<<<<<< HEAD
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('arguments types',() =>{
    expect(() => data.filterData()).toThrow(TypeError);
    expect(() => data.filterData(0)).toThrow(TypeError);
    expect(() => data.filterData(null,[])).toThrow(TypeError);
    expect(() => data.filterData(0,0)).toThrow(TypeError)
   })
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
=======
describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof data.computeStats).toBe('function');
>>>>>>> d9d71affd5d8dc72ed6497997acfcd90f1be2500
  });
});