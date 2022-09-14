# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Read More ](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-)

### Screenshot

![Desktop View](./images/Desktop%20design.png)
![Mobile View](./images/mobile%20design.png)

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

Picking a challenge like on [Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-) did not only solidify my HTML AND CSS skill but also taught me how a [README](README.md) can be written. If there is anything I learnt while working on this project, How to writing a standard [README](README.md) will be part of it.

below are some snippets of important HTML structure and CSS styles of the project:

```html
<!--==================== MAIN ====================-->
<main class="main">
  <section class="card__wrapper--components container">
    <section class="card__components--items Sedans">
      <div class="card__contents">
        <img src="./images/icon-sedans.svg" alt="Card component logo" />
        <h1 class="card__contents--heading">Sedans</h1>
        <p class="card__contents--description">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <a href="#" class="card__contents--link">
          <button class="card__contents--btn sedans-btn">Learn More</button></a
        >
      </div>
    </section>
  </section>
</main>
```

```css
/*=============== MAIN STYLES ===============*/
.card__wrapper--components {
  height: 70%;
  width: 70%;
  background-color: var(--bg-color-dark-cyan);
  border-radius: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
}
```

### Useful resources

No external library or framework was used for this project. It is pure CSS and HTML

## **Author**

- Website - [Tobiloba Ibraheem](https://github.com/Tech-sensei)
- Frontend Mentor - [@tech-sensei](https://www.frontendmentor.io/profile/tech-sensei)
- Twitter - [@Im_Tobilobah](https://www.twitter.com/Im_Tobilobah)
