import AccentTypographyBuild from './accentTypography';

export default () => {
  const screenIntro = document.querySelector(`.screen--intro`);
  const animateIntroTitle = new AccentTypographyBuild(`.intro__title`, `500`, `active`, `transform`);

  const animateIntroDate = new AccentTypographyBuild(`.intro__date`, `350`, `active`, `transform`);

  document.body.addEventListener(`screenChanged`, () => {
    const screenIntroActive = screenIntro.classList.contains(`active`);

    if (screenIntroActive) {
      setTimeout(() => {
        animateIntroTitle.runAnimation();
      }, 350);

      setTimeout(() => {
        animateIntroDate.runAnimation();
      }, 1000);
    } else {
      animateIntroDate.destroyAnimation();
    }
  });
};
