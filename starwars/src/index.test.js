const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      new_arrays = starWars.all
      flag = 1
      new_arrays.forEach(element => {
        if (typeof element!='string'){
          flag =0
        }
      });
      expect(flag).toEqual(1)
    });

    test('should contain `Luke Skywalker`', () => {
      new_arrays = starWars.all
      flag = 0
      new_arrays.forEach(element => {
        if ( element=='Luke Skywalker'){
          flag =1
        }
      });
      expect(flag).toEqual(1)
    });

    test('should not contain `Ben Quadinaros`', () => {
      new_arrays = starWars.all
      flag = 0
      new_arrays.forEach(element => {
        if ( element=='Ben Quadinaros'){
          flag =1
        }
      });
      expect(flag).toEqual(0)
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      randomName = starWars.random(1)
      new_arrays = starWars.all
      flag = 0
      new_arrays.forEach(element => {
        if(element==randomName){
          flag=1
        }
      });
      expect(flag).toEqual(1)
    });

    test('should return an array of random items if passed a number', () => {
      results = starWars.random(5)
      expect(results instanceof Array).toEqual(true)
    });
  });
});
