import { example, anotherExample, filterData, sortData, computeStats} from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

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
  });
});