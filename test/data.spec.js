import { data } from '../src/data.js';


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

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof data.computeStats).toBe('function');
  });
});