class Key {
  constructor(private signature: number) {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(
    protected door: boolean,
    protected key: Key,
    private tenants: Person[]
  ) {
    this.door = door;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
  OpenDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      console.log("wrong key");
    }
  }
}

// hw code
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
