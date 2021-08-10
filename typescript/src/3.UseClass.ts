class Person<T, E> {
  name: string = 'li';
  // age: number = 22;
  public static show(name: string): string;   //两个重载
  public static show(name: number): number;
  public static show(name): any { //这里不算重载
    console.log(name);

  }

  get fullName(): string {
    // this.name = this.fullName;
    return this.name + "heng";
  }

  set fullName(val: string) {
    this.name = val.split("_")[1];
  }
  public constructor(name: string,  age: number) {
    this.name = name;
    this.age = age;
  }
}

const person: Person<object, number> = new Person("li", 123);
console.log(person.fullName);
person.fullName = "what_next"
console.log(person.fullName);
Person.show("heng");
Person.show(123);





const fn2: (s: string, n: number) => void = (s: string, n: number): void => {

}


class Person2 {
  // readonly name: string = 'li';
  // age: number = 22;
  public constructor(public readonly name: string = "li", private age: number = 22) {
    // this.name = n;
    // // n = "liheng ";
    // this.age = age;
  }
}

const person2: Person2 = new Person2("liheng", 123);
console.log(person2);
