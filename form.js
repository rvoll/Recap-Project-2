// phew… not a lot going on here. Please add some code!

// The following acceptance criteria should be met for the bookmark button:

console.clear();

// The data entered into the form by users should be used to create a new question
// that will be displayed as a card like the other questions.

// Listen to the form's submit event

// Prevent the default submit behavior to handle everything within JavaScript

// Read all entered data from the input fields (question, answer, tags)
// Generate all DOM element for a card with createElement()
// Insert the form's data as text into the DOM elements

// Append the card to the page, directly below the form

// Listen to the form's submit event

// 1. introduce button
const button = document.querySelector('[data-js="form__submitButton"]');
const userQuestion = document.querySelector('[data-js="form__submitButton"]');
// 2. listen to click
// 3. prevent default behaviour

button.addEventListener("click", (event) => {
  event.preventDefault();
});

// Read all entered data from the input fields (question, answer, tags)
// see:
// HIER WEITER!!!

// function submitForm() {
//   var userQuestion = document.querySelector("#your-question").value;
//   console.log("user question: ", userQuestion);
//   console.log("sanity check");
// }

// button.addEventListener("submit", (event) => {
//   console.log("sanity check");
//   event.preventDefault();

//   //   const formElements = event.target.elements;

//   const userQuestion = new userQuestion(event.target);
//   const data = Object.fromEntries(userQuestion);

//   console.log(data);
// });

// //   next add event listener for input box

// const questionInput = document.querySelector('[data-js="form__inputBox"]');
