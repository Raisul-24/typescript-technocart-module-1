// reference type

const user :{
   readonly placeofbirth : "Bangladesh",  //literal types  ||  not changeable
   firstname : string,
   middlename ?: string, //optional
   lastname : string ,
   ismarried: boolean,
} = {
   firstname : "Raisul",
   lastname : "Hridoy",
   placeofbirth : "Bangladesh",
   ismarried : false,
}
console.log(user)