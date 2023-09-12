const Person = require('./person');

describe('Person Class', () => {
    let person;

    beforeEach(() => {
        person = new Person();
    });

    test('ID should be accessible via the getter and be a number', () => {
        expect(typeof person.getID()).toBe('number');
    });

    test('ID should be different for different Person instances', () => {
      const person1 = new Person();
      const person2 = new Person();
      expect(person1.getID()).not.toBe(person2.getID());
  });
});