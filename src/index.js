module.exports = function longestConsecutiveLength(array) {

   function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
array.sort(compare); 
  let count=-1, thiscount=0;
 for(let i=0; i<=array.length;i++){
  
     thiscount++;
       if(count>
   if(array[i+1]-array[i]===1)
     continue;
   elseif(array[i+1]-array[i]===0)
     {
     thiscount--;
      continue;
     }
   else
   {
     count=(thiscount>count)?thiscount:count;
     thiscount=0;
   }
}
  return count;
}
