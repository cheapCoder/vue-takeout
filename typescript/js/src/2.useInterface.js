var logName = function (person) {
    console.log(person.id);
    console.log(person);
};
logName({
    id: 123,
    name: "heng",
    age: 134,
});
var fn = function (s) { return s.toString(); };
var MyPerson = /** @class */ (function () {
    function MyPerson() {
    }
    MyPerson.prototype.fly = function () {
        return 1;
    };
    MyPerson.prototype.eat = function () {
    };
    return MyPerson;
}());
