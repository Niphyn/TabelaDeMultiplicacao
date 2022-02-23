function tabelamultiplicacao()
{
   let meuArray = [];
   for(let counter = 0; counter<= 10; counter++)
   {
       meuArray[counter] = [];
       for (let i = 0; i<=10; i++)
       {
           meuArray[counter].push(counter * i);
       }
   } 
   console.table(meuArray);
} 

console.log(tabelamultiplicacao());