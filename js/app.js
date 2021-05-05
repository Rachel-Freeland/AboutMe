'use strict';

// proof of life
console.log('Hello World!');

// ask user their name so they can receive a custom greeting
let userName = prompt('Hi user! What is your name?');
console.log('Greetings ' + userName +'! Welcome to my page!');

// Ask a question that expects a 'yes' or 'no' answer. Question 1
let dogAnswer = prompt('Do you think Rachel has a dog? Please answer Yes or No');

// convert answer to all lowercase
let lowercaseDog = dogAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseDog === 'yes' || lowercaseDog === 'y') {
  console.log('You are correct, ' + userName + '!');
} else if (lowercaseDog === 'no' || lowercaseDog ==='n') {
  console.log('You must not know Rachel very well. Maybe you can redeem yourself on the next question.')
} else {
  console.log('Did you understand the question?');
}

// Question 2 that requires a 'yes' or 'no' answer
let catAnswer = prompt('Do you think Rachel has a cat? Please answer Yes or No');

// convert the answer to all lowercase
let lowercaseCat = catAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseCat === 'no' || lowercaseCat === 'n') {
  console.log('That would be correct! Luna\'s prey drive is too high for her to live with a cat.');
} else if (lowercaseCat === 'yes' || lowercaseCat === 'y') {
  console.log('That would be incorrect. Luna might eat the cat because she has a high prey drive.');
} else {
  console.log('I don\'t think you understood the question or possibly the instructions.')
}

// Question 3 that requires a 'yes' or 'no' answer
let childrenAnswer = prompt('Do you think Rachel has any children?');

// convert the answer to all lowercase
let lowercaseChildren = childrenAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseChildren === 'yes' || lowercaseChildren === 'y') {
  console.log('Good job, ' + userName + '! Rachel has 3 children. She has 2 daughters and 1 son.');
} else if(lowercaseChildren === 'no' || lowercaseChildren === 'n') {
  console.log('That would be incorrect. Rachel has 3 children. She has 2 daughters and 1 son.');
} else {
  console.log('I don\'t think you are paying attention here.');
}

// Question 4 that requires a 'yes' or 'no' answer
let siblingAnswer = prompt('Do you think Rachel is an only child?');

// convert the answer to all lowercase
let lowercaseSibling = siblingAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseSibling === 'no' || lowercaseSibling === 'n') {
  console.log('You are right! Rachel has a younger sister.');
} else if (lowercaseSibling === 'yes' || lowercaseSibling === 'y') {
  console.log('Ooops! The correct answer would be \'yes\'. Rachel has a younger sister.');
} else {
  console.log('You should understand how this works by now. I don\'t think you are trying.');
}

// Question 5 that requires a 'yes' or 'no' answer
let cityAnswer = prompt('Is Rachel originally from Seattle, WA?');

// convert the answer to all lowercase
let lowercaseCity = cityAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseCity === 'no' || lowercaseCity === 'n') {
  console.log('You are correct! Rachel is originally from Memphis, TN. The \"Home of the Blues, Elvis, and the World Championship BBQ cooking contest!\"');
} else if (lowercaseCity === 'yes' || lowercaseCity === 'y') {
  console.log('Womp! Womp! That would be incorrect! Rachel is from Memphis, TN. The \"Home of the Blues, Elvis, and the World Championship BBQ cooking contest!\"');
} else {
  console.log('I don\'t think you were even trying!');
}