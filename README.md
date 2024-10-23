# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size

### Screenshot

<details>
<summary>Desktop</summary>

![Desktop](./design/desktop-design.jpg)

</details>

<details>
<summary>Mobile</summary>

![Mobile](./design/mobile-design.jpg)

</details>

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsiveness
- [React](https://reactjs.org/) - JS library

### What I learned

Responsive font-size using vw is impressive and helps a lot to develop faster when you need texts to adapt to the screen. Also, using ch on width to control the characters size is a way to go.

```css
.grid-item-social p:first-child,
.grid-item-social span {
  font-size: 5vw;
  width: 12ch;
  font-weight: var(--med-weight);
  line-height: 1;
}
```

### Useful resources

- [Css-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - This website always help when I need to remember how to use css grid properly.
- [Gimp](https://www.gimp.org/) - Powerful and free image editor to deal with images or even just to use the color picker in an jpeg.

## Author

- Website - [Victor Emmanuel](https://victor-web-dev.github.io/)
- Frontend Mentor - [@victor-web-dev](https://www.frontendmentor.io/profile/victor-web-dev)
