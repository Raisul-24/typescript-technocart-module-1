// basic data type

// string
let firstname1 = "Hridoy";   /// implesice data type
console.log(firstname1)


let firstname2: string = "Md. Raisul Islam"   //explesice data type
console.log(firstname2)

// number
let age: number = 12;

// boolean
let isAdmin : boolean = true;

// undefined
let x : undefined = undefined;

// null 
let y :null = null;

let r: number;
// r= "asd"
r= 123
// r = true

console.log(r);


// array

let friends: string[] =['amit', 'anik']
console.log(friends)
friends.push('rakib');
console.log(friends)



// tuple --> array -->> order maintain -->>types of values
let ageName : [number, string, boolean] = [23, 'raisul', true]
console.log(ageName)
ageName[0] = 67
console.log(ageName)