"use strict";

const submitBtn = document.querySelector(".submit");
const goBackBtn = document.querySelector(".back");
const cardActive = document.querySelector(".card-active");
const cardInactive = document.querySelector(".card-inactive");
const ratingNumber = document.querySelectorAll(".rating__number");
const rating = document.querySelector(".rating");

submitBtn.addEventListener("click", (e) => {
  // Prevent the reload default
  e.preventDefault();
  // remove hidden class
  cardInactive.classList.remove("hidden");
  // add hidden class
  cardActive.classList.add("hidden");
});

goBackBtn.addEventListener("click", (e) => {
  // Prevent the reload default
  e.preventDefault();
  // add hidden class
  cardInactive.classList.add("hidden");
  // remove hidden class
  cardActive.classList.remove("hidden");
});

ratingNumber.forEach((el) => {
  // Add event listener to each of the button
  el.addEventListener("click", (e) => {
    // Prevent the reload default
    e.preventDefault();
    //   clearing the previous text content
    rating.innerHTML = "";

    rating.textContent = el.textContent;
  });
});
