/*jslint node: true */
'use strict';

/*
Problem URL: 
https://projecteuler.net/problem=3

Problem statement:
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


// The target number from the problem statement.
var target_number = 34;

// Declare the first loop variable and initialize the success boolean variable.
var counter;
var success = false;

// In this loop we look for factors of the target number. The biggest possible prime factor
// for the target number is target_number / 2 so we will start the counter there.
for (counter = Math.floor(target_number / 2); counter >= 2; counter -= 1) {
    // Check if the counter is a factor of the target number.
    if (target_number % counter === 0) {
        // Declare the second loop variable and initialize the success boolean variable.
        var isPrime = true;
        var inner_counter;
        
        // We know that counter is a factor of the target number, now we need to know if it is prime.
        // The inner_counter starts at 2 (all numbers are divisible by 1) and increments until 
        // the inner_counter is greater than the square root of counter. As soon as a factor is
        // found for counter we will break the inner loop.
        for (inner_counter = 2; inner_counter * inner_counter <= counter; inner_counter += 1) {
            if (counter % inner_counter === 0) {
                isPrime = false;
                break;
            }
        }
        
        // If the previous loop checked all numbers from 2 until counter's square root
        // and didn't find a factor then we have found the solution.
        if (isPrime) {
            console.log("Largest prime factor is: " + counter);
            success = true;
            break;
        }
    }
}
if (!success) {
    console.log("Unable to find largest prime factor for input number " + target_number);
}