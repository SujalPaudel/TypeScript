class Person{
    firstName :  string;
    lastName : string;
 
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    getName()
    {
        return this.firstName + " " +  this.lastName;
    }
}

var aPerson = new Person('Sujal', 'Paudel'); //calling the constructor 

console.log(aPerson.getName());