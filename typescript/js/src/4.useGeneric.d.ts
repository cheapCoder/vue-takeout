interface TLength {
    length: number;
}
interface IbaseCRUD<T extends TLength> {
    data: T[];
    add: (t: T) => void;
    getById: (id: number) => T;
}
declare class User {
    id?: number;
    name: string;
    age: number;
    length: number;
    constructor(name: any, age: any);
}
declare class UserCRUD implements IbaseCRUD<User> {
    data: User[];
    add(user: User): void;
    getById(id: number): User;
}
declare const userCRUD: UserCRUD;
