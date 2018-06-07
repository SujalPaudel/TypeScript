class Person {
    constructor(protected firstName : string , protected lastName : string)
    {

    }


    greet()
    {
        console.log("Hey! There");
    }

    // getters and the setters:


    getFirstName()
    {
        return this.firstName;
    }

    setFirstName(firstName : string)
    {
        this.firstName = firstName;        
    }

    getLastName()
    {
        return this.lastName;
    }

    setLastName(lastName : string)
    {
        this.lastName = lastName;        
    }

}

class Programmer extends Person{
    greet()
    {
        console.log("Hello World");
        this.firstName 
    }

    greetLikeNormalPeople()
    {
        super.greet();
    }
}
var aProgrammer : Person = new Programmer();
aProgrammer.greet();
