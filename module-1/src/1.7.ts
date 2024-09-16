{
   // spread operator

   const even : number[] = [2,4,6]
   const odd : number[] = [1,3,5]

   let allnumbers : number[] = []
   allnumbers.push((even.push(...odd)));

   console.log(allnumbers)
}