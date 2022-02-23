function tabelamultiplicacao(num)
{
   let meuArray = [];
   for(let counter = 0; counter<= num; counter++)
   {
       meuArray[counter] = [];
       for (let i = 0; i<=num; i++)
       {
           meuArray[counter].push(counter * i);
       }
   } 
   console.table(meuArray);
} 

console.log(tabelamultiplicacao(16));