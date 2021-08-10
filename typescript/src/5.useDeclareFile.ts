// import jQuery from "jquery";


// jQuery("");

type NewType = {
  name: string;
  show: (name: string) => void;
  run(age: number): string;
  [what: string]: any
}


interface NewInterface {
  name: string;
  show: (name: string) => void;
  run(age: number): string;
}

interface NewInterface {
  wahta: number;
  name: string;
}

abstract class Animal {
  show() {

  }
 abstract run(name: string): void
}