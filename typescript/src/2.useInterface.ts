interface Human {
  readonly id: number,
  name: string,
  age: number,
  sex?: string,
  // (food: string): void,
}


const logName = (person: Human) => {
  console.log(person.id);
  console.log(person);
}

logName({
  id: 123,
  name: "heng",
  age: 134,

})

interface getString {
  (s: number): string;
}

let fn: getString = (s: number) => { return s.toString(); }

interface Fly<T> {
  fly(): T;
}

interface Eat extends Fly<number> {
  eat(): void;
}

class MyPerson implements Eat {
  fly() {
    return 1;
  }
  eat() {

  }
}
