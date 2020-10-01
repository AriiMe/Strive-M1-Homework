/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const rectangle = function (l1, l2) { 
	
	const result = l1 * l2;
	
	return result;
	
};
	console.log("The area of rectangle is: " + rectangle(12, 6));
	
    // alternative
    const rectangle0 = function (l3,l4) { 
        return l3 * l4;
    };

    console.log(rectangle0(4, 6));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
let x1 = 6;
let y1 = 6;

function crazySum (x1, y1) {
    if (x1 === y1) {
      return 3 * (x1 + y1);
      } 
     else
     {
      return "not equal";
     }
   }
  //console.log(crazySum(5, 8));
  console.log(crazySum(x1, y1));



/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
let numba = 21;

function crazyDiff (numba) {
    if (numba <= 19) {
      return (19 - numba);
      }
    else
      {
       return (numba - 19) * 3;
      }
  }
console.log(crazyDiff(numba));

/* alternetive 
const crazyDiff = (x) => {
  let difference = x - 19;
  return difference > 0 ? difference * 3 : "Your number is equal or < 19";
}; 
*/


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */

function boundary(int) {
    return (20 < int && int <= 100) || int === 400 ? true : false;
}
  
  console.log(boundary(500));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */

function strivify(S) {

    const result = `Strive${S}`;
    if (S.startsWith("Strive")) {
        return S

    } else {
        return result
    }

}
console.log(strivify("S"));

/*
const strivify1 = (S0) => {
    let newString = (`Strive${S0}`);
  return S0.startsWith("Strive") ? S0 : newString;
};

console.log(strivify1("strive"));
*/

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/



/* WRITE YOUR CODE HERE */





/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
