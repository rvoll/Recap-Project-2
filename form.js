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
// const userQuestion = document.querySelector('[data-js="form__submitButton"]');

// 2. listen to click
// 3. prevent default behaviour
//
// auskommentiert:
// button.addEventListener("click", (event) => {
//   event.preventDefault();
// });

// 4. Read all entered data from the input fields (question, answer, tags)
const form = document.querySelector('[data-js="form__formBox"]');

mehr zu 3. 
// Was ist der beste/einzig mögliche Ort für prevent?
// Was genau passiert und warum ist es am falschen Ort problematisch?
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target);
  });

// 5. Generate all DOM element for a card with createElement()

// form.addEventListener("submit", (event) => {
//   const userQuestionInput = document.querySelector(
//     '[data-js="form__inputBox"]'
//   );
//   const userQuestion = userQuestionInput.value;
//   event.preventDefault();
//   console.log(event.target);
//   console.log("sanity check");
// });

// 6. Insert the form's data as text into the DOM elements
// 7. Append the card to the page, directly below the form
