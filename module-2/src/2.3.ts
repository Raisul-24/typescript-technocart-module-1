{
   // generic type -> dynamically generalize


   // type GenericArray = Array<boolean>
   type GenericArray<params> = Array<params>

   // const roll : number[] = [3,4,5];
   //  const roll : Array<number> = [3,4,5];
    const roll : GenericArray<number> = [3,4,5];

   // const mentors: string[] = ['a', 'b', 'c'];
   const mentors: GenericArray<string> = ['a', 'b', 'c'];


   // const boolArray: boolean[] =[true, false, true];
   const boolArray: GenericArray<boolean> =[true, false, true];


   //tuple


   type GenericTuple<a,b> = [a,b] ;
   const userWithID :GenericTuple<number, {name: string, email: string}> = [1234, {name: 'Raisul', email: "a@a.com"}]
}