"use strict";
/*
Problem URL: 
https://projecteuler.net/problem=1

Problem statement:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

// Initialize the variables described in the problem statement.
var max_value = 1000;
var first_multiple = 5;
var second_multiple = 3;

// The sum variable will hold the desired return value. Initialize it with 0.
var sum = 0;

// The for loop will check each natural number between 1 and the max_value to see if it is a multiple of 3 or 5.
for (var counter = 1;counter < max_value;counter++)
{
  // We only care is a number is either a multiple of 5 or 3, so we can use the || operator.
  // The operation of (counter % 3 === 0) will be true when the counter is a multiple of 3. 
  if ((counter % first_multiple === 0)||(counter % second_multiple === 0))
  {
    // If we have found a multiple of either first_multiple or second_multiple then we add it to our sum.
    sum += counter;
   }
}

// After the multiples have been searched we have the final sum to be returned.
return sum;

