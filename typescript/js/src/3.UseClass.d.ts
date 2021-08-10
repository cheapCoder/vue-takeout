declare class Person<T, E> {
    name: string;
    age: number;
    static show(name: string): string;
    static show(name: number): number;
    get fullName(): string;
    set fullName(val: string);
    constructor(name: string, age: number);
}
declare const person: Person<object, number>;
declare const fn2: (s: string, n: number) => void;
declare class Person2 {
    readonly name: string;
    private age;
    constructor(name?: string, age?: number);
}
declare const person2: Person2;
