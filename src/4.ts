class Key {
  private signature = Math.random();

  getSignature(): number {
    return signature;
  }
}

class Person {
  constructor (Key: number) {
    private key = Key;

    getKey(): number {
      return Key;
    }
  }
}

class House{}

class MyHouse{}

// hw code
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};