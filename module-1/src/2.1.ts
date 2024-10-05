{
   // type assertion
   // tumi amr theke beshi bujho

   let anything: any;
   anything = "Raisul";
   //(anything as string).


   const kgToGm = (value : string | number) =>{
      if(typeof value === 'string'){
         const convertedValue = 1000 * parseFloat(value);
         return convertedValue;
      }
      else{
         const convertedValue = 1000* value;
         return convertedValue;
      }
   }


   const result1 = kgToGm(1000)
   const result2 = kgToGm('1000')
   console.log(result1, result2)
}