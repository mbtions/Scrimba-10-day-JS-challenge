# Scrimba-10-day-JS-challenge
A 10-Day-JavaScript Challenge by Scrimba based on the free course Intro to JavaScript by Dylan Israel
### Link to the Free-Course :
https://scrimba.com/g/gintrotojavascript?utm_source=newsletter&utm_medium=email&utm_campaign=jschallenge_part2_email


#### What I learnt these days -

## Update day 1 : add two numbers and more than two numbers in the parameters
Here, this challenge was completely worthy to learn as it introduced about the new concept of javascript of taking n numbers of parameters and add them
   function func_name(...array_name)  // has "...array_name" as parameter which concatenates the parameters(at function call) into an array named 'array_name'

## Update day 2 : return the longest string among the array of strings
Here, this challenge's logic was quite interesting and seems easy to write in javascript rather than other languages
first, it was find the longest string among all and then it was added to longestWords and then returned.

## Update day 3 : Alternating sums in the array i.e, even-indexed element sums and odd-indexed elements sums
Here, in this challenge the fact was to add alternating index elements and returning them as return [evenSums, oddSums]
Quite easy to do challenge.

## Update day 4 : Replace the element of the array with the other substitution element
Here, this challenge was very easy to code, just the function arrayReplace took the arguments for the element to be replaced and the element that substitutes it, it was a quite easy and interesting program to code in javascript.

## Update day 5 : Check if the string is a palindrome or not considering case insensitive
Here, this challenge was very Interesting challenge to do, as there are many ways to do such program, here, I have learnt two ways how to solve this challenge in javascript by dylan Israel sir and both are great methods.
    
    // first way to do the same problem
    const reversedCaselessStr = caselessStr.split('').reverse().join(''); 
    
    Here, it means that the caselessStr is first splitted into each individual element of array and then the array is reversed and then again joined all the elements of the array into one single str, and then both strings can be checked wheter the caselessStr === reversedCaselessStr, so that it is a palindrome or not.
    
    //second way to do the same problem
    let reversedCaselessStr = '';  
    for(let i = caselessStr.length - 1; i >= 0; i--) {
        reversedCaselessStr += caselessStr[i];
    }
    Using the standard for loop and accessing the each element of the string using i of for loop and storing them and concatenating into reversedCaselessStr and then the condition can be checked for whether caselessStr === reversedCaselessStr, so that it is a palindrome or not.

## Update day 6 : enclosing string in small brackets
Here, in this challenge, there are many ways to solve the challenge and the logic is very easy to code.

    /* First way to add brackets
       const solution1 = "("+ str +")";  simple string concatenation used here.
    */ 

    /* Second way to add brackets
       const solution2 = '($(str})';  this way of writing the strings with a variable is very prominent, using $(var) within string ' ' makes easy to assign variable values with desired constant string.
    */
   
    // third way to add brackets
    const solution3 = '('.const(str, ')'); // this is a very new way, first using 'str1'.const(str, 'str2'); here adding str1 witg constant string obtained after str+str2. Quite interesting method to use.
