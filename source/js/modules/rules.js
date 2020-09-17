export default () => {
  const rulesItemLastElement = document.querySelector(`.rules__item:last-child`);
  const rulesLink = document.querySelector(`.rules__link`);

  rulesItemLastElement.addEventListener(`animationend`, () => {
    rulesLink.classList.add(`active`);
  });
};
