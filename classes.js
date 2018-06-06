var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var aPerson = new Person('Sujal', 'Paudel');
console.log(aPerson.getName());
