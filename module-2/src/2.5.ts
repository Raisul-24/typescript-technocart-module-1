{
   //function with generic


   const createArray = (param: string) : string[] =>{
      return [param]
   }


   const createArrayWithGeneric = <T>(param: T) : T[] =>{
      return [param]
   }


   const res1 = createArray('bd')
   const res2 = createArrayWithGeneric<string>('bd')
}