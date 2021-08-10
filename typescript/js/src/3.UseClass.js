var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = 'li';
        this.age = 22;
        this.name = name;
        this.age = age;
    }
    Person.show = function (name) {
        console.log(name);
    };
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            // this.name = this.fullName;
            return this.name + "heng";
        },
        set: function (val) {
            this.name = val.split("_")[1];
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("li", 123);
console.log(person.fullName);
person.fullName = "what_next";
console.log(person.fullName);
Person.show("heng");
Person.show(123);
var fn2 = function (s, n) {
};
var Person2 = /** @class */ (function () {
    // readonly name: string = 'li';
    // age: number = 22;
    function Person2(name, age) {
        if (name === void 0) { name = "li"; }
        if (age === void 0) { age = 22; }
        this.name = name;
        this.age = age;
        // this.name = n;
        // // n = "liheng ";
        // this.age = age;
    }
    return Person2;
}());
var person2 = new Person2("liheng", 123);
console.log(person2);
