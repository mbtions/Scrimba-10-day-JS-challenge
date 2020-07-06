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

## Update day 7 : calculating factorial of a number
Here, in this challenge, number whose factorial is to be calculated is given in arguments of the function and after calculated factorial and it is then returned.
It was a very easy challenge to do and great to code in javascript.

## Update day 8 : return leftmost digit that occurs in given string
Here, in this challenge, task is to find the digit in the leftmost of the given string, so to solve this problem, created a string strNums = ['0', '1', .......,'9']
and then by const chars = str.split(''); we get an array of str individual elments,and using includes() function in for loop, we checked if strNums has any char of chars and
returned it as return char;

   Here is the logic: 
    
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split('');
    
    for(const char of chars) {
        if(strNums.includes(char)) {
            return char;
        }
    }

## Update day 9 : return the largest number for n digit number
Here, in this challenge, input n of integer type is entered and it should return the n digit largest number i.e., 9999...upto n digits
For example, if n = 2, then largest number (of 2 digit) = 99, here in the solution n = num is given as function parameter and we return largest number, there are many ways to this solution, few below :

    // First way
    let placeholder = ''; 
    for(let i = 0; i < num; i++) {     // for loop upto num digits 
        placeholder = placeholder.concat('9');      // concatenates 9 upto num times using this loop
    }

    // Second way 
    const placeholder = '9'.repeat(num);   using repeat() function repeats 9 and concatenate upto num times

    return parseInt(placeholder);  // placeholder gets returned after changed into int using parseInt()

## Update day 10 : find the largest multiple N
Here, this challenge is the last of this series but not the least, it was a great challenge to solve it, this challenge says to return the maximum multiple number by the divisor 
in the function two parameters are given bound and divisor, we ahve to return maximum multiple of divisor in the given bound, for eample if we take divisor = 3 and bound = 100
then we must return the greatest multiple of 3 in the bound 0 to 100 and that is 99, 

Below is the logic to this problem :

    const remainder = bound % divisor;  // remainder after dividing bound and divisor 
    
    return bound - remainder;  // subtracting that remainder from the bound will give the value that is max multiple of divisor in given bound

### it was all a great challenge series, In Questions.md, all question links are given, you can check them out, Thanks :)
