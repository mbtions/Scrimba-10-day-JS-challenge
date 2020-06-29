/*

: Challenge 3 :

In this challenge, you'll:

Write a function that returns the sum of alternating numbers and return them.

*/

// Solution code 2

function alternatingSums(array) {
    let evenSum = 0;
    let oddSum = 0;
    
    for(let i = 0; i < array.length; i++) {
        if(i % 2 === 0) {
            evenSum += array[i];
        } else {
            oddSum += array[i];
        }
    }
    
    return [evenSum, oddSum];
}


/**
* Test Suite 
*/
describe('alternatingSums()', () => {
    it('returns alternating sums of even and odd', () => {
        // arrange
        const nums = [50, 60, 60, 45, 70];
        
        // act
        const result = alternatingSums(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([180, 105]);
    });
});
