function allLongestStrings(array){
    const longestWords = []; 
    let longestLength = 0;
  
    for(let word of array){ 
        longestLength = word.length > longestLength ? word.length : longestLength;
    }
    
    for(let word of array){ 
         if(longestLength longest === words.length){
             longestWords.push(word);
         }

return longestWords;
}
