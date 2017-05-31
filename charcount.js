var charCount = {
};


function count(string){

  // turn string into array of characters
  var newString = string.split('').filter((l) => l !== ' ')

  return newString.reduce(function(agg, letter){
    if(agg[letter] === undefined) agg[letter] = 1;
    else agg[letter]++;
    return agg;
}, charCount);


}
count("lighthouse is in the house");

for( i in charCount){
  console.log(i, charCount[i]);
}