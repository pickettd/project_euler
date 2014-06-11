/*jslint node: true */
'use strict';

/*
Problem URL: 
https://projecteuler.net/problem=5

Problem statement:
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/*
Analysis and logic:
First step is a little analysis. To check if a number is evenly divisible by 1 through 20 
we don't actually have to check every number. 

If a number X is evenly divisible by 20 then we know that X is also evenly divisble by 20's factors.
So by checking if X is evenly divisible by 20 we don't need to check 2, 4, or 5.

By starting at 20 and working down we can see that for a given number we need to check
the following factors in order to verify that a given X is evenly divisible by 1 through 20: 
20, 19, 18, 17, 16, 15, 14, 13, 12, and 11

For the list of X values to check we just take multiples of the biggest factor we are interested in (20 in this case).
*/

// The biggest factor to consider is listed by itself for convenience.
var biggest_factor = 20;
// The other factors to consider can be put in any order.
var other_factors_array = [19, 18, 17, 16, 15, 14, 13, 12, 11];

// The current candidate is the X value that we are considering in each loop. 
// It is initialized with the value of the biggest factor to consider.
var current_candidate = biggest_factor;

// The loop will end when a solution is found (since by definition all of the factors multipled together 
// will be evenly divisible by all of them). The product of the factors could be calculated and used 
// as the loop end condition but it would be unnecessary calculation.
while (true) {
    // This variable will be set to false if the current candidate 
    // is not evenly divisible by one of the input factors.
	var evenly_divisble = true;
    // This variable is to loop through the factors to consider array
	var counter = 0;
    
    // In this loop we check all the elements of the factors array 
    // to see if the current candidate is evenly divisble by all of them.
    // We exit this loop as soon as one of the required factors fails to divide the candidate evenly.
	while (evenly_divisble && (counter < other_factors_array.length)) {
		if (current_candidate % other_factors_array[counter] !== 0) {
			evenly_divisble = false;
        }
		counter += 1;
	}

    // If all the products were found to divide the candidate evenly
    // then we can print the answer and exit the while(true) loop.
	if (evenly_divisble) {
		console.log("Found the smallest evenly divisible product: " + current_candidate);
		break;
	}
	
    // We only need to check multiples of our biggest factor in each loop.
	current_candidate += biggest_factor;
}