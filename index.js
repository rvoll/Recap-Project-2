// phew… not a lot going on here. Please add some code!

// The following acceptance criteria should be met for the bookmark button:

console.clear();

// ERSTE AUFGABE:
// first select the HTML element with const and query selector:
const bookmarkButton = document.querySelector('[data-js="bookmark"]');

// Then use addEventListener so the button can "listen" to the click
// and do whatever you tell it - here: toggle the additional active bookmark class:
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// //ZWEITE AUFGABE:
// // first select the HTML element with const and query selector:
// add data-js in the html file if it is not there, yet; don't use the class here (although it would work)
const answerButton = document.querySelector('[data-js="card__button-answer"]');
const answer = document.querySelector('[data-js="card__answer"]');

// von Sylvie: UNBEDINGT NOCHMAL ANGUCKEN
answerButton.addEventListener("click", () => {
  //   console.log("sanity check");

  //   This shows/hides the answer:
  answer.classList.toggle("card__answer--active");

  //   This is for the button text:
  if (answer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});

// If the user clicks on an answer button, we want the button to say "hide answer"
// when the answer is displayed and "show answer"
// when the answer is not displayed:

//   answerButton.textContent = "Hide answer"
//   if answer
//   class="card__answer--active"}
//     else {
//     answerButton.textContent = "Show answer"   }
// });
