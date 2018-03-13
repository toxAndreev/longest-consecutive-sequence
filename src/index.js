module.exports = function longestConsecutiveLength(array) {

   function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
array.sort(compare);
  let count=0, count1=0;
 for(let i=0; i<array.length;i++){

  count1++;
  if(array[i+1]-array[i]===1)
  continue;

   if(array[i+1]-array[i]===0)
     {
     count1--;
      continue;
     }
   else
   {
     count=(count1>=count)?count1:count;
     count1=0;
   }
}

  return count;
}
