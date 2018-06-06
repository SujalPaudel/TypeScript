var a: number;
var b: boolean;
var c: string;

a = 10;
b = true;
c = 'Raju';

// tuples in typescript

var myArr : [number, boolean];

myArr  = [1, false];

function s(a : number , b : number, c : number = 0)
{
    return a + b + c;
}

var sum = s(2, 2, 5);
console.log(sum);

s(3, 3);

