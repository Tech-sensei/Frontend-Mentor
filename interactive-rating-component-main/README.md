# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## **Table of contents**

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

---

## **Overview**

---

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- [Read More ](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)

### Screenshot

![Desktop View](./design/Desktop%20view.png)
![Desktop View](./design/mobile%20view%20thank-you.png)
![Mobile View](./design/mobile%20view.png)

### Link

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

---

## **My process**

---

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- CSS Grid

### What I learned

Picking a challenge like on [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI) did not only solidify my HTML AND CSS skill but also taught me how a [README](README.md) can be written. If there is anything I learnt while working on this project, How to writing a standard [README](README.md) will be part of it.

below are some snippets of important HTML structure and CSS styles of the project:

```JS
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
    // set new text content of rating to ratingNumber textContent
    rating.textContent = el.textContent;
  });
});

```

### Useful resources

No external library or framework was used for this project. It is pure CSS and HTML

## **Author**

- Website - [Tobiloba Ibraheem](https://github.com/Tech-sensei)
- Frontend Mentor - [@tech-sensei](https://www.frontendmentor.io/profile/tech-sensei)
- Twitter - [@Im_Tobilobah](https://www.twitter.com/Im_Tobilobah)
