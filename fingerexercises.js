/*
Complete the following function that converts between fahrenheight and celsius. The two equations you need are  c = (f − 32) × 0.55 and f = c × 1.8 + 32. The function takes in two parameters:
- temperature, which is either a Fahrenheight or Celsius number
- fOrC, which is either "Fahrenheight" or "Celsius"

For example, when someone writes convertTemperature(40, "Fahrenheight"), the function should return the celsius value of 40 degrees Fahreheight.
*/

function convertTemperature(temperature, fOrC){
  // STUB
  if (fOrC === "Fahrenheight") {
    return (temperature - 32) * 0.55
  } else {
    return (temperature * 1.8) + 32
  }
  // ENDSTUB
}


/*
Complete the following function that returns the area of a triangle
*/

function areaOfTriangle(base,height){
  // STUB
  return 0.5 * base * height
  // ENDSTUB
}


// String problems

/*
Complete the following function that returns true if the two strings str1 and str2 are equal. If they are not equal, the function should return false.
*/

function stringsAreEqual(str1,str2){
  // STUB
  return str1 === str2
  // ENDSTUB
}

/*
Complete the function that takes two strings, places a space between them, and returns the new string. 
For example, if str1 is "hello" and str2 is "world", this function should return "hello world" (notice the space between str1 and str2).
*/

function putTwoStringsTogether(str1,str2){
  // STUB
  return str1 + ' ' + str2
  // ENDSTUB

}


// Array problems


/*
Though we did this in class, I think it's useful to try and do it again by yourself. Complete the following function that replace every word "HAM" in the array greenEggsAndHam with the world "BROCOLLI". Make sure the function replaceHamWithBrocolli returns the array with "HAM" replaced.
*/

var greenEggsAndHam = require('./greenEggsAndHam')
// You can write console.log(greenEggsAndHam) to see whats inside of the array

function replaceHamWithBrocolli(greenEggsAndHam){
  // STUB
  for (var i = 0; i < greenEggsAndHam.length; i++) {
    if (greenEggsAndHam[i] === "HAM") {
      greenEggsAndHam[i] = "BROCOLLI"
    }
  }
  return greenEggsAndHam
  // ENDSTUB
}

/*
Remember the push() function? As a refresher, we can use it to add new values to an existing array.

For example, if we have the array things = [], we can add items to the things array by writing things.push("a string"). 

Complete the following function that returns an array containing the string "uma is awesome" 100 times. You should try to use the push() function and a for-loop.

Remember that for-loops look like this
for(var i = 0; i < 5; i = i + 1) {
  // some code
}
*/

function umaIsAwesome(){
  // STUB
  var arr = [];
  for (var i = 0; i < 100; i++) {
    arr.push("uma is awesome")
  }
  return arr
  // ENDSTUB
}


/*
Complete the following function that adds all elements of the array 'nums' together. Notice that we don't know the length of 'nums' (hint: we can access the length of 'nums' by using nums.length) (another hint: we can look at all the elements in an array by using a for-loop).
*/

function addAllNumbersInArray(nums){
  // STUB
  var sum = 0
  for (var i = 0; i < nums.length; i++) {
    var number = nums[i]
    sum = sum + number
  }
  return sum
  // ENDSTUB
}


// Function problems

/*
Write a function called returnHi that returns the string "hi"
*/

// STUB
function returnHi(){
  return "hi"
}
// ENDSTUB

/*
Write a function called addsTwoNumbers that takes in two numbers as inputs (parameters) and returns the sum of them.
*/

// STUB
function addsTwoNumbers(num1,num2){
  return num1 + num2
}
// ENDSTUB

// Object problems

/*
Consider the object below called "person". Complete the following function changeName so that person's firstname is "Jyoti". (remember that we access object properties by doing object.property_name or object['property_name'])
*/

var person = {
  firstname: 'Raj',
  lastname: 'Chandra'
}

// STUB
person.firstname = 'Jyoti'
// ENDSTUB



/*
Challenge Problem (You can do it! :) 
Lets write a calculator! Complete the following function called "calculate" that takes in three parameters:
- num1 - a number
- operator - a string that is either "+", "-", "*", or "/"
- num2 - a number

Based on the three inputs, calculate should return the calculated value. 

Here are some examples of how we might use calculate. This should help you write the code:
- calculate(1,"+",1) = 2
- calculate(2, "*", 3) = 6
- calculate(3, "-", 3) = 6
- calculate(6, "/", 2) = 3

Hints: 
- Use if statements to determine what operation you should do between num1 and num2
- You can check if you're suppose to add num1 and num2 by writing 
  if (operator === "+") {
    // some code
  }
*/

function calculate(num1, operator, num2){
  // STUB
  if (operator === "+") {
    return num1 + num2
  } else if (operator === "-") {
    return num1 - num2
  } else if (operator === "*") {
    return num1 * num2
  } else if (operator === "/") {
    return num1 / num2
  }
  // ENDSTUB
}


/*
Super Challenge Problem (don't worry if you can't get it): A palindrome is a string that reads the same forwards and backwards. Here are some examples of palindromes:
- "wow"
- "mom"
- "racecar"

Complete the following function, isPalindrome, that should return true if the string input str is a palindrome. If str is not a palindrome, then return false.

Hint: there is a function called "reverse" that yo
*/

function isPalindrome(str){
  // STUB
  return str === str.split('').reverse().join('')
  // ENDSTUB
}



// Don't worry about the code below this line
module.exports = {
convertTemperature,
areaOfTriangle,
stringsAreEqual,
putTwoStringsTogether,
replaceHamWithBrocolli,
umaIsAwesome,
addAllNumbersInArray,
returnHi: returnHi ? returnHi : function(){},
addsTwoNumbers: addsTwoNumbers ? addsTwoNumbers : function(){},
calculate,
isPalindrome,
}