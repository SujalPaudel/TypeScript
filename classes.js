var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var aPerson = new Person();
aPerson.firstName = 'Sujal';
console.log(aPerson);

// Technically, the statement "JavaScript has no classes" is correct.

// Although JavaScript is object-oriented language, it isn't a class-based language—
//it's a prototype-based language. 
//There are differences between these two approaches, 
//but since it is possible to use JavaScript like a class-based language,
// many people (including myself) often simply refer to the constructor functions as "classes".

