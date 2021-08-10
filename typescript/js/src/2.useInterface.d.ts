interface Human {
    readonly id: number;
    name: string;
    age: number;
    sex?: string;
}
declare const logName: (person: Human) => void;
interface getString {
    (s: number): string;
}
declare let fn: getString;
interface Fly<T> {
    fly(): T;
}
interface Eat extends Fly<number> {
    eat(): void;
}
declare class MyPerson implements Eat {
    fly(): number;
    eat(): void;
}
