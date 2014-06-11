/*jslint node: true */
'use strict';

/*
Problem URL: 
https://projecteuler.net/problem=4

Problem statement:
A palindromic number reads the same both ways. The largest palindrome made from the product
of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

/*
Analysis and logic:
The approach here is to have an outer loop generating the largest palindromes we can based on the input rules
then run an inner loop to look for factors that fit the requirements. 

If we analyze the requirement that the factors have three digits then we know the largest palindrome must
be between 100 * 100 = 10000 and 999 * 999 = 998001. The largest possible palindrome number 
then would be 997799. Then we use the rules of palindrome numbers to generate the rest to check.
For this problem statement it means that we will construct the possible palindromes starting with
a root of 997 and a multiplier of 1000 (to get the maximum value of 997799 and minimum of 10000).
*/

// Initialize the variables defining the problem statement and analysis.
var max_multiple = 999;
var min_multiple = 100;
var palindrome_root_max = 997;
var palindrome_root_min = 10;
var palindrome_multiplier = 1000;

// Initialize the success boolean variable and the palindrome root to the largest one possible.
var success = false;
var palindrome_root = palindrome_root_max;

// This is the outer loop to generate palindrome numbers starting with the largest (based on the
// input rules). The loop will break once a factor is found that matches the input rules.
while ((!success) && (palindrome_root >= palindrome_root_min)) {
    
    // The palindrome number is constructed from the palindrome root (the digits that determine the rest
    // of the number) multiplyed by the palindrome multiplier (based on the number of digits in the palindrome
    // numbers to check) and then added to the reverse of the palindrome root
    var current_palindrome = palindrome_root * palindrome_multiplier;
    var reverse_root_string = palindrome_root.toString().split("").reverse().join("");
    
    // With parseInt the base10 radix should be included explicitly
    current_palindrome += parseInt(reverse_root_string, 10);

    // Initialize the variables to search for a factor in the range of the minimum to maximum multiples.
    var counter = max_multiple;
    var possible_factor = current_palindrome / counter;
    
    // As the counter gets smaller searching for a factor in the range of the provided minimum and maximum,
    // we only want to continue searching if the palindrome divided by the counter stays within our acceptable range.
    while ((possible_factor <= max_multiple) && (possible_factor >= min_multiple)) {
        
        // If we are still in the loop and the current palindrome is evenly divided by our current counter then
        // we have found the solution.
        if ((current_palindrome % counter) === 0) {
            console.log("Found the answer: " + counter + " times " + possible_factor + " is equal to " + current_palindrome);
            success = true;
            break;
        }
        
        // Update the factors for the next inner loop.
        counter -= 1;
        possible_factor = current_palindrome / counter;
    }
    
    // Update the palindrome root for the next outer loop.
    palindrome_root -= 1;
}

if (!success) {
    console.log("No pair of multiples between " + min_multiple + " and " + max_multiple + " found with palindrome product");
}