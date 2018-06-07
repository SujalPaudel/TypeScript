class Person{
    firstName :  string;
    lastName : string;
    
    greet()
    {
        console.log('Hey There');
    }
}

class Programmer extends Person{
    greet()
    {
        console.log('Hello World');
    }
    greet_like_normalpeople(){
        super.greet();
    }

}

var aProgrammer : Person = new Programmer();
aProgrammer.greet();
