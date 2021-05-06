'use strict';

// proof of life
console.log('Hello World!');

// ask user their name so they can receive a custom greeting
let userName = prompt('Hi user! What is your name?');
// console.log('Greetings ' + userName +'! Welcome to my page!');
alert('Greetings ' + userName +'! Welcome to my page!');

// Ask a question that expects a 'yes' or 'no' answer. Question 1
let dogAnswer = prompt('Do you think Rachel has a dog? Please answer Yes or No');

// convert answer to all lowercase
let lowercaseDog = dogAnswer.toLowerCase();

// create a variable to hold the user's score
let score = 0;


// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseDog === 'yes' || lowercaseDog === 'y') {
  // console.log('You are correct, ' + userName + '!');
  alert('You are correct, ' + userName + '!');
  score++;
  console.log(score);
} else if (lowercaseDog === 'no' || lowercaseDog === 'n') {
  // console.log('You must not know Rachel very well. Maybe you can redeem yourself on the next question.');
  alert('You must not know Rachel very well. Maybe you can redeem yourself on the next question.');
} else {
  // console.log('Did you understand the question?');
  alert('Did you understand the question?');
}

// Question 2 that requires a 'yes' or 'no' answer
let catAnswer = prompt('Do you think Rachel has a cat? Please answer Yes or No');

// convert the answer to all lowercase
let lowercaseCat = catAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseCat === 'no' || lowercaseCat === 'n') {
  // console.log('That would be correct! Luna\'s prey drive is too high for her to live with a cat.');
  alert('That would be correct! Luna\'s prey drive is too high for her to live with a cat.');
  score++;
} else if (lowercaseCat === 'yes' || lowercaseCat === 'y') {
  // console.log('That would be incorrect. Luna might eat the cat because she has a high prey drive.');
  alert('That would be incorrect. Luna might eat the cat because she has a high prey drive.');
} else {
  // console.log('I don\'t think you understood the question or possibly the instructions.');
  alert('I don\'t think you understood the question or possibly the instructions.');
}

// Question 3 that requires a 'yes' or 'no' answer
let childrenAnswer = prompt('Do you think Rachel has any children?');

// convert the answer to all lowercase
let lowercaseChildren = childrenAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseChildren === 'yes' || lowercaseChildren === 'y') {
  // console.log('Good job, ' + userName + '! Rachel has 3 children. She has 2 daughters and 1 son.');
  alert('Good job, ' + userName + '! Rachel has 3 children. She has 2 daughters and 1 son.');
  score++;
} else if(lowercaseChildren === 'no' || lowercaseChildren === 'n') {
  // console.log('That would be incorrect. Rachel has 3 children. She has 2 daughters and 1 son.');
  alert('That would be incorrect. Rachel has 3 children. She has 2 daughters and 1 son.');
} else {
  // console.log('I don\'t think you are paying attention here.');
  alert('I don\'t think you are paying attention here.');
}

// Question 4 that requires a 'yes' or 'no' answer
let siblingAnswer = prompt('Do you think Rachel has any siblings?');

// convert the answer to all lowercase
let lowercaseSibling = siblingAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseSibling === 'yes' || lowercaseSibling === 'y') {
  // console.log('That is correct! Rachel has a sister.');
  alert('That is correct! Rachel has one sister.');
  score++;
} else if (lowercaseSibling === 'no' || lowercaseSibling === 'n') {
  // console.log('Ooops! The correct answer would be \'yes\'. Rachel has a younger sister.');
  alert('Ooops! The correct answer would be \'yes\'. Rachel has a younger sister.');
} else {
  // console.log('You should understand how this works by now. I don\'t think you are trying.');
  alert('You should understand how this works by now. I don\'t think you are trying.');
}

// Question 5 that requires a 'yes' or 'no' answer
let cityAnswer = prompt('Is Rachel originally from Seattle, WA?');

// convert the answer to all lowercase
let lowercaseCity = cityAnswer.toLowerCase();

// determines acceptable answers and returns an alert to whether the user was right or wrong
if (lowercaseCity === 'no' || lowercaseCity === 'n') {
  // console.log('You are correct! Rachel is originally from Memphis, TN. The \"Home of the Blues, Elvis, and the World Championship BBQ cooking contest!\"');
  alert('You are correct! Rachel is originally from Memphis, TN. The "Home of the Blues, Elvis, and the World Championship BBQ cooking contest!"');
  score++;
} else if (lowercaseCity === 'yes' || lowercaseCity === 'y') {
  // console.log('Womp! Womp! That would be incorrect! Rachel is from Memphis, TN. The \"Home of the Blues, Elvis, and the World Championship BBQ cooking contest!\"');
  alert('Womp! Womp! That would be incorrect! Rachel is from Memphis, TN. The "Home of the Blues, Elvis, and the World Championship BBQ cooking contest!"');
} else {
  // console.log('I don\'t think you were even trying!');
  alert('I don\'t think you were even trying!');
}

// Question 6 is a "Guess the number" game with a randomly generated number and only 4 chances to get it right
let myNumber = Math.floor(Math.random() * 30) + 1;

// loop that gives the user 4 chances to guess the number
for(let i = 0; i < 4; i++) {

  // prompt the user to guess a number between 1 and 20
  let userGuess = prompt('Let\'s play a guessing game. You get 4 chances to get it right. Guess a number between 1 and 30:');

  // parse the string assigned to userGuess into a number
  let userNumber = parseInt(userGuess);
  console.log(userNumber);

  // check the user's number to make sure that it is valid
  if (userNumber >= 30 || userNumber <= 1) {
    userGuess = prompt('Try Again. Enter a number between 1 and 30:');
  }

  if (userNumber === myNumber) {
    alert('You got it right!! Congratulations!');
    score++;
    break;
  } else if (userNumber > myNumber) {
    alert('Too high! You can try again if you have any chances left.');
  } else if (userNumber < myNumber) {
    alert('Too low!! You can try again if you have any chances left.');
  } else {
    alert('Please use a valid number');
  }
  alert('You have ' + (3 - i) + ' guesses remaining.');
}

// Question 7 Uses an array of correct answers and gives the user 6 chances to get it right
let faveDesserts = ['boba tea' , 'green tea ice cream' , 'mochi' , 'goat cheese and fruit handpie' , 'tiramisu' , 'baked cheesecake'];

// set counter for max number of attempts
let counter = 6;

// set a flag for when they get a correct answer
let guessedRight = false;

while (guessedRight === false && counter > 0) {
  // prompt user to make a guess
  let userDessertGuess = prompt('Guess one of my favorite desserts: ');
  let lowercaseUserDessertGuess = userDessertGuess.toLowerCase();

  // check the user's guess against the list of desserts in the array
  for(let i = 0; i < faveDesserts.length; i++) {
    if (lowercaseUserDessertGuess === faveDesserts[i]) {
      // if they got it right, tell them, change the flag to true, increment score
      alert('That is correct!');
      guessedRight = true;
      score++;
    }
  }

  if (guessedRight === false) {
    alert('Sorry, that is not one of Rachel\'s favorite desserts. Try again.');
  }
  counter--;
}

alert('Any of these would have been correct: ' + faveDesserts);
alert(userName + ', your final score is ' + score);










