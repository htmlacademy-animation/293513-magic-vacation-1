export default class AccentTypographyBuild {
  constructor(elementSelector, timer, classForActive, property) {
    this._TIME_SPACE = 100;

    this._element = document.querySelector(elementSelector);
    this._timer = timer;
    this._classForActive = classForActive;
    this._property = property;
    this._timeOffset = 0;
    this._switch = true;

    this.prePareText();
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;

    if (this._switch === true) {
      this._timeOffset += this._TIME_SPACE;
      this._switch = false;
    } else {
      this._timeOffset -= this._TIME_SPACE / 3;
      this._switch = true;
    }

    span.style.transition = `${this._property} ${this._timer}ms ease-out ${this._timeOffset}ms`;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent
      .trim()
      .split(` `)
      .filter((el) => el !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word)
        .reduce((fragment, letter) => {
          fragment.appendChild(this.createElement(letter));
          return fragment;
        }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }

    this._element.classList.add(this._classForActive);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActive);
  }
}
